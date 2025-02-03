import React, { memo } from 'react'

const InputText = ({ value, title, require, placeholder, type, className, typeValue, setFormData }) => {
  return (
    <div className={className += ' mb-3'}>
      <label htmlFor={title} className='mb-2 text-[12px] font-semibold text-blackText'>{title}
        {require && <span className='text-red-500 '> *</span>}</label><br></br>
      <input type={type || 'text'} placeholder={placeholder}
        value={value.trim() || ''}
        required={require} id={title}
        onInput={(e) => {
          setFormData && setFormData((draft) => {
            draft[typeValue] = e.target.value
          })
        }}
        className='inputForm' />
    </div>
  )
}

export default memo(InputText)