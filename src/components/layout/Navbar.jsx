import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );
  const [userName, setUserName] = useState(null);
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("authChange", handleAuthChange);

    return () =>
      window.removeEventListener("authChange", handleAuthChange);
  }, []); 

  
  useEffect(() => {
    const name = localStorage.getItem("userName");
    setUserName(name);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("userName");

    setUserName(null);
    window.dispatchEvent(new Event("authChange"));

    navigate("/login");
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">

    
      <h1 className="text-2xl font-bold">
        <Link to="/">MyStore</Link>
      </h1>

      
      <div className="flex items-center bg-white rounded overflow-hidden">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/products?search=${search}`);
            }
          }}
          className="px-3 py-1 text-black outline-none"
        />
        <button
          onClick={() => navigate(`/products?search=${search}`)}
          className="bg-yellow-400 px-3 py-1"
        >
          🔍
        </button>
      </div>

      
      <ul className="flex gap-6 items-center">

        <li>
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-gray-300"
          }>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-gray-300"
          }>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-gray-300"
          }>
            Cart
          </NavLink>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>

            <li
              onClick={handleLogout}
              className="cursor-pointer hover:text-red-400"
            >
              Logout
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}

        <li
          className="cursor-pointer hover:text-gray-300"
          onClick={() => navigate(-1)}
        >
          Back
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;