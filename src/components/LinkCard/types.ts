import { CardProps } from "antd";

export interface ILinkCard extends CardProps {
	to: string;
	disabled: boolean;
}

export interface IExternalLinkCard extends CardProps {
	disabled: boolean;
	externalLink: boolean;
	sso: boolean;
}

export interface ILinkCardAnimated extends ILinkCard {
	animation: object;
}

export interface ILinkCardIconed extends ILinkCard {
	icon: React.ReactNode;
}
