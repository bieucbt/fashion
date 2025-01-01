import React from 'react'
import {ShippingAndReturnInfoData} from '../data/shippingAndReturnInfoData'

const ShippingAndReturnInfo = () => {
  return (
    <div className='grid maxXs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
    place-items-center mt-20'>
      {
        ShippingAndReturnInfoData.map((item, i) => <div key={i}
        className=' text-center md:place-self-start maxXs:place-self-center'>
          <div className='flex justify-center'><item.icon size={45} /></div>
          <h4 className='text-blackText font-semibold'>{item.title}</h4>
          <p className='text-grayText text-[14px]'>{item.subtext}</p>
        </div>)
      }
      
      
    </div>
  )
}

export default ShippingAndReturnInfo