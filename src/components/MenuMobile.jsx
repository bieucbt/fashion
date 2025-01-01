import React, { memo, useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import Search from './Search';
import { menuData } from './../data/menuData';
import MenuItem from './MenuItem';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MenuMobile = ({activeMenuMobile, setActiveMenuMobile}) => {

  const [indexMenu, setIndexMenu] = useState(0)

  useEffect(() => {
      const windowEventResize = window.addEventListener('resize', () => {
        if(window.innerWidth > 1023) setIndexMenu(0)
      })

      activeMenuMobile ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
      return () => {
        window.removeEventListener('resize', windowEventResize)
      }
    },[]) 


  return (
    <div className={`fixed top-0 left-0 bottom-0 bg-white z-50 transition-all duration-700 ease-linear py-1 ${activeMenuMobile ? 'w-screen pl-4 pr-[32px]' : 'w-0'} overflow-hidden `}>
      <div className='flex items-center'>
        <div onClick={() => setActiveMenuMobile(false)}
          className='cursor-pointer bg-[#F7F7F7] rounded-full p-1'><RxCross1 size={12} /></div>
        <div className='brand text-[26px] flex-1 text-center cursor-default'>BieuCBT</div>
      </div>
      <div><Search /></div>
      <nav className={'mt-5 relative h-full mr-[-32px]'}>
        <ul className='flex flex-col gap-3 cursor-pointer'>
          {
            menuData.map((item, i) => <li key={i} 
            onClick={() => {
              if(indexMenu == i+1) setIndexMenu(0)
                else setIndexMenu(i+1)
            }}> <div className='flex items-center justify-between'><span className='text-[18px] font-semibold'>{item.title} </span><IoIosArrowForward /></div>
            {/* submenu */}
              {item.submenu && <div className={`absolute top-0 bg-white h-full duration-500 ease-linear ${indexMenu == i+1 ? 'left-0' : 'left-[110%]'}`}>
                <div className='flex items-center gap-1 cursor-pointer' onClick={() => setIndexMenu(0)}>
                  <IoIosArrowBack /> <span>Back</span>
                </div>
                <ul className='grid'
                style={{gridTemplateColumns: `repeat(${item.col}, 1fr)`, gap: item.col > 1 ? '20px' : '5px'}}>
                  {
                    item.submenu.map((item, i) => {
                      if(item.heading){
                        return <ul key={i}>
                          <li className='font-semibold'>{item.heading}</li>
                          {item.list.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      }else return <li key={i} className='my-1'>{item}</li>
                    } )
                  }
                </ul>
              </div>}
            </li>)
          }
        </ul>
      </nav>
    </div>
  
  )
}

export default  memo(MenuMobile)