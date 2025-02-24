import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Main from '../components/Main'
import ShippingAndReturnInfo from '../components/ShippingAndReturnInfo'
import Discount from '../components/Discount'
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const [scrollTop, setScrollTop] = useState(false)
  useEffect(() => {
    const windowScroll = window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 100)
        setScrollTop(true)
      else setScrollTop(false)

    })
    return () => {
      window.removeEventListener('scroll', windowScroll)
    }
  }, [])

  return (
    <div>
      <div className='mt-[75px] relative'></div>
      {scrollTop && <div className='fixed top-[75%] right-[5%] z-[49] p-3 rounded-full border-[1px] border-gray-400 cursor-pointer bg-white'
        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}><FaArrowUp size={18} className='animate-bounce' /></div>}
      <Banner />
      <Main />
      <ShippingAndReturnInfo />
      <Discount />
    </div>
  )
}


export default Home