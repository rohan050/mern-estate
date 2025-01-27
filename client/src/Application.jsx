import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Home from './page/Home'
import Profile from './page/Profile'
import About from './page/About'
import SignUp from './page/SignUp'
import SignIn from './page/SignIn'


ReactDOM.createRoot(document.getElementById('root')).render(

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
  )

export default Application
