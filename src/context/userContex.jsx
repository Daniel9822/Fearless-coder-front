'use client'

import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export function ContextUser() {
  return useContext(UserContext)
}

export const useUserContext = () => {
  const user = useContext(UserContext)
  if (!user) throw new Error('algo salio mas')
  return user
}

export function ContextProvider({ children }) {
  const [userActual, setUserActual] = useState({})

  const addUserInfo = (user) => {
    setUserActual(user)
  }

  const deleteUser = () => {
    setUserActual({})
  }

  return (
    <UserContext.Provider value={{ userActual, addUserInfo, deleteUser }}>
      {children}
    </UserContext.Provider>
  )
}
