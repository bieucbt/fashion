import React, { memo, useEffect, useRef, useState } from 'react'

const LocationSelect = ({ title, dataLocation, setRecipientInfo, updateIdSelect,
    idSelect, nameIdSelect, nameSelect
}) => {
    // idSelect => id đang được chọn
    // nameIdSelect => tên id của select như idProvince, idDistrict, idCommune
    // nameSelect => tên của loại select: province, district, commune
    const [selectId, setSelectId] = useState(dataLocation[0][nameIdSelect] || null)
    const selectRef = useRef(null)

    useEffect(() => {
        if (selectId && dataLocation.some(item => item[nameIdSelect] == selectId)) {
            setRecipientInfo(draft => {
                draft[nameSelect] = dataLocation.find(item => item[nameIdSelect] == selectId).name
            })
        }
        else {
            setRecipientInfo(draft => {
                draft[nameSelect] = dataLocation.find(item => item[nameIdSelect] == selectRef.current.value).name
            })
        }
    }, [selectId, idSelect])

    return (
        <div>
            <label htmlFor="province">{title} <span className='text-red-500'>*</span></label><br />
            <select ref={selectRef} value={idSelect} onChange={e => {
                updateIdSelect(e.target.value)
                // console.log(nameSelect + ' onchang ' + e.target.value)
                if (nameIdSelect == 'idProvince') {
                    nameIdSelect == 'idDistrict' && updateIdSelect('001')
                    nameIdSelect == 'idCommune' && updateIdSelect('0001')
                }
                setSelectId(e.target.value)
            }} className='border cursor-pointer'>
                {dataLocation.map((item, i) => <option key={i} value={item[nameIdSelect]} >{item.name}</option>)}
            </select>
        </div>
    )
}

export default memo(LocationSelect) 