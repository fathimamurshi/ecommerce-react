import React from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to MyStore
        </h1>

        <p className="text-gray-600">
          Discover the best products online
        </p>
      </section>

      <FeaturedProducts />
    </>
  );
};

export default Home;