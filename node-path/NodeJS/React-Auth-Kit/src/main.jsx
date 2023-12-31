import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';

import router from './router';
// import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider authType="cookie" authName="_auth" cookieDomain={window.location.hostname}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
