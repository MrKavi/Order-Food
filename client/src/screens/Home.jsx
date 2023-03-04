import React from "react";
import { Cards } from "../components/Cards";
import CarouselHome from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <CarouselHome />
        </div>
        <div className="d-md-flex">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
