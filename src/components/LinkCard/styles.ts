import { Card } from "antd";
import styled from "styled-components";

export const Container = styled(Card)`
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;

	&.ant-card {
		.ant-card-head-title {
			white-space: normal !important;
		}
	}
`;

export const ContainerIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 10px;
`;

export const ContainerIconCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
