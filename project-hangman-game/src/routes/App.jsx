import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../css/index.css'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div id='allContentPage'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
