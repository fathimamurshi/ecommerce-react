import React from "react";

import Home from "./pages/Home";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Products from "./pages/Product";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const MainLayout = () => (<><Navbar /><Outlet /><Footer /> </>);
  const AuthLayout = () => (<> <Outlet /><Footer /></>)
  return (
    <>

      {/* <Routes>
        <Route element={<MainLayout />}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route >
        <Route element={<AuthLayout />}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route />
      </Routes> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

      </Routes>

    </>
  );
}

export default App;