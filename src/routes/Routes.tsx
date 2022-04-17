import { useAuthContext } from 'contexts/AuthContext/hook';
import Login from 'pages/Auth/Login';
import RequestPassword from 'pages/Auth/RequestPassword';
import ResetPassword from 'pages/Auth/ResetPassword';
import Chat from 'pages/Chat';
import CreateQuestion from 'pages/CreateQuestion';
import Dashboard from 'pages/Dashboard';
import Questions from 'pages/Questions';
import React, { useMemo, useRef } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { getAuthOnLocalStorage } from 'services';

import Users from '../pages/Users';

export function AppRoutes() {
  const { user, storeToken, storeUser } = useAuthContext();

  const isUserLogged = useMemo(() => {
    let isLogged = !!user;
    if (!user) {
      const auth = getAuthOnLocalStorage();
      if (auth) {
        isLogged = true;
        storeUser(auth!.user);
        storeToken(auth?.token || '');
      }
    }
    return isLogged;
  }, [user]);

  return (
    <Router>
      <Routes>
        {isUserLogged ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/questions/create" element={<CreateQuestion />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="questions" element={<Questions />} />
          </>
        ) : (
          <>
            <Route path="login" element={<Login />} />
            <Route path="request-password" element={<RequestPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </>
        )}
        <Route path="/" element={<Chat />} />
        <Route
          path="*"
          element={<Navigate to={isUserLogged ? '/dashboard' : '/'} replace />}
        />
      </Routes>
    </Router>
  );
}
