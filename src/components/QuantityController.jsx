import React from 'react'

const QuantityController = ({ updateQuantity, countCart }) => {

    return (
        <div className='flex items-center border-gray-300 border-[2px] text-[25px]
    text-gray-300 justify-around'>
            <div className='px-2 cursor-pointer duration-500 ease-linear hover:text-blackText select-none' onClick={() => updateQuantity(-1)}>-</div>
            <div className='text-blackText px-4'>{countCart}</div>
            <div className='px-2 cursor-pointer duration-500 ease-linear hover:text-blackText select-none' onClick={() => updateQuantity(+1)}>+</div>
        </div>
    )
}

export default QuantityController