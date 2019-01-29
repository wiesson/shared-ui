import * as React from "react";

interface Props {
  disabled: boolean;
}

const Button: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
