import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Business from "./Business/Business";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id="banner-container">
        <Banner />

        <Business />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
