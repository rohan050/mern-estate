import React, { useContext } from 'react'
import { DataContext } from '../userContext/UserContext'

const Section2 = () => {
  const data=useContext(DataContext)
  return (
    <div>
      <h1>Section </h1>
    </div>
  )
}

export default Section2
