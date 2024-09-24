import { Layout } from "antd";
import { ReactElement } from "react";
import { ContentContainer, LayoutStyled } from "./styles";
import Header from "../../components/Header";
import React from "react";
import Footer from "../../components/Footer";
// import { Sidebar } from "@/components/Sidebar";

const AuthenticatedLayout = ({
	children,
	withSideBar,
}: {
	children: ReactElement;
	withSideBar?: boolean;
}): ReactElement => {
	return (
		<Layout>
			{/* {withSideBar && <Sidebar />} */}

			<LayoutStyled>
				<Header />
				<ContentContainer>{children}</ContentContainer>
				<Footer />
			</LayoutStyled>
		</Layout>
	);
};

export default AuthenticatedLayout;
