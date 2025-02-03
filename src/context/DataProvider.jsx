import React, { createContext, useState } from 'react'


export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [headerHeight, setHeaderHeight] = useState(0)
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const data = {
        headerHeight, setHeaderHeight,
        token, setToken
    }
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider