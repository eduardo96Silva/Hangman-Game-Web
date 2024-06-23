import React from 'react'
import ReactDOM from 'react-dom/client'

//pages
import App from './pages/App.jsx'
import GameView from './pages/Gameview.jsx'
import Scoreboard from './pages/Scoreboard.jsx'
import Conta from './pages/Conta.jsx'
import NoPage from './pages/NoPage.jsx'

//Configs Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const routerConfig = createBrowserRouter([
  { 
    path: "/", 
    element: <App/>, 
    errorElement: <NoPage/>,
    children: [
      { path: "/", element: <GameView /> },
      { path: "/Conta", element: <Conta /> },
      { path: "/Scoreboard", element: <Scoreboard /> }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}/>
  </React.StrictMode>,
)
