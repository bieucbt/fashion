import React, { memo } from 'react'
import { RxCross1 } from "react-icons/rx";

const BoxLogin = ({activeBoxLogin, setActiveBoxLogin}) => {
  
  return (
    <div className={activeBoxLogin ? 'absolute top-full right-0 bg-white' : 'hidden'}>
      <div className='p-7 rounded-xl shadow-submenu'>
        <div className='flex items-center justify-end pb-3'>
          <RxCross1 className='cursor-pointer' 
          onClick={() => setActiveBoxLogin(false)} />
        </div>
        <div className='w-[260px]'>
          <div className='w-full bg-blackText text-white grid place-items-center rounded-md py-2 px-6 cursor-pointer font-semibold hover:bg-white hover:text-blackText duration-300 ease-linear hover:border-blackText border'>Đăng nhập</div>
          <p className='mt-3 text-grayText pb-4'>Đăng ký thành viên</p>
          <div className='border border-grayText rounded-md text-blackText py-2 px-6 grid place-items-center hover:bg-blackText hover:text-white duration-300 ease-linear cursor-pointer'>Đăng ký</div>
        </div>
        <hr className='mt-4 pb-4' />
        <div>
          <p className='text-[18px] hover:underline duration-300 ease-linear cursor-pointer text-grayText'>Hỗ trợ</p>
        </div>
      </div>
    </div>
  )
}

export default memo(BoxLogin)