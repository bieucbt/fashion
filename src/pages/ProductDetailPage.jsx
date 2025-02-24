import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useDataContext from '../hook/useDataContext'
import { CLOUDINARY_URL } from '../config/constants'
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductDetailPage = () => {
    const { product } = useLocation().state
    const { headerHeight, setCart, token } = useDataContext()
    const [countCart, setCountCart] = useState(0)
    const { _id, color, count, description, img,
        name, price, size
    } = product

    const img_URL = CLOUDINARY_URL + img
    const sizeList = JSON.parse(size)
    const colorList = JSON.parse(color)
    const [colorIndex, setColorIndex] = useState(0)
    const [sizeIndex, setSizeIndex] = useState(0)
    const { addToCart } = useDataContext()


    const updateQuantity = (number) => {

        if (count <= 0) {
            alert('sản phẩm đã hết hàng')
        }
        else
            setCountCart(prev => prev += number)
    }

    useEffect(() => {
        scrollTo({ top: 0 })
        if (countCart <= 0 && count != 0)
            setCountCart(1)
        else if (countCart > count && count != 0) {
            alert('bạn chỉ có thể mua tối đa: ' + count + ' sản phẩm')
            setCountCart(count)
        }
    }, [countCart])

    const handleAddToCart = () => {
        if (token)
            countCart != 0 ?
                addToCart(_id, countCart) :
                alert('sản phẩm đã hết hàng')
        else
            alert('vui lòng đăng nhập để thêm sản phẩm vào rỏ')

    }

    return (
        <div style={{ marginTop: (headerHeight + 'px') }}>
            <div className='flex items-center gap-2 cursor-pointer text-[20px] pt-[20px] pb-[30px]'
                onClick={() => window.history.back()}>
                <IoMdArrowRoundBack />
                <span>quay lại</span>
            </div>
            <div className='flex gap-[50px] text-blackText pb-5'>
                <div className='flex-1 h-[80vh]'>
                    <img src={img_URL} alt="product" className='w-full h-full object-cover' />
                </div>
                <div className='flex-1 sticky top-0 left-0'>
                    <h3 className='text-[26px] mb-[15px] capitalize'>{name}</h3>
                    <div className='text-[20px] '>{price} VNĐ</div>
                    <hr className='w-full h-[2px] bg-gray-100 my-[15px]' />
                    <p className='text-grayText mb-5'>{description}</p>
                    <div>
                        {colorList.length > 0 && <div className=''>
                            <div>Màu sắc:</div>
                            <div>
                                {
                                    colorList.map((item, i) => <div key={i}
                                        className={`p-2 rounded-full border-[2px] w-[30px] h-[30px] grid place-content-center cursor-pointer ${colorIndex == i && 'border-black'} my-1 select-none`}
                                        style={{ backgroundColor: `${item}` }}
                                        onClick={() => setColorIndex(i)}></div>)
                                }
                            </div>
                        </div>}
                        {
                            sizeList.length > 0 && <div >
                                <span>kích thước:</span>
                                <div>
                                    {
                                        sizeList.map((item, i) => <div key={i}
                                            className={`p-2 rounded-full border-[2px] w-[30px] h-[30px] grid place-content-center cursor-pointer ${sizeIndex == i && 'border-black'} mt-1 select-none`}
                                            style={{ backgroundColor: `${item}` }}
                                            onClick={() => setSizeIndex(i)}>{item}</div>)
                                    }
                                </div>
                            </div>
                        }

                        <div className='mt-4'><strong>{count}</strong> số lượng có sẵn</div>

                        <div className='flex items-center gap-2 mt-3 h-[40px]'>

                            <div className='flex items-center border-gray-300 border-[2px] text-[25px]
                            text-gray-300'>
                                <div className='px-2 cursor-pointer duration-500 ease-linear hover:text-blackText select-none' onClick={() => updateQuantity(-1)}>-</div>
                                <div className='text-blackText px-4'>{countCart}</div>
                                <div className='px-2 cursor-pointer duration-500 ease-linear hover:text-blackText select-none' onClick={() => updateQuantity(+1)}>+</div>
                            </div>
                            <div className='flex-1 grid place-content-center h-full uppercase font-bold bg-blackText text-white border-[2px] border-blackText hoverBgWhite 
                            cursor-pointer select-none'
                                onClick={handleAddToCart}>Thêm vào giỏ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage