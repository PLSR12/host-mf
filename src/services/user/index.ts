import { IResponse } from "../../types/IResponse";
import httpService from "../api";
import { IBodyLogin, IResponseLogin } from "../../types/IUser";

export const login = async (
	body: IBodyLogin
): Promise<IResponse<IResponseLogin>> => {
	// return httpService.post("/login", body);
	console.log(body);

	return Promise.resolve({
		status: 200,
		message: null,
		errors: null,
		data: {
			accessToken:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZkODA0YWUxLWM2ZjQtNDQ1NS05ZDdhLWE1YmZjNTE1YzhlNSIsInVzZXJuYW1lIjoiQWRtaW4iLCJpYXQiOjE3Mjc0NjU2NTQsImV4cCI6MTcyNzU1MjA1NH0.WIVdEW0DpzApigTHJlIjmxP9d1EN18E-K3J9EEb7NSk",
		},
	});
};
