import { useContext } from "react"
import { TokenContext } from "../context/TokenProvider"


const useTokenContext = () => {
  return useContext(TokenContext)
}

export default useTokenContext

