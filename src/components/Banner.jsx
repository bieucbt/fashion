import React from 'react'
import Slider from 'react-slick'
import { bannerData } from '../data/bannerData'

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false, 
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className='mt-[150px]'>
      <div className=''>
        <Slider {...settings}>
          {
            bannerData.map((item, i) => <div key={i} >
            <div className='flex items-center sm:h-[60vh] md:h-[75vh]'>
              <div className='flex-1'>
                <p className='text-[14px] md:text-[16px] lg:text-[18px] text-blackText font-normal'>{item.subtext}</p>
                <h3 className='text-[24px] md:text-[42px] lg:text-[80px] font-semibold text-blackText mt-5 '>{item.heading}</h3>
                <div className='py-3 px-2 text-[14px] md:text-[16px] lg:text-[18px] md:text md:px-6 md:py-3 lg:px-10 lg:py-4 lg:font-semibold bg-blackText text-white w-max rounded-lg cursor-pointer mt-8'>Mua sắm ngay</div>
              </div>
              <div className='flex-1 h-full flex items-center'>
                <img src={item.img} alt="quần áo mùa đông" className='w-full object-cover' />
              </div>
            </div>
          </div>)
          }
        </Slider>
      </div>
    </section>
  )
}

export default Banner