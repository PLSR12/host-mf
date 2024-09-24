import { login } from "../services/user";
import { IBodyLogin, IUser } from "../types/IUser";
import { notification } from "antd";
import { userSlice } from "../store/features/user/slice";
import { useAppDispatch, useAppSelector } from "./store/useStore";
import NAVIGATION_CONSTANTS from "../constants/navigation";
import { useNavigate } from "react-router-dom";

export default function useUser() {
	const user = useAppSelector<IUser>((state) => {
		return state.user;
	});
	const { setUser } = userSlice.actions;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleLogin = ({ name, password }: IBodyLogin) => {
		login({ name, password })
			.then((data) => {
				const token = data.data.accessToken;
				const arrayToken = token.split(".");
				const userData = JSON.parse(atob(arrayToken[1]));

				dispatch(setUser(userData));

				localStorage.setItem("token", token);
				localStorage.setItem("userData", JSON.stringify(userData));

				notification.success({
					message: "Login realizado com sucesso",
				});

				if (location.pathname !== NAVIGATION_CONSTANTS.LOGIN) {
					navigate(location.pathname);
					return;
				}
				navigate(NAVIGATION_CONSTANTS.HOME_APP);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return {
		user,
		handleLogin,
	};
}
