import React from 'react'
import InputText from './InputText'

const SignUp = () => {
  return (
    <div>
      <p className='mb-6 text-[14px] font-normal'>Tạo tài khoản và khám phá tất cả các lợi ích dành riêng cho người dùng đã đăng ký của BieuCBT.</p>
      <div>
        <div className='flex gap-3'>
          <InputText className="flex-1" title="Họ" require placeholder='Nhập họ của bạn' />
          <InputText className="flex-1" title="Tên"  require placeholder='Nhập tên của bạn' />
        </div>
        <InputText title="SĐT"  require placeholder='Nhập số điện thoại' />
        <InputText title="Email"  require placeholder='Nhập Email của bạn' />
        <InputText title="Mật khẩu"  require placeholder='Nhập mật khẩu' />
        <InputText title="Xác nhận mật khẩu"  require placeholder='Nhập lại mật khẩu xác nhận' />
      </div>
      <p className='text-[12px] font-normal'>Bằng cách tạo tài khoản, Quý Khách đã đồng ý với <span className='cursor-pointer text-[#007AFF]'>Điều khoản & Điều kiện</span> và <span className='cursor-pointer text-[#007AFF]'>Chính sách Bảo mật</span> của chúng tôi.</p>
      <div className='btnForm'>Đăng ký</div>
    </div>
  )
}

export default SignUp