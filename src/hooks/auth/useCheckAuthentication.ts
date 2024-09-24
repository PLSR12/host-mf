export const useCheckAuthentication = () => {
	const userData = localStorage.getItem("userData");

	return {
		isAuthenticated: userData ? true : false,
	};
};
