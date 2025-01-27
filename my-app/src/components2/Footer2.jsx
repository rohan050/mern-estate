import React, { useCallback, useContext } from 'react'
import { DataContext } from '../userContext/UserContext'

const Footer2 = () => {
    const v=useContext(DataContext)
  return (
    <div>
      <h1>Footer {v.city}</h1>
    </div>
  )
}

export default Footer2
