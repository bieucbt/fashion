import React, { memo } from 'react'
import { MdClose } from 'react-icons/md'
import useDataContext from '../hook/useDataContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PRODUCT_URL, ORDER_URL } from '../config/constants'
import { toast } from 'react-toastify'
import { showToast } from '../utils/toastUtils'

const OrderReview = ({ recipientInfo, hiddenBoxPayment, setHiddenBoxPayment }) => {

    const navigate = useNavigate()
    const { setCart, cart, token, handleUpdateCart, setProducts } = useDataContext()
    const { addressDetail, commune, district, province, phone, userName } = recipientInfo


    const submitOrder = () => {

        // showToast('loading', 'Đang đặt hàng')
        const data = {
            idUser: JSON.parse(sessionStorage.getItem('data')).idUser,
            cart: JSON.stringify(cart),
            address: JSON.stringify([addressDetail, commune, district, province]),
            fullname: userName, phone
        }

        axios.patch(PRODUCT_URL + 'updateQuantity', { cart })
            .then(res => {
                setProducts(res.data)
                return axios.post(ORDER_URL, data)
            })
            .then(res => {
                showToast('success', 'Đặt hàng thành công')
                handleUpdateCart({})
                setCart({})
                sessionStorage.setItem('cart', '{}')
                navigate('/orderConfirmationPage')
            })
            .catch(err => {
                alert(err)
                showToast('error', err)
            })
    }

    return (
        <div className={`${hiddenBoxPayment ? '' : 'hidden'} fixed inset-0 grid place-content-center`}>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative bg-white p-5 rounded-md'>
                <div className='flex items-center gap-10 cursor-pointer justify-between font-bold text-[20px]'><h3>Xác nhận thông tin mua hàng</h3> <MdClose onClick={() => setHiddenBoxPayment(false)} className='cursor-pointer' /> </div>
                <div className='mt-3'>
                    <p className='font-bold'>Địa chỉ nhận hàng</p>
                    <p>{`${recipientInfo.addressDetail}, ${recipientInfo.commune}, ${recipientInfo.district}, ${recipientInfo.province}`}</p>
                </div>
                <div className='mt-3'>
                    <p className='font-bold'>Thông tin người nhận</p>
                    <p>{recipientInfo.userName}</p>
                    <p>{recipientInfo.phone}</p>
                </div>
                <div className='flex justify-end items-center'><button className='bg-black text-white rounded p-1'
                    onClick={submitOrder}>OK</button></div>
            </div>
        </div>
    )
}

export default memo(OrderReview) 