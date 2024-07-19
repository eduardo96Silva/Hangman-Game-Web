import { createBrowserRouter } from 'react-router-dom';

// Pages
import App from '../pages/App.jsx';
import GameView from '../pages/Gameview.jsx';
import Scoreboard from '../pages/Scoreboard.jsx';
import Login from '../pages/Login.jsx';
import Cadastro from '../pages/Cadastro.jsx';
import NoPage from '../pages/NoPage.jsx';
import Perfil from '../pages/Perfil.jsx';
import Sobre from '../pages/Sobre.jsx';

import { useAuth } from '../contexts/authContext.jsx';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, pathAlternate, ...rest }) => {
    const { currentUser } = useAuth();

    return currentUser ? <Element {...rest} /> : <Navigate to={pathAlternate} />;
};


export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NoPage />,
        children: [
            { path: "/", element: <GameView /> },
            { path: "/Login", element: <Login /> },
            { path: "/Cadastro", element: <Cadastro /> },
            { path: "/Perfil", element: <PrivateRoute element={Perfil} pathAlternate="/Login" />},
            { path: "/Scoreboard", element: <Scoreboard /> },
            { path: "/Sobre", element: <Sobre /> }
        ]
    }
]);