import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");

    
    window.dispatchEvent(new Event("authChange"));

    navigate("/login");
  };

  // 🔒 Protect page
  // if (!token) {
  //   return (
  //     <div className="flex justify-center items-center h-[70vh]">
  //       <h2 className="text-xl">Please login to view profile</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>

      <div className="bg-white shadow-md rounded p-6 text-center">
        <p className="text-lg">
          👤 Username: <span className="font-semibold">{userName}</span>
        </p>

        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;