import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="px-4 py-5 flex justify-center items-center h-[35vh] lg:h-[40vh] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="">
        <h3
          id="banner"
          className="lg:text-7xl text-3xl lg:leading-[82px] leading-10 text-center  font-bold uppercase "
        >
          make your dream website <br /> Stand out <br /> in a crowd
        </h3>
      </div>
    </div>
  );
};

export default Banner;
