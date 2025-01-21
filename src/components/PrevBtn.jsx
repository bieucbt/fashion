import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const PrevBtn = ({onClick}) => {
  return (
    <div className='h-[60px] w-[60px] rounded-full absolute left-0 top-[50%] 
        text-[30px] bg-white grid place-items-center cursor-pointer duration-300
        ease-linear hover:bg-blackText hover:text-white translate-y-[-50%] z-20
        ml-[10px]'
        onClick={onClick} tabIndex={-1}><IoIosArrowBack /></div>
  )
}

export default PrevBtn