import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Home from './pages/Home'
import Contact from './pages/Contact' 
import Header from './components/Header'
const App5 = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App5
