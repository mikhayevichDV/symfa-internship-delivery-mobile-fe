import { IUserRequest } from '@store/user/models/user.interface';

export interface IHistory {
  id: string;
  updatedAt: string;
  address: string;
  total: number;
  orderId: string;
  deliveryTime: number;
  status: string;
  user: IUserRequest;
  courier: IUserRequest[];
}
