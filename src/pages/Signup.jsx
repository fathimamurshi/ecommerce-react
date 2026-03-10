import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create an account
        </h2>

        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Already have an account? 
          <a href="/login" className="text-blue-600 ml-1">
            Login
          </a>
        </p>

      </div>

    </div>
  );
};

export default Signup;