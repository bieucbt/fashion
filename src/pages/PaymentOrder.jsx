import React, { memo, useEffect, useState } from 'react'
import axios from 'axios'
import { useImmer } from 'use-immer'
import { FaInfoCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import useDataContext from '@hook/useDataContext'
import { COMMUNE_URL, DISTRICT_URL, PROVINCE_URL } from '../config/constants';
import LocationSelect from '@components/LocationSelect';
import OrderReview from '@components/OrderReview';


const PaymentOrder = () => {
    const { headerHeight, province, district, commune, setDistrict, setCommune, idProvince, setIdProvince, idDistrict, setIdDistrict,
        idCommune, setIdCommune
    } = useDataContext()

    const [recipientInfo, setRecipientInfo] = useImmer({
        province: '',
        district: '',
        commune: '',
        phone: '',
        userName: '',
        addressDetail: ''
    })
    const [hiddenBoxPayment, setHiddenBoxPayment] = useState(false)

    return (
        <div style={{ marginTop: headerHeight + 'px' }} className='h-[48vh] relative'>
            <OrderReview {...{ recipientInfo, hiddenBoxPayment, setHiddenBoxPayment }} />
            <div>
                <div className='flex items-center gap-1'>
                    <CiLocationOn /> <p className='capitalize'>Địa Chỉ Nhận Hàng</p>
                </div>
                <div>{!province && <p>Đang tải dữ liệu tỉnh thành <div className='animate-spin border-[2px] border-t-red-200'></div></p>}</div>
                <div className='flex items-center mt-5 gap-3'>
                    <LocationSelect chooseProvince {...{
                        title: 'Thành Phố/Tỉnh', setRecipientInfo,
                        dataLocation: province, updateIdSelect: setIdProvince, idSelect: idProvince,
                        nameIdSelect: 'idProvince', nameSelect: 'province'
                    }} />
                    <LocationSelect {...{
                        title: 'Quận/Huyện', setRecipientInfo,
                        dataLocation: district, updateIdSelect: setIdDistrict, idSelect: idDistrict,
                        nameIdSelect: 'idDistrict', nameSelect: 'district'
                    }} />
                    <LocationSelect {...{
                        title: 'Phường/Xã', setRecipientInfo,
                        dataLocation: commune, updateIdSelect: setIdCommune, idSelect: idCommune,
                        nameIdSelect: 'idCommune', nameSelect: 'commune'
                    }} />
                </div>
                <div className='mt-2'>
                    <label htmlFor="">Địa chỉ cụ thể số nhà/Làng <span className='text-red-500'>*</span></label>
                    <input type="text" className='border ml-2  px-2 py-1' value={recipientInfo.addressDetail}
                        onChange={e => setRecipientInfo(draft => { draft.addressDetail = e.target.value })} />
                </div>
                <div className='mt-5'>
                    <div className='flex items-center gap-1'><FaInfoCircle /> Thông tin người nhận</div>
                    <div className='mt-3'>
                        <div>
                            <label htmlFor="" ><div className='min-w-[110px] inline-block'>Họ Tên <span className='text-red-500'>*</span>:</div></label>
                            <input type="text" className='border px-2 py-1' value={recipientInfo.userName}
                                onChange={e => {
                                    setRecipientInfo(draft => { draft.userName = e.target.value })
                                }} />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor=""><div className='min-w-[110px] inline-block'>số điện thoại <span className='text-red-500'>*</span>:</div></label>
                            <input type="text" className='border px-2 py-1' value={recipientInfo.phone}
                                onChange={e => setRecipientInfo(draft => { draft.phone = e.target.value })} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-[20px] font-bold flex items-center mt-10'>
                <div className=' hoverBgWhite hover:border cursor-pointer bg-black text-white rounded-md px-3 py-1'
                    onClick={() => {
                        const isEmpty = Object.entries(recipientInfo).some(item => recipientInfo[item[0]] == '')
                        if (isEmpty) {
                            alert('Vui lòng điền đầy đủ thông tin.')
                        } else
                            setHiddenBoxPayment(true)
                    }}>Mua Hàng</div>
            </div>
        </div>
    )
}

export default PaymentOrder