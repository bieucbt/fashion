import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ item, children, className, isMenuMobile }) => {
  const navigate = useNavigate()
  return (
    <li className={isMenuMobile ? 'flex items-center justify-between my-2 py-2 cursor-pointer' : `menuItem group cursor-pointer relative text-nowrap inline-block w-max ${className || ''}`}
      onClick={() => { item.href && navigate(item.href) }}>
      <span className={`group-hover:text-blackText `}>{item.title || item}</span>
      {!isMenuMobile && <span className="border-bottom h-[2px] inline-block absolute bottom-[-2px] left-0 duration-200 ease-linear bg-blackText w-0 "></span>}
      {children}
    </li>
  )
}

export default memo(MenuItem)