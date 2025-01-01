import React, { memo } from 'react'
import MenuItem from './MenuItem';
import { menuData } from '../data/menuData';
import SubMenu from './SubMenu';

const NavMenu = ({isMenuMobile}) => {

  return (
    <nav className={isMenuMobile ? 'mt-5 relative' : 'maxLg:hidden'}>
      <ul className={isMenuMobile ? '' :'flex items-center text-[16px] gap-[32px] font-semibold'}>
        {
          menuData.map((item, i) => (
          <MenuItem key={i} item={item} isMenuMobile={isMenuMobile} > 
            {
              item.submenu && <SubMenu item={item} isMenuMobile={isMenuMobile}   />
            }
          </MenuItem>))
        }
      </ul>
    </nav>
  )
}

export default memo(NavMenu)