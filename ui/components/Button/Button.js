import * as React from "react";
import styles from "./Button.module.css";
const Button = ({ children, ...props }) => (React.createElement("button", Object.assign({ className: styles.root }, props), children));
Button.defaultProps = {
    disabled: false
};
export default Button;
