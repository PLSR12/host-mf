import { type ReactElement } from "react";
import {
	HeaderContainer,
	LinksContainer,
	ProfileContainer,
	Text,
	TextStrong,
	UserInfo,
} from "./styles";
import { Avatar, Space } from "antd";
import { IoPersonSharp } from "react-icons/io5";
import React from "react";
import useUser from "../../hooks/useUser";

export default function Header(): ReactElement {
	const { user } = useUser();

	return (
		<HeaderContainer>
			<LinksContainer>
				<a href="/">Home</a>
				<a href="/remote">Usuários</a>
			</LinksContainer>

			<ProfileContainer>
				<Space size="small">
					<Avatar src={<IoPersonSharp size={24} color={"white"} />} />
					<UserInfo>
						<Text>Bem-vindo(a)</Text>
						<TextStrong>{user.username}</TextStrong>
					</UserInfo>
				</Space>
			</ProfileContainer>
		</HeaderContainer>
	);
}
