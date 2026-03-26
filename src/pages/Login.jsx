import React, { useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import { loginUser } from "../api/AuthService";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {


    const data= await loginUser(email, password)
    console.log(data);

    if(data.access_token){
      localStorage.setItem('token',data.access_token);

      localStorage.setItem('userName',email);

      navigate('/',{replace: true})
    }else{
      alert(" Invalid email or password");
      console.log(data);
      
    }
    
   } catch (error) {
      alert("error occurred")
      console.log(error);

    };

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login to your account
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?
          <a href="/signup" className="text-blue-600 ml-1">
            Sign up
          </a>
        </p>

      </div>

    </div>
  );
};

export default Login;
