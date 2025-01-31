import React, { createContext, useState } from 'react'

export const TokenContext = createContext(null)

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  console.log(token)
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenProvider