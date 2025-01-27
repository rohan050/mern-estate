import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="flex bg-emerald-500 py-5 px-10 items-center justify-between">
        <h2 className='text-2xl '>Rohan's</h2>
        <div className="flex gap-8 items-center">
         <Link to='/home'>Home</Link>
         <Link to='/product'>Product</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </div>
    
  )
}

export default Header
