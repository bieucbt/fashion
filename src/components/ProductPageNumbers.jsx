import React, { useState } from 'react'
import CartProduct from '@components/CartProduct'
import useDataContext from '@hook/useDataContext'


const ProductPageNumbers = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const { products } = useDataContext()



    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    products.slice(currentPage, (currentPage + 1) * 8).map((product) => (
                        <CartProduct key={product._id} product={product} />
                    ))
                }
            </div>
            <div className='flex items-center justify-center mt-10 gap-3'>
                {
                    Array(Math.ceil(products.length / 8)).fill(null).map((_, index) => <div key={index} className='bg-blue-500 text-white aspect-square h-6 rounded-sm grid place-items-center
                    cursor-pointer hover:bg-white hover:text-black ease-linear duration-150 hover:border'
                        onClick={() => {
                            setCurrentPage(index * 8)
                            scrollTo({ top: 0, behavior: 'smooth' })
                        }}>{index + 1}</div>)
                }
            </div>
        </>
    )
}

export default ProductPageNumbers