import React from "react";
import { Cards } from "../components/Cards";
import Carousol from "../components/Carousol";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <Carousol />
        </div>
        <div style={{ display: "flex" }}>
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
