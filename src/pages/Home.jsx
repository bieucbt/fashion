import React from 'react'
import Banner from '../components/Banner'
import Main from '../components/Main'
import ShippingAndReturnInfo from '../components/ShippingAndReturnInfo'
import Discount from '../components/Discount'

const Home = () => {
  return (
    <div>
      <div className='mt-[75px]'></div>
      <Banner />
      <Main />
      <ShippingAndReturnInfo />
      <Discount />
    </div>
  )
}

export default Home