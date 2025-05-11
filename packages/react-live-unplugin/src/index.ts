import type { StringFilter, UnpluginFactory } from "unplugin";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import defu from "defu";
import { createUnplugin } from "unplugin";

const randomSeed = Math.random().toString(36).slice(2);

namespace reactLiveUnplugin {
  export interface Options {
    enforce?: "pre" | "post";
    /**
     * The regex to match the file name.
     */
    id?: StringFilter;

    /**
     * The regex to exclude the file name.
     */
    exclude?: RegExp;

    /**
     * The react-live module path to use.
     */
    reactLiveModulePath?: string;

    /**
     * The export name of the react-live module.
     */
    reactLiveExportName?: string;
  }
}

const defaults = {
  id: /\.live\.(j|t)sx$/,
  exclude: /node_modules/,
  reactLiveModulePath: "react-live-unplugin/default/ReactLive",
  reactLiveExportName: "ReactLive",
} satisfies Partial<reactLiveUnplugin.Options>;

const reactLiveUnpluginFactory: UnpluginFactory<
  reactLiveUnplugin.Options | undefined
> = (options) => {
  const mergedOptions = defu(options, defaults);
  return {
    name: "unplugin-react-live",
    enforce: mergedOptions.enforce,
    transform: {
      filter: {
        id: mergedOptions.id,
        exclude: mergedOptions.exclude,
      },
      handler(code) {
        const ast = parse(code, {
          // parse in strict mode and allow module declarations
          sourceType: "module",
          plugins: ["jsx", "typescript"],
        });
        const imports: Array<string> = [];
        const importsCode: Array<string> = [];

        traverse(ast, {
          ImportDeclaration(path) {
            importsCode.push(
              code.substring(
                path.node.start ?? 0,
                path.node.end ?? code.length,
              ),
            );
            path.node.specifiers.forEach((specifier) => {
              imports.push(specifier.local.name);
            });
          },
        });

        const codeVarName = `code_${randomSeed}`;
        const scopeVarName = `scope_${randomSeed}`;
        const componentVarName = `Component_${randomSeed}`;

        const codeCode = `const ${codeVarName} = ${JSON.stringify(code)};`;
        const scopeCode = `const ${scopeVarName} = ${
          imports.length === 0 ? "{}" : `{ ${imports.join(", ")} }`
        };`;
        const exportDemo = `export default function Demo() {
        return (
          <${componentVarName} scope={${scopeVarName}} code={${codeVarName}} />
        );
      }`;

        const compiled = `import { ${
          mergedOptions.reactLiveExportName
        } as ${componentVarName} } from "${mergedOptions.reactLiveModulePath.replace(
          /"/g,
          '\\"',
        )}";
      ${importsCode.join("\n")}
      ${codeCode}
      ${scopeCode}
      ${exportDemo}
      `;
        return compiled;
      },
    },
  };
};

const reactLiveUnpluginInternal = createUnplugin(reactLiveUnpluginFactory);

const reactLiveUnplugin = Object.assign(reactLiveUnpluginInternal, {
  defaults,
});

export { reactLiveUnplugin };
