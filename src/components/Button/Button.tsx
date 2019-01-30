import * as React from "react";
import styles from "./Button.module.css";

export type Props = {
  disabled: boolean;
};

const Button: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <button className={styles.root} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  disabled: false
};

export default Button;
