import { useState } from "react";
import { register } from "../services/authService";

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await register(registerData); // Đổi register.Data thành registerData
      setMessage('Registration successful!'); // Thay đổi thông báo
      console.log('Token:', response.token); // Token trả về từ backend
    } catch (error) {
      setMessage(error.message || 'Registration failed!'); // Thay đổi thông báo
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
      <h2 className="p-3 text-3xl font-bold text-pink-400">Horiz</h2>
      <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
      <h3 className="text-xl font-semibold text-blue-400 pt-2">Sign Up!</h3> {/* Sửa lại thành "Sign Up!" */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <input
          type="email"
          name="email"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Email"
          value={registerData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Password"
          value={registerData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Sign Up'} {/* Sửa lại thành "Sign Up" */}
        </button>
      </form>
      {message && <p className="text-red-500 text-sm mt-2">{message}</p>}
      <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
      <p className="text-blue-400 mt-4 text-sm">Dont have an account?</p>
      <p className="text-blue-400 mb-4 text-sm font-medium cursor-pointer">
        Create a New Account?
      </p>
    </div>
  );
};

export default RegisterForm;
