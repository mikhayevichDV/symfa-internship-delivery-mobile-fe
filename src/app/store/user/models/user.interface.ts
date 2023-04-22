export interface IUserRequest {
  id: string;
  username: string;
  email: string;
  userId: string;
  address: string;
  avatar: IAvatar;
}

export interface IAvatar {
  id: string;
  avatarPath: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
