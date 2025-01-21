import React from 'react'
import InputText from './InputText'
import axios from 'axios'
import { useImmer } from 'use-immer'
import { showToastError, showToastSuccess } from '../utils/toast'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import useTokenContext from '../hook/useTokenContext'
import { Admin_URL, BASE_URL } from '../config/constants'

const Login = () => {
  const [formData, setFormData] = useImmer({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const {token, setToken} = useTokenContext()
  

  const handelLogin = () => {
    axios.post(BASE_URL+'/login',formData)
    .then(res => {
      if(res.data.isAdmin)
      {
        window.location.href = Admin_URL;
      }
      else{
        showToastSuccess('Đăng nhập thành công')
        localStorage.setItem('token', res.data.token)
        setToken(localStorage.getItem('token'))
        navigate('/')
      } 
    })
    .catch(err => {
      showToastError('Tài khoản hoặc mật khẩu không chính xác')
    })
  }
  return (
    <div>
      <p className='mb-6 text-[14px] font-normal'>Nhập số điện thoại của Quý Khách để đăng nhập tài khoản BieuCBT.</p>
      <div className='bg-green-200'>
        <p>email: admin@admin.com</p>
        <p>password: 123</p>
        <p>để truy cập trang admin</p>
      </div>
        <InputText value={formData.email} typeValue='email' title='email' require placeholder='Vui lòng nhập số điện thoại' {...{setFormData}}  />
        <InputText type="password" title='Mật khẩu' typeValue='password' require placeholder='Nhập mật khẩu'  {...{setFormData}} value={formData.password} />
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-4'>
            <input type="checkbox" className='accent-blackText cursor-pointer' />
            <p className='text-[12px] font-normal'>Giữ trạng thái đăng nhập</p>
          </div>
          <p className='cursor-pointer hover:underline text-[12px] font-normal'>Quên mật khẩu</p>
        </div>
        <div className='btnForm' onClick={handelLogin} >Đăng nhập</div>
        <div className='fixed top-0 right-0'>
          <ToastContainer />
        </div>
    </div>
  )
}

export default Login