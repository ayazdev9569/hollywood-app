import React from 'react'
import Header from './components/Header'
import Featured from './components/Featured'
import Arrival from './components/Arrival'
import  Casts from './components/Casts'
import Footer from './components/Footer'

import './index.css'

function App() {
  return (
    <>
      <Header />
      <Featured />
      <Arrival />
      <Casts />
      <Footer />
    </>
  )
}

export default App