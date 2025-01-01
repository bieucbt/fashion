import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './Slider';

const ExploreCollections = () => {
  return (
    <section className='flex flex-col items-center gap-5'>
      <h2 className='heading'>Khám phá Bộ sưu tập</h2>
      <SimpleSlider />
    </section>
  )
}

export default ExploreCollections