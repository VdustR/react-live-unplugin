import { useState } from "react";
import { StyledButton } from "./StyledButton";

const DemoComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <StyledButton
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      <span>Count: {count}</span>
    </StyledButton>
  );
};

export default DemoComponent;
