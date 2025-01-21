import validator from 'validator';
import { showToastError } from './toast';

export const validateForm = (formData, confirmPassword) => {
  const {email, password } = formData;

  // Kiểm tra các trường không được để trống
  Object.keys(formData).forEach((key) => {
    if (formData[key] == '') {
      showToastError('Vui lòng nhập ô input, không để trống')
      throw new Error('Vui lòng nhập ô input, không để trống');
    }
  });

  // Kiểm tra email
  if (!validator.isEmail(email)) {
    showToastError('Email không hợp lệ')
    throw new Error('Email không hợp lệ');
  }

  // Kiểm tra mật khẩu
  if (confirmPassword !== password) {
    showToastError('Mật khẩu không trùng khớp')
    throw new Error('Mật khẩu không trùng khớp');
  }
};