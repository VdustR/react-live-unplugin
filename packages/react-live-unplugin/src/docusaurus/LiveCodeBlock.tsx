import type { ReactLive } from "../default/ReactLive";
/// <reference types="@docusaurus/theme-live-codeblock" />
import Playground from "@docusaurus/theme-live-codeblock/lib/theme/Playground";
import React, { useMemo } from "react";
import { transformCode } from "../transformCode";

const LiveCodeBlock: ReactLive.Type = ({ scope, ...props }) => {
  const mergedScope = useMemo(
    () => ({
      ...React,
      ...scope,
    }),
    [scope],
  );
  return (
    <Playground
      {...props}
      noInline
      scope={mergedScope}
      transformCode={transformCode}
    />
  );
};

export { LiveCodeBlock };
