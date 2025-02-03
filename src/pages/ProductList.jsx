import React, { useEffect, useState } from 'react'
import useDataContext from '../hook/useDataContext'
import { PRODUCT_URL } from '../config/constants'
import axios from 'axios'
import useToastContext from '../hook/useToastContext'
import { FaFilter } from "react-icons/fa";
import CartProduct from '../components/CartProduct'

const ProductList = () => {
    const { headerHeight } = useDataContext()
    const [products, setProducts] = useState([])
    const { showtoast } = useToastContext()

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios.get(PRODUCT_URL)
                setProducts(res.data)
            } catch (err) {
                showtoast('error', err.message)
            }
        }

        getAllProducts()
    }, [])


    return (
        <div className='' style={{ marginTop: headerHeight + 'px' }}>
            <div>
                <div><FaFilter /><span>lọc sản phẩm</span></div>
            </div>
            <div>
                {
                    products.map((product, i) => {
                        <CartProduct key={i} product={product} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductList