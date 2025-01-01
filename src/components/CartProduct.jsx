import React from 'react'
import { memo } from 'react'
import {tShirt} from '../assets'
import { CiHeart } from "react-icons/ci";
import { RiResetLeftFill } from "react-icons/ri";

const CartProduct = () => {
  return (
    <div className='group flex flex-col items-center rounded-3xl cursor-pointer'>
      <div className='relative overflow-hidden'>
        <div className='absolute top-[2%] left-[5%] px-3 bg-[#DB4444] rounded-3xl text-white font-normal '>Sale</div>
        <div className='absolute top-[2%] right-[-15%] duration-300 ease-linear group-hover:right-[5%]'>
          <div className='w-[25px] aspect-square rounded-full bg-white grid place-items-center
          hover:bg-blackText hover:text-white duration-300 ease-linear cursor-pointer'><CiHeart /></div>
          <div className='w-[25px] aspect-square rounded-full bg-white grid place-items-center
          hover:bg-blackText hover:text-white duration-300 ease-linear cursor-pointer mt-1'><RiResetLeftFill /></div>
        </div>
        <img src={tShirt} alt="" className='aspect-9/16 h-[350px] sm:h-[450px]  md:h-full  object-cover' />
        <div className='absolute w-full bottom-[-25%] right-[50%] translate-x-[50%] group-hover:bottom-5
        ease-linear duration-300 sm:bottom-[-15%]'>
          <div className='w-full flex flex-col items-center gap-3 text-center px-3 sm:flex-row'>
            <div className='flex-1 text-[14px] font-normal text-blackText bg-white rounded-3xl
            cursor-pointer duration-300 ease-linear hover:bg-blackText hover:text-white 
            overflow-ellipsis overflow-hidden text-nowrap px-2 py-1'>Xem nhanh</div>
            <div className='flex-1 text-[14px] font-normal text-blackText bg-white rounded-3xl
            cursor-pointer duration-300 ease-linear hover:bg-blackText hover:text-white 
            overflow-ellipsis overflow-hidden text-nowrap px-2 py-1'>Thêm vào rỏ</div>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-blackText font-medium'>Áo mùa đông thanh lịch</h3>
        <div className='flex items-center gap-1 flex-col text-blackText font-medium'>
          <p className=''>299.000 VNĐ</p>
          <div className='flex items-center gap-4'>
            <p className='line-through text-[14px] text-grayText'>300.000 VNĐ</p>
            <p className='px-3 bg-[#D2EF9E] rounded-3xl text-blackText font-normal'>-1%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CartProduct)