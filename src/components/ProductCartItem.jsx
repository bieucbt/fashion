import React from 'react'
import { CLOUDINARY_URL, USER_URL } from '../config/constants'
import QuantityController from './QuantityController'
import useDataContext from '@hook/useDataContext'

const ProductCartItem = ({ product }) => {

    const { setCart, removeItemCart, products, handleUpdateCart } = useDataContext()
    const productDatabase = products.find(item => item._id == product._id)


    const updateQuantity = (num) => {

        setCart(draft => {
            const count = draft[product._id] += num
            if (count <= 0)
                confirm('Bạn có muốn xóa sản phẩm này khỏi đơn hàng không') ? removeItemCart(product._id) : draft[product._id] = 1
            else {
                if (count > productDatabase.count) {
                    alert('Bạn chỉ có thể thêm tối đa ' + productDatabase.count + ' sản phẩm')
                    draft[product._id] = productDatabase.count
                }
                else draft[product._id] = count
                sessionStorage.setItem('cart', JSON.stringify({ ...draft }))
                handleUpdateCart({ ...draft })
            }

        })
    }

    return (
        <div className='grid grid-cols-6 my-2 items-center border-b-[1px] border-gray-200 pb-5'>
            <div><img src={CLOUDINARY_URL + product.img} alt="product" /></div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div><QuantityController {...{ updateQuantity }} countCart={product.count} /></div>
            <div>{product.price * product.count || 'lỗi'}</div>
            <div className='cursor-pointer'
                onClick={() => removeItemCart(product._id)}
            >xóa</div>
        </div>
    )
}

export default ProductCartItem