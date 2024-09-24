import { ButtonStyled, Container, ContainerLogin, WelcomeText } from "./styles";
import { Col, Form, Input, Row } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { useUser } from "@/context/userContext";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import React from "react";
import useUser from "../../hooks/useUser";

const LoginPage = () => {
	const [form] = useForm();
	const { handleLogin } = useUser();
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<Container>
			<ContainerLogin>
				<WelcomeText>Bem vindo(a)!</WelcomeText>
				<Form form={form} layout="vertical">
					<Row gutter={24}>
						<Col span={24}>
							<Form.Item
								label="Usuário"
								name="name"
								required
								rules={[{ required: true, message: "Campo obrigatório" }]}
							>
								<Input />
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item
								label="Senha"
								name="password"
								required
								rules={[{ required: true, message: "Campo obrigatório" }]}
							>
								<Input.Password
									type="password"
									iconRender={(visible: boolean) =>
										visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
									}
								/>
							</Form.Item>
						</Col>
					</Row>

					<Row justify={"center"} gutter={24}>
						<ButtonStyled
							size="large"
							loading={loading}
							type="primary"
							onClick={() => {
								setLoading(true);
								form
									.validateFields()
									.then((values) => {
										handleLogin(values);
									})
									.catch((error) => {
										console.log(error);
									})
									.finally(() => {
										setLoading(false);
									});
							}}
						>
							Entrar
						</ButtonStyled>{" "}
					</Row>
				</Form>
			</ContainerLogin>
		</Container>
	);
};

export default LoginPage;
