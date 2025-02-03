import { useContext } from "react"
import { DataContext } from "../context/dataProvider"


const useDataContext = () => {
    return useContext(DataContext)
}

export default useDataContext