import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"

const layouts = () => {
  return (
    <div className="bg-black h-[100vh] text-white">
      <div >
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default layouts
