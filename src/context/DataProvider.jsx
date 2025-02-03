import React, { createContext, useState } from 'react'


export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [headerHeight, setHeaderHeight] = useState(0)
    return (
        <DataContext.Provider value={{ headerHeight, setHeaderHeight }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider