// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import Register from './pages/register'
import Header from './components/header';
import AllUsers from './pages/allusers';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allUsers" element={<AllUsers />} />
      </Routes>
    </div>
  );
};

export default App;
