import React, { createContext } from 'react'

export const DataContext=createContext()

const UserContext = ({children}) => {
     const userData={
      username:"Rohan",
      age:68,
      city:"Indore"
     }
  return (
    <div>
      <DataContext.Provider value={userData}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default UserContext
