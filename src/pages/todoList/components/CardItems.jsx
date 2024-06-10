import { FaRegTrashAlt } from "react-icons/fa";


const CardItems = ({ items }) => {
  console.log(items);
  
  return (
    <div className="bg-black border p-2 rounded-xl border-orange-500 my-2 flex justify-between px-5">
      <h2 className="text-orange-500 font-bold">{items.name}</h2>
      <div className="flex gap-2">
        <button className="cursor-pointer text-red-500" >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CardItems;
