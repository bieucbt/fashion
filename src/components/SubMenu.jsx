import React from 'react'
import MenuItem from './MenuItem'

const SubMenu = ({item, isMenuMobile}) => {
  const cssSubMenu = isMenuMobile ? {} : {gridTemplateColumns: `repeat(${item.col}, 1fr)`, gap: item.col > 1 ? '20px' : '5px'}
  return (
    <ul className={isMenuMobile ? `absolute inset-0 bg-blue-500 ` : `submenu hidden menu-group-hover:block absolute top-[120%] left-[-20%] bg-white p-5 shadow-submenu text-grayText rounded-lg`}
    style={cssSubMenu}>
      {
        item.submenu.map((item, i) => {
          if(typeof item == 'string') return <MenuItem namespace={'submenu-group'} key={i} item={item} className='text-[#696C70] font-normal' />
          else return <li key={i}>
            <span className='text-blackText'>{item.heading}</span>
            <ul className='flex flex-col gap-2 mt-2'>
              {
                item.list.map((item, i) => <MenuItem namespace={'submenu-group'} key={i} item={item} 
                className='text-[#696C70] font-normal' />)
              }
            </ul>
          </li>
        })
      }
    </ul>
  )
}

export default SubMenu