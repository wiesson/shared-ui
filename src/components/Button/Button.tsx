import * as React from "react";

export type Props = {
  disabled: boolean;
};

const Button: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

Button.defaultProps = {
  disabled: false
};

export default Button;
