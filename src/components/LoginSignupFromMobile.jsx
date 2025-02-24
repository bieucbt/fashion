import React, { useState, useRef, memo, useEffect } from 'react'
import { useImmer } from 'use-immer'
import Login from './Login'
import SignUp from './SignUp'

const LoginSignupFromMobile = () => {
  const [isLogin, setIsLogin] = useState(true)
  const headingRef = useRef([])
  const [tabSlider, setTabSlider] = useImmer({ width: 0, left: 0 })
  const headingCssLoginSigup = 'cursor-pointer font-bold mx-[25px] py-[11px] '

  useEffect(() => {
    handleMoveTab()
  }, [])

  function handleMoveTab(index = 0) {
    setTabSlider((draft) => {
      draft.width = headingRef.current[index].offsetWidth
      draft.left = headingRef.current[index].offsetLeft
    })
  }

  return (
    <div className='flex-1'>
      <div className='flex items-center justify-center gap-[15px] relative'>
        <div className='absolute bottom-0 left-0 w-10 h-1 bg-blackText duration-500 ease-linear'
          style={{ left: tabSlider.left, width: tabSlider.width }}></div>
        <h3 ref={el => headingRef.current[0] = el}
          onClick={() => {
            handleMoveTab()
            setIsLogin(true)
          }}
          className={`${headingCssLoginSigup} ${isLogin ? ' text-[#c92127]' : ''}  `}
        >Đăng nhập</h3>
        <h3 ref={el => headingRef.current[1] = el}
          onClick={() => {
            handleMoveTab(1)
            setIsLogin(false)
          }}
          className={`${headingCssLoginSigup} ${!isLogin ? ' text-[#c92127]' : ''}  `}
        >Đăng ký</h3>
      </div>
      <hr className='w-full h-[1px] bg-grayText' />
      <div className='py-5'>
        {
          isLogin ? <Login /> : <SignUp />
        }
      </div>
    </div>
  )
}

export default memo(LoginSignupFromMobile)