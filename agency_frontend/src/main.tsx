// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import for React 18+
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';  // Assuming you have global styles
import { AuthContextProvider } from './store/auth/AuthContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
