import React from 'react'
import { IoSend } from "react-icons/io5";

const Discount = () => {
  return (
    <section className='text-center mt-20 w-[80%] mx-auto'>
      <h2 className='text-[18px] md:text-[30px] lg:text-[45px] font-semibold text-blackText'>Nhận giảm giá 10%</h2>
      <p className='text-[14px] text-grayText mt-4'>Hãy là người đầu tiên biết về những sản phẩm mới và ưu đãi độc quyền của chúng tôi.</p>
      <div className='flex items-center gap-2 mt-14'>
        <input type="text" placeholder='Địa chỉ email của bạn' className='border-b-4 border-blackText outline-none flex-[5] text-[28px] text-grayText font-medium self-end' />
        <div className='flex-1 border-b-4 border-blackText cursor-pointer flex justify-center'><IoSend size={35} /></div>
      </div>
    </section>
  )
}

export default Discount