// INFO (serif) : User State Types
export interface IUser {
	id: string;
	username: string;
	iat: number;
	exp: number;
}
export interface UserState {
	user: IUser;
}

// INFO (serif) : Counter State Types

export interface CounterState {
	value: number;
}
