export interface GetUserStatus {
	token?: Promise<string>; 
	email?: string;
	status: number;
	message?: string;
}
