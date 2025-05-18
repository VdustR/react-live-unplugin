import type { ComponentProps } from "react";
import React, { useMemo } from "react";

import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { transformCode } from "../transformCode";

namespace ReactLive {
  export interface Props
    extends Omit<
      ComponentProps<typeof LiveProvider>,
      "children" | "noInline"
    > {}
  export type Type = React.FC<Props>;
}

const classNameRecord = {
  container: "react-live-unplugin",
  editor: "react-live-unplugin__editor",
  preview: "react-live-unplugin__preview",
  error: "react-live-unplugin__error",
} satisfies Record<string, string>;

const ReactLiveInternal: ReactLive.Type = ({ scope, code, ...props }) => {
  const mergedScope = useMemo(
    () => ({
      ...React,
      ...scope,
    }),
    [scope],
  );
  return (
    <LiveProvider
      {...props}
      scope={mergedScope}
      noInline
      code={code || ""}
      transformCode={transformCode}
    >
      <div className={classNameRecord.container}>
        <div className={classNameRecord.editor}>
          <LiveEditor />
        </div>
        <div className={classNameRecord.error}>
          <LiveError />
        </div>
        <div className={classNameRecord.preview}>
          <LivePreview />
        </div>
      </div>
    </LiveProvider>
  );
};

const ReactLive = Object.assign(ReactLiveInternal, {
  displayName: "ReactLive",
  classNameRecord,
});

export { ReactLive };
