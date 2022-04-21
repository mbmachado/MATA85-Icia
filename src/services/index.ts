import axios from 'axios';
import { resolvePath } from 'react-router-dom';

const header = {
  Accept: 'application/json, text/plain, */*',
  'X-CSRF-TOKEN': '',
  Authorization: 'Bearer ',
};

const api = axios.create({
  baseURL: 'https://virtual-assistent-backend.herokuapp.com',
  headers: header,
});

export const services = {
  login: async (email: string, password: string): Promise<any> => {
    return api.post('/api/v2/auth/login', {
      email,
      password,
    });
  },
};
