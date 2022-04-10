import { useAuthContext } from 'contexts/AuthContext/hook';
import Login from 'pages/Auth/Login';
import Dashboard from 'pages/Dashboard';
import Questions from 'pages/Questions';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { getAuthOnLocalStorage } from 'services';

import Users from '../pages/Users';

export function AppRoutes() {
  const { user, storeToken, storeUser } = useAuthContext();
  const hasUser = useRef(!!user);

  if (!user) {
    const auth = getAuthOnLocalStorage();
    if (auth) {
      hasUser.current = true;
      storeUser(auth!.user);
      storeToken(auth?.token || '');
    }
  }
  console.log(hasUser);
  return (
    <Router>
      <Routes>
        {hasUser.current ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/questions" element={<Questions />} />
          </>
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {/* TODO trocar a rota login para o chatbot */}
        <Route
          path="*"
          element={<Navigate to={user ? '/dashboard' : '/login'} replace />}
        />
      </Routes>
    </Router>
  );
}
