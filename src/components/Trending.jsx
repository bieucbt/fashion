import React from 'react'
import CartProduct from './CartProduct'

const Trending = () => {
  return (
    <section className='pb-5'>
      <h2 className='heading text-center mt-5'>Đang Thịnh Hành</h2>
      <p className='text-grayText text-center'>Thời trang thịnh hành, cuốn hút mọi ánh nhìn</p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-7'>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
      <div className='grid place-items-center mt-5 cursor-pointer hover:underline'>Xem thêm</div>
    </section>
  )
}

export default Trending