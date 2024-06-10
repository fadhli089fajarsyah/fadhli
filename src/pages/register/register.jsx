import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username:''
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
      const response = await axios.post('http://94.74.86.174:8080/api/register', formData);
      console.log('Registration successful:', response.data);
      window.location.href = '/login';
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      setError(`There was an error submitting the form: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-[30%]">
        <h1 className="font-bold text-red-500 text-3xl">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <div className="w-full LTR">
              <label htmlFor="email" className="ml-1 text-orange-500">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-2 w-full bg-black border p-2 rounded-xl border-orange-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full LTR">
              <label htmlFor="username" className="ml-1 text-orange-500">username</label>
              <input
                type="username"
                id="username"
                name="username"
                placeholder="username"
                className="mt-2 w-full bg-black border p-2 rounded-xl border-orange-500"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full RTL">
              <label htmlFor="password" className="ml-1 text-orange-500">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-2 w-full bg-black border p-2 rounded-xl border-orange-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex w-full justify-between items-center mt-7 text-orange-500 faded">
            <button type="submit" className="btn px-6 py-2 rounded-xl">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
