import { IResponse } from "../../types/IResponse";
import httpService from "../api";
import { IBodyLogin, IResponseLogin } from "../../types/IUser";

export const login = async (
	body: IBodyLogin
): Promise<IResponse<IResponseLogin>> => {
	return httpService.post("/login", body);
};
