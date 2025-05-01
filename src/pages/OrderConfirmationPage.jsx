import React, { useEffect, useState } from 'react'
import useDataContext from '../hook/useDataContext'
import axios from 'axios'
import { CLOUDINARY_URL, ORDER_URL } from '../config/constants'
import { showToast } from '../utils/toastUtils'

const OrderConfirmationPage = () => {
    const { headerHeight, products } = useDataContext()
    const [orders, setOrders] = useState(JSON.parse(sessionStorage.getItem('order')) || [])

    useEffect(() => {
        const idUser = JSON.parse(sessionStorage.getItem('data')).idUser
        if (idUser) {
            axios.get(ORDER_URL + idUser)
                .then(res => {
                    const resOrders = res.data
                    const newOrders = resOrders.map(order => ({ ...order, orderTotal: Object.entries(JSON.parse(order.cart)).map(cart => ({ ...products.find(item => item._id == cart[0]), count: cart[1] })).reduce((acc, curr) => acc += curr.price * curr.count, 0) }))
                    setOrders(newOrders)
                    sessionStorage.setItem('orders', JSON.stringify(newOrders))
                })
                .catch(err => console.log(err))
        }
    }, [])

    const getOrderStatusText = (id) => {
        switch (Number(id)) {
            case 1: return 'đang đặt hàng'
            case 2: return 'đang xử lý'
            case 3: return 'đang giao hàng'
            case 4: return 'giao hàng thành công'
            case 5: return 'giao hàng thất bại'
            case 6: return 'đổi trả hàng'
            case 7: return 'hủy đơn hàng'
            default: return 'id không hợp lệ hoặc sai vui lòng kiểm tra lại'
        }
    }

    const cancelOrder = (id) => {
        const deleteOrder = confirm("Bạn có chắc chắn muốn hủy đơn hàng không?")
        if (deleteOrder) {
            showToast('loading', 'Đang hủy đơn hàng')
            axios.post(ORDER_URL + id)
                .then(res => {
                    showToast('success', 'Hủy đơn hàng thành công')
                    setOrders(prev => prev.filter(order => order._id != res.data._id))
                })
                .catch(err => {
                    showToast('error', 'Hủy đơn hàng thất bại')
                    console.log(err)
                })
        }
    }

    return (
        <div style={{ marginTop: headerHeight + 50 + 'px' }}>
            {
                Object.entries(orders).length <= 0 || !orders ? <div className='text-[20px] font-semibold'>Bạn chưa có đơn hàng nào, hãy đặt hàng để theo dõi đơn hàng của bạn</div> :
                    <div >
                        <h3 className='font-bold text-[20px]'>Thông tin đơn hàng</h3>
                        <div>
                            {
                                orders.map((order, i) => <div key={i}>
                                    <div className='flex items-center justify-between mt-8 bg-gray-100'>
                                        <h3><b>Mã đơn hàng:</b> #{order._id}</h3>
                                        <div><b>Trạng thái:</b> {getOrderStatusText(order.status)}</div>
                                    </div>
                                    <div className='border-x-2'>
                                        {
                                            Object.entries(JSON.parse(order.cart)).map(item => {
                                                return { ...products.find(product => product._id == item[0]), count: item[1] }
                                            }).map((item, i) => <div key={i} className='flex justify-between pt-3 border-b'>
                                                <div className='flex gap-5'>
                                                    <img src={CLOUDINARY_URL + item.img} alt={item.name}
                                                        className='w-[100px] aspect-9/16 object-cover' />
                                                    <div>
                                                        <h3>{item.name}</h3>
                                                        <div>phân loại: {item.productType} {item.size && <span>{item.size}</span>}</div>
                                                        <div>x{item.count}</div>
                                                    </div>
                                                </div>
                                                <div className='self-end pr-5'>
                                                    <div>{item.price.toLocaleString('vi-VN')}.VNĐ</div>
                                                </div>
                                            </div>)

                                        }
                                        <div className='my-5 bg-gray-300 p-5 rounded-md flex items-center justify-between'>
                                            {order.status == 1 && <div className='cursor-pointer font-semibold hover:text-red-500'
                                                onClick={() => cancelOrder(order._id)}>Hủy đơn hàng</div>}
                                            <div>Thành tiền: {order.orderTotal.toLocaleString('vi-VN')} VND</div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default OrderConfirmationPage