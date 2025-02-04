import React, { memo } from 'react'
import Search from './Search'
import CartProduct from './CartProduct'

const ModalSearch = ({ activeModalSearch, setActiveModalSearch }) => {

  return (
    <div className={!activeModalSearch ? 'hidden' : 'fixed inset-0  z-10 '}>
      <div className='bg-[#545454] opacity-45 absolute inset-0 '
        onClick={() => setActiveModalSearch(false)}></div>
      <div className='h-full grid place-items-center over'>
        <div className='relative place-items-center bg-white p-5 z-[10] w-[80%] m-auto rounded-xl'>
          <Search className='w-full' />
          <h3 className='text-[22px] font-semibold mt-5'>Từ khóa tìm kiếm nhiều</h3>
          <div className='flex items-center font-normal mt-3 gap-4'>
            <div>Váy</div>
            <div>Áo sơ mi</div>
            <div>Áo mùa đông</div>
            <div>Top</div>
          </div>
          <h3 className='text-[18px] font-semibold mt-4'>Sản phẩm đã xem gần đây</h3>
          <div className='w-full flex items-start'>
            {/* <CartProduct />
            <CartProduct />
            <CartProduct /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ModalSearch)