import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { explporeCollectionData } from '../data/exploreCollectionsData';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';

export default function SimpleSlider() {
  const [slideCount, setSlideCount] = useState(4)
  const countScroll = Math.floor(slideCount / 2)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideCount || 4,
    slidesToScroll: countScroll < 1 ? 1 : countScroll,
    nextArrow: <NextBtn />, 
    prevArrow: <PrevBtn />, 
    centerMode: false, // Bật chế độ center mode
    centerPadding: '10%', // Khoảng cách hai bên của slide
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1
        },
      },
    ],
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 1024) setSlideCount(4)
      else if(window.innerWidth > 786) setSlideCount(3)
      else if(window.innerWidth > 640) setSlideCount(2)
      else setSlideCount(1)
    })
  }, [])

  return (
    <div className='w-full relative'>
      <Slider {...settings} className=''>
        {
          explporeCollectionData.map((item, i) => <div key={i}
          className='aspect-9/16 h-[450px] rounded-3xl overflow-hidden relative cursor-pointer '
          style={{ margin: '0 10px' }}>
            <img src={item.img} alt="sưu tập" className='w-full h-full object-cover duration-500 ease-linear hover:scale-[1.15]' />
            <div className='py-3 absolute bottom-[5%] left-[50%] translate-x-[-50%] bg-white rounded-2xl
            w-[60%] grid place-items-center hover:bg-blackText cursor-pointer hoverBgBlack'>
              <h3 className='text-[24px] font-semibold  mx-auto   '>{item.title}</h3>
            </div>
          </div>)
        }
      </Slider>
    </div>
  );
}