import React, { useEffect, useState } from 'react'
import useDataContext from '@hook/useDataContext'
import { IoMdArrowRoundBack } from 'react-icons/io'
import ProductCartItem from '@components/ProductCartItem'
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { headerHeight, products, cart } = useDataContext()
    const [listProductCart, setListProductCart] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const draft = []
        const productCart = () => {
            Object.entries(cart).forEach(item => {
                draft.push({ ...products.find(product => product._id == item[0]), count: item[1] })
            })
        }
        productCart()
        setListProductCart(draft)
    }, [cart])

    return (
        <div style={{ marginTop: headerHeight + 'px' }}>
            <div className='flex items-center gap-2 cursor-pointer text-[20px] pt-[20px] pb-[30px]'
                onClick={() => window.history.back()}>
                <IoMdArrowRoundBack />
                <span>quay lại</span>
            </div>
            {
                listProductCart.length > 0 ?
                    <div className='text-center'>
                        <div className='grid grid-cols-6 gap-3  border-b-[1px] border-gray-200 pb-5 capitalize
                    text-grayText'>
                            <div>sản phẩm</div>
                            <div>tên</div>
                            <div>giá</div>
                            <div>số lượng</div>
                            <div>tổng</div>
                            <div>xóa</div>
                        </div>
                        {
                            listProductCart.map((product, id) => <ProductCartItem key={id} {...{ product }} />)
                        }
                        <div className='text-[20px] font-bold flex items-center justify-end'>
                            <div className=' hoverBgWhite hover:border cursor-pointer bg-black text-white rounded-md px-3 py-1'
                                onClick={() => navigate('/payment')}>Đặt hàng</div>
                        </div>
                    </div> : <div className='text-center font-semibold text-[20px]'>Bạn chưa thêm sản phẩm nào vào rỏ hàng</div>
            }
        </div>
    )
}

export default CartPage