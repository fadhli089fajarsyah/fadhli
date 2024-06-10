import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const CardToDo = ({ item }) => {
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://94.74.86.174:8080/api/checklist/${item.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.href = "/";
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="bg-black border p-2 rounded-xl border-orange-500 my-2 flex justify-between px-5">
      <h2 className="text-orange-500 font-bold">{item.name}</h2>
      <div className="flex gap-2">
        <button className="cursor-pointer text-red-500" onClick={handleDelete}>
          <FaRegTrashAlt />
        </button>
        <Link to={`/checklist/${item.id}/item`}>Items</Link>
      </div>
    </div>
  );
};

export default CardToDo;
