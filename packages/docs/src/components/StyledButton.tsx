import clsx from "clsx";
import styles from "./StyledButton.module.css";

namespace StyledButton {
  export interface Props extends React.ComponentProps<"button"> {}
}

const StyledButton: React.FC<StyledButton.Props> = ({ type = "button", ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx(styles["styled-button"], props.className)}
    >
      {props.children}
    </button>
  );
};

export { StyledButton };
