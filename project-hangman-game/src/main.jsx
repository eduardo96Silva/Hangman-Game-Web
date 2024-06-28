import React from 'react'
import ReactDOM from 'react-dom/client'

//pages
import App from './routes/App.jsx'
import GameView from './routes/Gameview.jsx'
import Scoreboard from './routes/Scoreboard.jsx'
import Login from './routes/Login.jsx'
import Cadastro from './routes/Cadastro.jsx'
import NoPage from './routes/NoPage.jsx'

//Configs Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const routerConfig = createBrowserRouter([
  { 
    path: "/", 
    element: <App/>, 
    errorElement: <NoPage/>,
    children: [
      { path: "/", element: <GameView /> },
      { path: "/Login", element: <Login /> },
      { path: "/Cadastro", element: <Cadastro /> },
      { path: "/Scoreboard", element: <Scoreboard /> }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}/>
  </React.StrictMode>,
)
