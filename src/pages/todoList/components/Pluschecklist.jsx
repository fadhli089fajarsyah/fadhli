import React, { useState } from "react";
import axios from "axios";

const Pluschecklist = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found in localStorage");
      }
      const response = await axios.post(
        "http://94.74.86.174:8080/api/checklist",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess("Checklist item created successfully!");
      setName('');
      window.location.href = '/';

    } catch (error) {
      setError(
        `There was an error creating the checklist item: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <div className="w-full LTR">
            <label htmlFor="name" className="ml-1 text-orange-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="mt-2 w-full bg-black border p-2 rounded-xl border-orange-500"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div className="flex w-full justify-between items-center mt-7 text-orange-500 faded">
          <button type="submit" className="btn px-6 py-2 rounded-xl">
            submit  
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pluschecklist;
