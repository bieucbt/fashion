import React from 'react'
import useDataContext from '../hook/useDataContext'
import { FaFilter } from "react-icons/fa";
import CartProduct from '../components/CartProduct'

const ProductList = () => {
    const { headerHeight, products } = useDataContext()



    return (
        <div className='' style={{ marginTop: headerHeight + 'px' }}>
            <div className='py-5 cursor-pointer'>
                <div className='flex items-center gap-2'><FaFilter /><span>lọc sản phẩm</span></div>
            </div>
            {
                products.length > 0 ?
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
                        {
                            products.map((product) => (
                                <CartProduct key={product._id} product={product} />
                            ))
                        }
                    </div>
                    : <div className='flex items-center gap-2'><span>Đang tải dữ liệu có thể mất vài tiếng, bạn vui lòng đợi chút xíu thôi nha!</span><div className='border-solid border-[4px] h-[20px] w-[20px] rounded-full border-black border-t-red-600 animate-spin'></div> </div>
            }
        </div>
    )
}

export default ProductList