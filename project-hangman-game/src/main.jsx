// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';

import { routerConfig } from './router/routerConfig.jsx';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routerConfig} />
    </AuthProvider>
  </React.StrictMode>
);
