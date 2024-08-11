// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
};

export default App;
