import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Business from "./Business/Business";
import Transaction from "./Transaction/Transaction";
import LetsTry from "./LetsTry/LetsTry";
import Companies from "./Companies/Companies";

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
      <div id="second-section">
        <Transaction />

        <LetsTry />
      </div>
      <div>
        <Companies />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
