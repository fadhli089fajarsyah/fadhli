import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://94.74.86.174:8080/api/login', formData);
      const token = response.data.data.token;
      console.log(token);
      localStorage.setItem('token', token);
      console.log('Login berhasil. Token:', token);
      window.location.href = '/';
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setError('Login gagal: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-[30%]">
        <h1 className="font-bold text-[red] text-[50px]">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 ">
            <div className="w-full LTR">
              <label htmlFor="username" className="ml-1 text-orange-500 ">
                username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                className="mt-2 w-full bg-black border p-2 rounded-xl border-orange-500"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="w-full RTL">
              <label htmlFor="password" className="ml-1 text-orange-500 ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-2 w-full bg-black border p-2 rounded-xl border-orange-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex w-full justify-between items-center mt-7 text-orange-500 faded">
            <Link to="/" className="text-gray-500 h">
              ← kembali
            </Link>
            <button type="submit" className="btn px-[25px] py-2 rounded-xl ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
