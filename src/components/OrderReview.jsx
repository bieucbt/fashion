import React, { memo } from 'react'
import { MdClose } from 'react-icons/md'
import useDataContext from '../hook/useDataContext'
import { useNavigate } from 'react-router-dom'

const OrderReview = ({ recipientInfo, hiddenBoxPayment, setHiddenBoxPayment }) => {

    const navigate = useNavigate()


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
                    onClick={() => navigate('/orderConfirmationPage')}>OK</button></div>
            </div>
        </div>
    )
}

export default memo(OrderReview) 