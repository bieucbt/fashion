import { useContext } from "react"
import { DataContext } from "../context/DataProviderataProvider"


const useDataContext = () => {
    return useContext(DataContext)
}

export default useDataContext