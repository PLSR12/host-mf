import React from "react";
import { Button as ButtonAntD, ButtonProps } from "antd";

const Button = ({ children, ...buttonProps }: ButtonProps) => {
	return <ButtonAntD {...buttonProps}>{children}</ButtonAntD>;
};

export default Button;
