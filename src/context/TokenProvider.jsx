import React, { createContext, useState } from 'react'

export const TokenContext = createContext(null)

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenProvider