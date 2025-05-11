import type { PluginObj } from "@babel/core";
import { transform } from "@babel/standalone";

function transformCode(code: string) {
  const result = transform(code, {
    presets: [
      [
        "typescript",
        {
          allExtensions: true,
          isTSX: true,
        },
      ],
      "react",
    ],
    plugins: [
      function removeImportsExports(): PluginObj {
        return {
          visitor: {
            ImportDeclaration(path) {
              path.remove();
            },
            ExportDefaultDeclaration(path) {
              const declaration = path.node.declaration;
              if (declaration.type === "Identifier") {
                // path.replaceWithSourceString(`render(<${declaration.name} />)`);
                path.replaceWithSourceString(
                  `render(React.createElement(${declaration.name}))`,
                );
              } else if (declaration.type === "FunctionDeclaration") {
                const id = declaration.id?.name || "Anonymous";
                // path.replaceWithSourceString(`render(<${id} />)`);
                path.replaceWithSourceString(
                  `render(React.createElement(${id}))`,
                );
              }
            },
            ExportNamedDeclaration(path) {
              path.remove();
            },
          },
        };
      },
    ],
  });

  return result.code;
}

export { transformCode };
