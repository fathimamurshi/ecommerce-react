import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">MyStore</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Products</li>
        <li className="cursor-pointer hover:text-gray-300">Cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;