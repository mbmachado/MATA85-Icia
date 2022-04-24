import axios from 'axios';
import { TopicsTree } from 'types';

import { LoginResonseData } from './types';

const headers = {
  Accept: 'application/json, text/plain, */*',
  'X-CSRF-TOKEN': '',
  Authorization: 'Bearer ',
};

const api = axios.create({
  baseURL: 'http://virtual-assistent-backend.herokuapp.com/',
  // baseURL: 'http://127.0.0.1:8000',
  headers: headers,
});

export const services = {
  login: async (email: string, password: string) => {
    return api.post('/api/v2/auth/login', {
      email,
      password,
    });
  },
  getTopicsTree: async (authToken?: string) => {
    let token = authToken;
    if (!token) {
      token = getAuthOnLocalStorage()?.token || '';
    }
    return api.get<TopicsTree[]>('/api/v3/topics', {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'X-CSRF-TOKEN': '',
        Authorization: `Bearer ${token}`,
      },
    });
  },
  createQuestion: async (
    authToken: string,
    topicId: number,
    description: string,
    answer: string,
  ) => {
    let token = authToken;
    if (!token) {
      token = getAuthOnLocalStorage()?.token || '';
    }
    const data = {
      topic_id: topicId,
      description,
      answer,
    };
    return api.post('/api/v3/questions', data, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'X-CSRF-TOKEN': '',
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getInitialTopicsTree: async () => {
    return api.get<TopicsTree[]>('/api/v1/topics');
  },
  getTopicsTreeById: async (id: number) => {
    return api.get<TopicsTree[]>(`/api/v1/topics/${id}`);
  },
  getTopicsTreeByNlp: async (text: string) => {
    return api.get<TopicsTree[]>(`/api/v3/nlp`, {
      params: { text },
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

export const removeAuthOnLocalStorage = () => {
  window.sessionStorage.removeItem('AUTH');
};
