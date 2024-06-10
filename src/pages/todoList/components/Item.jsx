import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CardItems from "./CardItems";

const Item = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  console.log(items.data);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in localStorage");
        }
        const response = await axios.get(
          `http://94.74.86.174:8080/api/checklist/${id}/item`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setItems(response.data);
      } catch (error) {
        setError(
          `There was an error fetching the items: ${
            error.response ? error.response.data.message : error.message
          }`
        );
      }
    };

    fetchItems();
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[50%]">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">↤ kembali</Link>
            <h1 className="font-bold text-red-500 text-3xl">items</h1>
          </div>
          <Link
            to="/plus-items"
            className="btnPlus btn px-[25px] py-2 rounded-xl"
          >
            Tambah +
          </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <ul>
          {items.data?.map((item) => (
            <CardItems items={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Item;
