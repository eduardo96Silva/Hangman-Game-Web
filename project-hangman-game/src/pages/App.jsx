import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../css/index.css'
import { Outlet } from 'react-router-dom'
import Adsense from '../components/Adsense.jsx'

function App() {

  return (
    <>
      <div id='allContentPage'>
        <Header />
        <Outlet />
        <Adsense />
      </div>
      <Footer />
    </>
  )
}

export default App
