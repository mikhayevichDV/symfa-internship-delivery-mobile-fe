export interface IUserRequest {
  id: string;
  username: string;
  email: string;
  userId: string;
  address: string;
  avatar: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
