import React, { useEffect, useMemo, useState } from 'react'
import useDataContext from '../hook/useDataContext'
import { CLOUDINARY_URL } from '../config/constants'
import { IoMdArrowRoundBack } from 'react-icons/io'

const CartPage = () => {
    const { headerHeight, products, cart, removeItemCart } = useDataContext()
    const [listProductCart, setListProductCart] = useState([])

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
                            listProductCart.map((product, id) => <div key={id}
                                className='grid grid-cols-6 my-2 items-center border-b-[1px] border-gray-200 pb-5'>
                                <div><img src={CLOUDINARY_URL + product.img} alt="product" /></div>
                                <div>{product.name}</div>
                                <div>{product.price}</div>
                                <div>{product.count}</div>
                                <div>{product.price * product.count || 'lỗi'}</div>
                                <div className='cursor-pointer'
                                    onClick={() => removeItemCart(product._id)}
                                >xóa</div>
                            </div>)
                        }
                    </div> : <div className='text-center font-semibold text-[20px]'>Bạn chưa thêm sản phẩm nào vào rỏ hàng</div>
            }
        </div>
    )
}

export default CartPage