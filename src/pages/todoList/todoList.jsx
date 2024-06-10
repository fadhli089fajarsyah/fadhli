import React, { useState, useEffect } from "react";
import axios from "axios";
import CardToDo from "./components/CardToDo";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [checklist, setChecklist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in localStorage");
        }
        const response = await axios.get(
          "http://94.74.86.174:8080/api/checklist",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setChecklist(response.data);
      } catch (error) {
        setError(
          `There was an error fetching the checklist: ${
            error.response ? error.response.data.message : error.message
          }`
        );
      }
    };

    fetchChecklist();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col w-[50%]">
        <div className="flex justify-between">
          <h1 className="font-bold text-red-500 text-3xl">Todo List</h1>
          
          <Link to="/plus-checklist" className="btnPlus btn px-[25px] py-2 rounded-xl">
            Tambah +
          </Link>
        </div>
        
        <ul>
            {checklist.data?.map((item) => (
              <CardToDo key={item.id} item={item} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
