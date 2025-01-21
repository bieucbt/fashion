import axios from 'axios'
import { showToastError } from '../toast'
import { BASE_URL } from '../../config/constants'



export const loginUserApi = async (formData) => {
  try{
    const res = await axios.post(BASE_URL+'/login',formData)
    return res
  }catch(err){
    showToastError(err)
  }
}