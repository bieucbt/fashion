import React from 'react'
import { memo } from 'react'
import { CiHeart } from "react-icons/ci";
import { RiResetLeftFill } from "react-icons/ri";
import { CLOUDINARY_URL } from '../config/constants';
import useDataContext from '../hook/useDataContext';
import { useNavigate } from 'react-router-dom';

const CartProduct = ({ product }) => {

  const img_url = CLOUDINARY_URL + product.img
  const { token, addToCart } = useDataContext()
  const navigate = useNavigate()
  return (
    <div className='group flex flex-col items-center rounded-3xl cursor-pointer'>
      <div className='relative overflow-hidden'>
        {
          product.count <= 0 && <div className='absolute top-0 left-0 right-0
              bottom-0 z-[49]'>
            <div className='w-full h-full bg-gray-300 opacity-50'></div>
            <h3 className='text-red-500 font-bold text-[20px] absolute top-[50%]
            left-[50%] translate-x-[-50%]'>Hết Hàng</h3>
          </div>
        }
        <div className='absolute top-[2%] left-[5%] px-3 bg-[#DB4444] rounded-3xl text-white font-normal '>Sale</div>
        <div className='absolute top-[2%] right-[10px] sm:right-[-15%] duration-300 ease-linear group-hover:right-[5%]'>
          <div className='w-[25px] aspect-square rounded-full bg-white grid place-items-center
          hover:bg-blackText hover:text-white duration-300 ease-linear cursor-pointer'><CiHeart /></div>
          <div className='w-[25px] aspect-square rounded-full bg-white grid place-items-center
          hover:bg-blackText hover:text-white duration-300 ease-linear cursor-pointer mt-1'><RiResetLeftFill /></div>
        </div>
        <img src={img_url} alt={product.category} className='aspect-9/16 h-[250px] sm:h-[350px]  md:h-[400px]  object-cover' />
        <div className='absolute w-full bottom-[10px] sm:bottom-[-25%] right-[50%] translate-x-[50%] sm:group-hover:bottom-5
        ease-linear duration-300 sm:bottom-[-15%]'>
          <div className='w-full flex flex-col items-center gap-3 text-center px-3 sm:flex-row'>
            <div className='flex-1 text-[14px] font-normal text-blackText bg-white rounded-3xl
            cursor-pointer duration-300 ease-linear hover:bg-blackText hover:text-white 
            overflow-ellipsis overflow-hidden text-nowrap px-2 py-1'
              onClick={() => navigate('/productDetail', { state: { product } })}>Xem nhanh</div>
            {
              token && <div className='flex-1 text-[14px] font-normal text-blackText bg-white rounded-3xl
              cursor-pointer duration-300 ease-linear hover:bg-blackText hover:text-white 
              overflow-ellipsis overflow-hidden text-nowrap px-2 py-1'
                onClick={() => {
                  product.count > 0 ? addToCart(product._id) : alert('sản phẩm đã hết hàng')
                }}>Thêm vào rỏ</div>
            }

          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-blackText font-medium'></h3>
        <div className='flex items-center gap-1 flex-col text-blackText font-medium'>
          <p className=''>{product.price} VNĐ</p>
          <div className='flex items-center gap-4'>
            <p className='line-through text-[14px] text-grayText'>{product.price} VNĐ</p>
            <p className='px-3 bg-[#D2EF9E] rounded-3xl text-blackText font-normal'>0%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CartProduct)