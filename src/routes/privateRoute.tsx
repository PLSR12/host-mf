import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/Login";
import { ReactElement } from "react";
import React from "react";
import { useCheckAuthentication } from "../hooks/auth/useCheckAuthentication";

const PrivateRoute = () => {
	const { isAuthenticated } = useCheckAuthentication();
	function withAuthenticatedLayout(children: ReactElement) {
		return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
	}

	if (!isAuthenticated) {
		return <LoginPage />;
	}

	return withAuthenticatedLayout(<Outlet />);
};

export default PrivateRoute;
