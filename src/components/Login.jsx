import React from 'react'
import InputText from './InputText'

const Login = () => {
  return (
    <div>
      <p className='mb-6 text-[14px] font-normal'>Nhập số điện thoại của Quý Khách để đăng nhập tài khoản BieuCBT.</p>
        <InputText title='SĐT' require placeholder='Vui lòng nhập số điện thoại' />
        <InputText title='Mật khẩu' require placeholder='Nhập mật khẩu' />
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-4'>
            <input type="checkbox" className='accent-blackText cursor-pointer' />
            <p className='text-[12px] font-normal'>Giữ trạng thái đăng nhập</p>
          </div>
          <p className='cursor-pointer hover:underline text-[12px] font-normal'>Quên mật khẩu</p>
        </div>
        <div className='btnForm'>Đăng nhập</div>
    </div>
  )
}

export default Login