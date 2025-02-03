import { useContext } from "react"
import { ToastContext } from "../context/ToastPovider"



const useToastContext = () => {
    return useContext(ToastContext)
}

export default useToastContext