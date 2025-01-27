import React, { useContext } from 'react'
import Header2 from './components2/Header2'
import Section2 from './components2/Section2'
import Footer2 from './components2/Footer2'
import { DataContext } from './userContext/UserContext'


const App6 = () => {
   const data = useContext(DataContext)
  return (
    <div>
      <h1>Hello {data.username}</h1>
      <Header2/>
      <Section2/>
      <Footer2/>
    </div>
  )
}

export default App6
