import React from 'react'
import useDataContext from '../hook/useDataContext'

const OrderConfirmationPage = () => {
    const { headerHeight } = useDataContext()
    return (
        <div style={{ marginTop: headerHeight + 'px' }}>
            <h3 className='font-bold'>Thông tin đơn hàng</h3>
            <div>

            </div>
        </div>
    )
}

export default OrderConfirmationPage