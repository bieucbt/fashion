import { toast } from 'react-toastify';
import validator from 'validator';

export const validateForm = (formData, confirmPassword) => {
  const { email, password } = formData;

  // Kiểm tra các trường không được để trống
  if (email == '' || password == '' || confirmPassword == '') {
    toast.error('Vui lòng nhập ô input, không để trống')
    return false
  }
  // Kiểm tra email
  else if (!validator.isEmail(email)) {
    toast.error('Email không hợp lệ')
    return false
  }
  // Kiểm tra mật khẩu
  else if (confirmPassword !== password) {
    toast.error('Mật khẩu không trùng khớp')
    return false
  }

  return true
};