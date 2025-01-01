import React, { useEffect, useState } from 'react'
import { footerData } from '../data/footerData'
import { useImmer } from 'use-immer';

const Footer = () => {
  const [showMore, setShowMore] = useState({
    showMore0: true,
    showMore1: true,
    showMore2: true,
    showMore3: true,
  })

  useEffect(() => {

    const handleShowMore = () => {
      if(window.innerWidth <= 639) setShowMore({
        showMore0: false,
        showMore1: false,
        showMore2: false,
        showMore3: false,
      })
      else setShowMore({
        showMore0: true,
        showMore1: true,
        showMore2: true,
        showMore3: true,
      })
    }

    const windowResize = window.addEventListener('resize', handleShowMore)
    const windowLoad = window.addEventListener('load', handleShowMore)
    return () => {
      window.removeEventListener('resize', windowResize)
      window.removeEventListener('load', windowLoad)
    }
  }, [])

  return (
    <footer className=' mt-20'>
      <div className='container gap-4 mx-auto grid grid-cols-1 sm:gap-y-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4'>
        {
          footerData.map((item, i) => <div key={i}>
            <div className='flex items-center gap-2'>
              <h4 className='text-blackText font-semibold'>{item.title}</h4>
              <div className='text-[20px] cursor-pointer sm:hidden'
              onClick={() => setShowMore(prev =>({...prev, ['showMore'+i]: !prev['showMore'+i]}))}>
                {showMore['showMore'+i] ? '-' : '+'}</div>
            </div>
            <div className={showMore['showMore'+i] ? 'h-auto opacity-100 mt-6' : 'hidden'}>
              {
                item.list.map((item, i) => <p key={i} className='text-[14px] text-blackText hover:underline
                cursor-pointer mt-1'>{item}</p>)
              }
            </div>
            
          </div>)
        }
        <div className=''>
          <div className='flex items-center gap-2'>
            <h4 className='text-blackText font-semibold'>ĐĂNG KÝ NHẬN TIN TỪ BieuCBT</h4>
            <div className='text-[20px] cursor-pointer sm:hidden'
            onClick={() => {
              setShowMore(prev =>({...prev, ['showMore'+3]: !prev.showMore3}))}}>
                {showMore['showMore'+3] ? '-' : '+'}
              </div>
          </div>
          <div className={showMore.showMore3 ? '' : 'hidden'}>
            <div className='flex items-center  mt-4 border-blackText border-[2px] rounded-sm
            '>
              <input type="text" placeholder='Nhập địa chỉ email' className='flex-[2] w-full pl-3 outline-none' />
              <div className='bg-blackText text-white flex-1 text-center h-full py-2 cursor-pointer'>Đăng ký</div>
            </div>
            <p className='mt-4'>nhận  <span className='text-[#C92127] font-semibold'>Ưu đãi 50% Sinh Nhật</span> Tích Điểm Mọi Hóa Đơn</p>
          </div>
        </div>
      </div>

      <div className='bg-blackText text-white flex items-center gap-4 w-full justify-center py-5
      mt-5 maxSm:flex-wrap px-4'>
        <div className='brand cursor-default maxSm:w-full maxSm:text-center'>BieuCBT.</div>
        <p className='text-[12px]'>Copyright © 2024-2025 <span className='font-semibold'>BieuCBT.</span> All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer