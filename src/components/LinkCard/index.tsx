import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { ILinkCardIconed } from "./types";

export const LinkCardIcon: React.FC<ILinkCardIconed> = ({
	...props
}: ILinkCardIconed) => {
	if (props.disabled) {
		return (
			<S.Container
				style={{
					backgroundColor: props.disabled ? "gray" : "white",
					cursor: props.disabled ? "no-drop" : "default",
				}}
				{...props}
			>
				<S.ContainerIconCard>{props.icon}</S.ContainerIconCard>
			</S.Container>
		);
	}

	return (
		<Link to={props.to}>
			<S.Container
				style={{
					backgroundColor: props.disabled ? "gray" : "white",
				}}
				{...props}
			>
				<S.ContainerIconCard>{props.icon}</S.ContainerIconCard>
			</S.Container>
		</Link>
	);
};
