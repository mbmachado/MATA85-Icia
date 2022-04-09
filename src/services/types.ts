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
