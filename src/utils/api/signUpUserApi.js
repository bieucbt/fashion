import axios from 'axios'
import { showToastError } from '../toast'
import { BASE_URL } from '../../config/constants'




export const signUpUserApi = async (formdata) => {
  try{
   const res = await axios.post(BASE_URL+'signup', formdata)
   return res
  }
  catch(error){
    showToastError(error.response.data.mess)
    console.log(error)
    if (error.response) {
      // Lỗi từ phía server (status code 4xx hoặc 5xx)
      console.error('Lỗi từ server:', error.response.data.mess);
    } else if (error.request) {
      // Không nhận được phản hồi từ server
      console.error('Không nhận được phản hồi từ server');
    } else {
      // Lỗi khác
      console.error('Lỗi:', error.message);
    }
  }
}