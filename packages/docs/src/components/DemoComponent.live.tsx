/**
 * File: src/components/DemoComponent.live.tsx
 *
 * @example
 *
 * ```tsx
 * import DemoComponent from "@site/src/components/DemoComponent.live";
 *
 * <DemoComponent />
 * ```
 */

import { useState } from "react";
import { StyledButton } from "./StyledButton";

const containerStyle: React.ComponentProps<"div">["style"] = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "flex-start",
};

const DemoComponent: React.FC = () => {
  const [text, setText] = useState("Hello World");
  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <StyledButton>{text}</StyledButton>
    </div>
  );
};

export default DemoComponent;
