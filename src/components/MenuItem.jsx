import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const MenuItem = ({ item,children, className, isMenuMobile}) => {
  return (
    <li className={isMenuMobile ? 'flex items-center justify-between my-2 py-2 cursor-pointer' : `menuItem group cursor-pointer relative text-nowrap inline-block w-max ${className || ''}`}>
      <span className={`group-hover:text-blackText `}>{item.title || item}</span>
      {!isMenuMobile && <span className="border-bottom h-[2px] inline-block absolute bottom-[-2px] left-0 duration-200 ease-linear bg-blackText w-0 "></span>}
      {children}
    </li>
  )
}

export default MenuItem