import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Oops! Page not found</p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;