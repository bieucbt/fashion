import React from 'react'
import { useImmer } from 'use-immer'

const Tabs = ({options}) => {
  const [positionOpiton, setPositionOpiton] = useImmer({
    offsetWidth: 0,
    offsetLeft: 0
  })
  return (
    <div className='flex justify-center'>
      <div className='w-max my-8 maxMd:w-full maxMd:overflow-x-scroll relative bg-gray-100  rounded-3xl
      '>
        <div className='absolute top-0 left-0 h-full bg-white rounded-2xl duration-500 ease-linear z-0
        shadow-submenu scale-y-[0.9] scale-x-[0.95] ' 
        style={{width: `${positionOpiton.offsetWidth}px`,
        left: `${positionOpiton.offsetLeft}px`}}></div>
        <div className='flex items-center gap-2  text-grayText '>
          {
            options.map((item, i) => <div 
            onClick={(e) => setPositionOpiton((draft) => {
              draft.offsetLeft = e.target.offsetLeft
              draft.offsetWidth = e.target.offsetWidth
            })} 
            key={i} 
            className='px-5 py-2 cursor-pointer font-semibold hover:text-blackText relative z-10 
            maxMd:shrink-0 maxMd:text-[12px] maxMd:px-4'>{item}</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Tabs