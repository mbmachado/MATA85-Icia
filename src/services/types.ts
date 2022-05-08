import { User } from 'contexts/AuthContext/types';

export interface LoginResonseData {
  user: User;
  token: string;
}

export interface LoginResponse {
  status: 'Success' | 'Error';
  message: string;
  data: LoginResonseData;
}

export interface UserEdit {
  name?: string;
  email?: string;
  password?: string;
}
