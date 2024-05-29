import { useState } from 'react'
import '../src/css/App.css'
import Header from './components/Header.jsx'
import Gameview from './components/Gameview.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
      <Header/>
      <Gameview/>
      <Footer/>
    </>
  )
}

export default App
