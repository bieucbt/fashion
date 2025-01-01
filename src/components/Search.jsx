import React from 'react'
import { IoIosSearch } from "react-icons/io";
const Search = ({className}) => {
  return (
    <div className={`relative h-10 mt-5 ${className}`}>
      <div className='absolute top-0 left-0 grid place-items-center h-full
      w-[35px] cursor-pointer'><IoIosSearch size={17} /></div>
      <input type="search" placeholder='Bạn đang muốn tìm kiếm gì' 
      className='w-full h-full outline-none pl-[35px] bg-transparent border border-gray-200
      focus:border-blackText rounded-lg duration-200 ease-linear pr-2' />
    </div>
  )
}

export default Search