import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
