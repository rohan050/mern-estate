import React, { useContext } from 'react'
import { DataContext } from '../userContext/UserContext'

const Header2 = () => {
    const username= useContext(DataContext)
  return (
    <div>
      <h1>Header {username.city}</h1>
    </div>
  )
}

export default Header2
