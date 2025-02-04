import React, { useEffect, useState } from 'react'
import useDataContext from '../hook/useDataContext'
import { PRODUCT_URL } from '../config/constants'
import axios from 'axios'
import { FaFilter } from "react-icons/fa";
import CartProduct from '../components/CartProduct'
import { showToast } from '../utils/toastUtils';

const ProductList = () => {
    const { headerHeight } = useDataContext()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios.get(PRODUCT_URL)
                setProducts(res.data)
            } catch (err) {
                showToast('error', err.message)
            }
        }

        getAllProducts()
    }, [])

    return (
        <div className='' style={{ marginTop: headerHeight + 'px' }}>
            <div className='py-5 cursor-pointer'>
                <div className='flex items-center gap-2'><FaFilter /><span>lọc sản phẩm</span></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    products.map((product) => (
                        <CartProduct key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList