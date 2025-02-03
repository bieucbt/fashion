
import validator from 'validator';

export const validateForm = (formData, confirmPassword, showToast) => {
  const { email, password } = formData;

  // Kiểm tra các trường không được để trống
  if (email == '' || password == '' || confirmPassword == '') {
    showToast('error', 'Vui lòng nhập ô input, không để trống')
    return false
  }
  // Kiểm tra email
  else if (!validator.isEmail(email)) {
    showToast('error', 'Email không hợp lệ')
    return false
  }
  // Kiểm tra mật khẩu
  else if (confirmPassword !== password) {
    showToast('error', 'Mật khẩu không trùng khớp')
    return false
  }

  return true
};