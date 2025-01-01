import React from 'react'
import { fashioneItems } from '../data/fashionItemsdata'

const NavigationBar = () => {
  return (
    <nav>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pb-10 place-items-center mt-20'>
        {
          fashioneItems.map((item, i) => <div key={i}
          className='aspect-9/16 group cursor-pointer relative maxMd:mb-8 lg:h-[500px]
          maxSm:h-[440px] maxSm:place-self-center'>
            <div className='overflow-hidden h-full rounded-lg flex justify-center'>
              <img src={item.img} alt={item.title} className='w-full h-full object-cover
              group-hover:scale-110 duration-500 ease-linear' />
            </div>
            <div className='absolute bottom-[-5%] left-[50%] translate-x-[-50%] bg-white w-[80%]
            maxSm:text-[18px] sm:text-[25px] lg:text-[30px]  font-semibold grid place-items-center py-2 lg:py-5 shadow-submenu rounded-lg sm:py-3 hoverBgBlack'>{item.title}</div>
          </div>)
        }
      </div>
    </nav>
  )
}

export default NavigationBar