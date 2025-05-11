import { useMemo } from "react";

namespace StyledButton {
  export interface Props extends React.ComponentProps<"button"> {}
}

const StyledButton: React.FC<StyledButton.Props> = ({
  style,
  type,
  ...props
}) => {
  const mergedStyle: typeof style = useMemo(
    () => ({
      ...style,
      textTransform: "uppercase",
    }),
    [style],
  );
  return (
    <button {...props} type={type} style={mergedStyle}>
      {props.children}
    </button>
  );
};

export { StyledButton };
