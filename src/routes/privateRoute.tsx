import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
// import { useUser } from "@/context/userContext";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/Login";
import { ReactElement } from "react";
import React from "react";
import useUser from "../hooks/useUser";
import { useCheckAuthentication } from "../hooks/auth/useCheckAuthentication";

const PrivateRoute = () => {
	const { isAuthenticated } = useCheckAuthentication();
	const { user } = useUser();
	function withAuthenticatedLayout(children: ReactElement) {
		return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
	}

	// console.log(user);

	if (!isAuthenticated) {
		return <LoginPage />;
	}

	return withAuthenticatedLayout(<Outlet />);
};

export default PrivateRoute;
