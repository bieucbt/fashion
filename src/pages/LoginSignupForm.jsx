import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import LoginSignupFromMobile from '../components/LoginSignupFromMobile'
import { useState } from 'react'
import { useEffect } from 'react'

const LoginSignupForm = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth || 0)

  useEffect(() => {
    
    const windowResize = window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', windowResize)
    }
  }, [])

  return (
    <div className='mt-[80px] px-2 lg:px-[60px] pt-[35px] pb-[15px] flex '>
      {
        windowWidth < 767 ? <LoginSignupFromMobile /> : <div className='flex gap-4'>
          <div className='flex-1' >
            <h3 className='font-bold text-[20px] text-blackText mb-4'>Đăng nhập</h3>
            <Login />
          </div>
          <div className='flex-1'>
            <h3 className='font-bold text-[20px] text-blackText mb-4'>Đăng Ký</h3>
            <SignUp />
          </div>
        </div>
      }
      
      
    </div>
  )
}


export default LoginSignupForm