import { type ReactElement } from "react";
import {
	HeaderContainer,
	LinksContainer,
	ProfileContainer,
	Text,
	TextStrong,
	UserInfo,
} from "./styles";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { IoPersonSharp } from "react-icons/io5";
import React from "react";
import useUser from "../../hooks/useUser";

export default function Header(): ReactElement {
	const { user, handleLogout } = useUser();

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<span
					onClick={() => {
						handleLogout();
					}}
				>
					Sair
				</span>
			),
		},
	];

	return (
		<HeaderContainer>
			<LinksContainer>
				<a href="/">Home</a>
				<a href="/remote">Usuários</a>
			</LinksContainer>
			<Dropdown menu={{ items }} trigger={["click"]}>
				<a onClick={(e) => e.preventDefault()}>
					<ProfileContainer>
						<Space size="small">
							<Avatar src={<IoPersonSharp size={24} color={"white"} />} />
							<UserInfo>
								<Text>Bem-vindo(a)</Text>
								<TextStrong>{user.username}</TextStrong>
							</UserInfo>
						</Space>
					</ProfileContainer>
				</a>
			</Dropdown>
		</HeaderContainer>
	);
}
