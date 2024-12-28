import axios from 'axios';

const API_URL = 'http://localhost:3000'; // URL backend của bạn

// Gửi yêu cầu đăng ký
export const register = async (formData) => {
  try {
    
    console.log('Form data:', formData);  // Kiểm tra dữ liệu gửi đi
    const response = await axios.post(`${API_URL}/register`, formData);
    console.log('Response:', response.data);  // Kiểm tra phản hồi từ server
    return response.data; // Phản hồi thành công
  } catch (error) {
    console.error('Error response:', error.response?.data);  // In lỗi chi tiết nếu có
    throw error.response?.data || error.message; // Ném lỗi từ backend
  }
};
