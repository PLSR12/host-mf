import { Layout, Typography, Image as ImageAnt } from "antd";
import styled from "styled-components";

const { Header: HeaderAnt } = Layout;
const { Text: TextAnt } = Typography;

export const HeaderContainer = styled(HeaderAnt)`
	display: flex;
	justify-content: space-between;
	width: 100%;
	color: white;
	background-color: #38592f;

	@media (max-width: 1024px) {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	@media (max-width: 1280px) {
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 30px;
	align-items: center;
	a {
		color: white !important;
	}
`;

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Text = styled(TextAnt)`
	color: white;
`;

export const TextStrong = styled(TextAnt)`
	color: white;
	font-weight: 900;
`;

export const Image = styled(ImageAnt)`
	max-width: 160px;
`;
