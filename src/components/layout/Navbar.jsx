import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        <Link to="/">MyStore</Link>
      </h1>

      <ul className="flex gap-6">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-gray-300"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-gray-300"
            }
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-gray-300"
            }
          >
            Cart
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-gray-300"
            }
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-gray-300"
            }
          >
            Signup
          </NavLink>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;