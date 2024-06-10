import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center py-[10px] text-white gap-10">
      {token && (
        <Link to="/" onClick={handleLogout} className="font-bold LTR h">Logout</Link>
      )}
      {!token && (
        <>
          <Link to="/login" className="font-bold LTR h">Login</Link>
          <Link to="/register" className="font-bold RTL h">Register</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
