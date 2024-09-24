import { Suspense, type ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import React from "react";
import LoadingFullScreen from "../components/Loading";
import LoginPage from "../pages/Login";
import NAVIGATION_CONSTANTS from "../constants/navigation";
import PrivateRoute from "./privateRoute";

const RemotePage = React.lazy(() => import("remote/RemoteApp"));

export default function Router(): ReactElement {
	return (
		<Suspense fallback={<LoadingFullScreen />}>
			<Routes>
				<Route path={NAVIGATION_CONSTANTS.LOGIN} element={<LoginPage />} />

				<Route path={NAVIGATION_CONSTANTS.HOME_APP} element={<PrivateRoute />}>
					<Route path={NAVIGATION_CONSTANTS.HOME_APP} element={<HomePage />} />
				</Route>

				<Route path={"/remote/*"} element={<PrivateRoute />}>
					<Route path={"/remote/*"} element={<RemotePage />} />
				</Route>

				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</Suspense>
	);
}
