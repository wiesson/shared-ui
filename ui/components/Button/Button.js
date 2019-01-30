import * as React from "react";
const Button = ({ children, ...props }) => (React.createElement("button", Object.assign({}, props), children));
Button.defaultProps = {
    disabled: false
};
export default Button;
