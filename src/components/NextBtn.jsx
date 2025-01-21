import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const NextBtn = ({onClick}) => {
  return (
    <div className='h-[60px] w-[60px] rounded-full absolute right-0 top-[50%] 
    text-[30px] bg-white grid place-items-center cursor-pointer duration-300
    ease-linear hover:bg-blackText hover:text-white translate-y-[-50%]'
    onClick={onClick} tabIndex={-1}><IoIosArrowForward /></div>
  )
}

export default NextBtn