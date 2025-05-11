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

const ReactLive: ReactLive.Type = ({ scope, code, ...props }) => {
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
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

export { ReactLive };
