import React, { memo } from 'react'

const InputText = ({title, require, placeholder, type, className}) => {
  return (
    <div className={className += ' mb-3'}>
      <label htmlFor={title} className='mb-2 text-[12px] font-semibold text-blackText'>{title} 
        {require && <span className='text-red-500 '> *</span>}</label><br></br>
      <input type={type || 'text'} placeholder={placeholder} required={require} id={title}
      className='px-4 py-[10px] text-[14px] font-normal outline-none border-gray-300 hover:border-blackText duration-500 ease-linear rounded-sm border w-full' />
    </div>
  )
}

export default  memo(InputText)