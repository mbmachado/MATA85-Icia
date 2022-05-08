import axios from 'axios';
import { Question, TopicsTree, User } from 'types';

import { LoginResonseData } from './types';

const headers = {
  Accept: 'application/json, text/plain, */*',
  'X-CSRF-TOKEN': '',
  Authorization: 'Bearer ',
};

const api = axios.create({
  baseURL: 'https://virtual-assistent-backend.herokuapp.com/',
  headers: headers,
});

export const services = {
  getInitialTopicsTree: async () => {
    return api.get<TopicsTree[]>('/api/v1/topics');
  },
  getTopicsTreeById: async (id: number) => {
    return api.get<TopicsTree[]>(`/api/v1/topics/${id}`);
  },
  getTopicsTreeByNlp: async (text: string) => {
    return api.post<TopicsTree[] | Question[]>(`/api/v1/nlp`, { text });
  },
  login: async (credentials: { email: string; password: string }) => {
    return api.post('/api/v2/auth/login', credentials);
  },
  requestPassword: async (email: string) => {
    return api.get(`/api/v2/auth/recoverAccess/${email}`);
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
  getQuestions: async (authToken: string) => {
    let token = authToken;
    if (!token) {
      token = getAuthOnLocalStorage()?.token || '';
    }
    return api.get('/api/v3/questions', {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'X-CSRF-TOKEN': '',
        Authorization: `Bearer ${token}`,
      },
    });
  },
  editQuestion: async (
    id: number,
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
      id,
      topic_id: topicId,
      description,
      answer,
    };
    return api.patch(`/api/v3/questions/${id}`, data, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'X-CSRF-TOKEN': '',
        Authorization: `Bearer ${token}`,
      },
    });
  },
  deleteQuestion: async (id: number, authToken: string) => {
    let token = authToken;
    if (!token) {
      token = getAuthOnLocalStorage()?.token || '';
    }

    return api.delete(`/api/v3/questions/${id}`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'X-CSRF-TOKEN': '',
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getUsers: async () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + getAuthOnLocalStorage()?.token,
      },
    };
    return api.get<User[]>('/api/v3/users', config);
  },
  createUser: async (email: string, name: string, password: string) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + getAuthOnLocalStorage()?.token,
      },
    };
    return api.post('/api/v3/users', { email, name, password }, config);
  },
  editUser: async (id: number, email?: string, name?: string, password?: string) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + getAuthOnLocalStorage()?.token,
      },
    };
    return api.patch(`/api/v3/users/${id}`, { email, name, password }, config);
  },
  deleteUser: async (id: number) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + getAuthOnLocalStorage()?.token,
      },
    };
    return api.delete(`/api/v3/users/${id}`, config);
  },

  createTopic: async (authToken: string, name: string, parentId?: number) => {
    let token = authToken;
    if (!token) {
      token = getAuthOnLocalStorage()?.token || '';
    }
    const data = {
      name,
    };
    const id = parentId ? `/${parentId}` : '';
    return api.post(`/api/v3/topics${id}`, data, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: `Bearer ${token}`,
      },
    });
  },

  deleteTopic: async (id: number, authToken: string) => {
    let token = authToken;
    if (!token) {
      token = getAuthOnLocalStorage()?.token || '';
    }

    return api.delete(`/api/v3/topics/${id}`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'X-CSRF-TOKEN': '',
        Authorization: `Bearer ${token}`,
      },
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
