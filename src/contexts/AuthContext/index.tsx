import React, { createContext, useState } from 'react';

import { AuthProviderProps, ContextProps, User } from './types';

export const AuthContext = createContext({} as ContextProps);

const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>();
  const [authToken, setAuthToken] = useState('');

  const storeUser = (user: User) => {
    setUser(user);
  };

  const storeToken = (token: string) => {
    setAuthToken(token);
  };

  return (
    <AuthContext.Provider value={{ user, authToken, storeUser, storeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
