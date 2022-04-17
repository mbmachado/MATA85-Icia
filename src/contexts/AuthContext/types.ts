import React from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface ContextProps {
  user?: User;
  authToken: string;
  storeUser: (user: User) => void;
  storeToken: (token: string) => void;
  clean: () => void;
}

export interface AuthProviderProps {
  children?: React.ReactNode;
}
