import axios from 'axios';

import { LoginResonseData } from './types';

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
  login: async (email: string, password: string) => {
    return api.post('/api/v2/auth/login', {
      email,
      password,
    });
  },
};

export const setAuthOnLocalStorage = (state: LoginResonseData) => {
  window.sessionStorage.setItem('AUTH', JSON.stringify(state));
};

export const getAuthOnLocalStorage = () => {
  const data = window.sessionStorage.getItem('AUTH');
  if (data) return JSON.parse(data) as LoginResonseData;
  return null;
};