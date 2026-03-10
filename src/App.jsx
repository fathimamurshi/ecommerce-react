import React from "react";

import Home from "./pages/Home";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Products from "./pages/Product";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Products/>
      <Footer/>
    </>
  );
}

export default App;