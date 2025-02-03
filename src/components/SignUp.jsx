import React, { useCallback, useRef, useState } from 'react'
import { useImmer } from 'use-immer'
import InputText from './InputText'
import { validateForm } from '../utils/validateForm';
import axios from 'axios'
import { USER_URL } from '../config/constants'
import { showToast } from '../utils/toastUtils';


const SignUp = () => {
  const [formdata, setFormData] = useImmer({
    email: '',
    password: ''
  })
  const [comfirmPass, setComfirmPass] = useState('')

  const handleSubmit = useCallback(() => {
    if (validateForm(formdata, comfirmPass, showToast)) {
      axios.post(USER_URL + 'signup', formdata)
        .then(data => {
          if (data.status >= 200 && data.status < 300) {
            console.log(data)
            Object.keys(formdata).forEach(key => {
              setFormData(draft => { draft[key] = '' })
            })
            setComfirmPass('')
            showToast('success', 'Đăng ký thành công')
          }
        })
        .catch(err => {
          if (err.response)
            showToast('error', err.response.data.message)
          else if (err.message)
            showToast('error', err.message)
        })
    }
  }, [formdata, comfirmPass])

  return (
    <div>
      <p className='mb-6 text-[14px] font-normal'>Tạo tài khoản và khám phá tất cả các lợi ích dành riêng cho người dùng đã đăng ký của BieuCBT.</p>
      <form>
        <div>
          <InputText value={formdata.email} title="Email" type='email' require placeholder='Nhập Email của bạn' typeValue='email'
            setFormData={setFormData} />
          <InputText value={formdata.password} title="Mật khẩu" type='password' require placeholder='Nhập mật khẩu' typeValue='password'
            setFormData={setFormData} />
          <div className='mb-3'>
            <label htmlFor='comfirmPass' className='mb-2 text-[12px] font-semibold text-blackText'>Xác nhận mật khẩu
              <span className='text-red-500 '> *</span></label><br></br>
            <input type='password' placeholder='Nhập lại mật khẩu xác nhận' required={true} id='comfirmPass'
              value={comfirmPass.trim()}
              onInput={(e) => setComfirmPass(e.target.value)}
              className='inputForm' />
          </div>
        </div>
        <p className='text-[12px] font-normal'>Bằng cách tạo tài khoản, Quý Khách đã đồng ý với <span className='cursor-pointer text-[#007AFF]'>Điều khoản & Điều kiện</span> và <span className='cursor-pointer text-[#007AFF]'>Chính sách Bảo mật</span> của chúng tôi.</p>
        <div className='btnForm' onClick={handleSubmit}>Đăng ký</div>
      </form>
    </div>
  )
}

export default SignUp