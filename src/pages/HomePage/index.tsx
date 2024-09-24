import { Col, Row } from "antd";
import { Container } from "./styles";
import { LinkCardIcon } from "../../components/LinkCard";
import { ILinkCardIconed } from "../../components/LinkCard/types";
import { useAppSelector } from "../../hooks/store/useStore";
import { IUser } from "../../types/IUser";
import { FaBoxArchive } from "react-icons/fa6";
import React from "react";

function HomePage() {
	const user = useAppSelector<IUser>((state) => {
		return state.user;
	});

	const homeCardsConfigFirstLine: ILinkCardIconed[] = [
		{
			to: "/remote",
			icon: <FaBoxArchive size={80} />,
			disabled: !user.username,
			title: "Produtos",
		},
	];

	return (
		<Container>
			<h1>Home</h1>
			<Row
				justify={"center"}
				gutter={24}
				style={{ width: "100%", marginTop: "25px" }}
			>
				{homeCardsConfigFirstLine.map((card, index) => {
					return (
						<Col key={index} span={12}>
							<LinkCardIcon
								to={card.to}
								icon={card.icon}
								size="default"
								disabled={card.disabled}
								title={card.title}
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default HomePage;
