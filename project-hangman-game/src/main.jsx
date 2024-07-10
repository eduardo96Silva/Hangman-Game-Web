// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// Pages
import App from './routes/App.jsx';
import GameView from './routes/Gameview.jsx';
import Scoreboard from './routes/Scoreboard.jsx';
import Login from './routes/Login.jsx';
import Cadastro from './routes/Cadastro.jsx';
import NoPage from './routes/NoPage.jsx';
import Perfil from './routes/Perfil.jsx';

// Configs Router
import { createBrowserRouter, Route, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/authContext.jsx';

const PrivateRoute = ({ element: Element, pathAlternate, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? <Element {...rest} /> : <Navigate to={pathAlternate} />;
};

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoPage />,
    children: [
      { path: "/", element: <GameView /> },
      { path: "/Login", element: <Login /> },
      { path: "/Cadastro", element: <Cadastro /> },
      {
        path: "/Perfil",
        element: <PrivateRoute element={Perfil} pathAlternate="/Login" />
      },
      { path: "/Scoreboard", element: <Scoreboard /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routerConfig} />
    </AuthProvider>
  </React.StrictMode>
);
