import React from "react";
import aribnd from "../../../assets/alibnb.png";
import binance from "../../../assets/binance.png";
import coinbase from "../../../assets/coinbase.png";
import dropbox from "../../../assets/dropbox.png";

const Companies = () => {
  return (
    <div className="px-4 my-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        <div>
          <img src={aribnd} alt="" className="lg:w-[265px] lg:h-[57px]" />
        </div>
        <div>
          <img src={binance} alt="" className="lg:w-[265px] lg:h-[57px]" />
        </div>
        <div>
          <img src={coinbase} alt="" className="lg:w-[265px] lg:h-[57px]" />
        </div>
        <div>
          <img src={dropbox} alt="" className="lg:w-[265px] lg:h-[57px]" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
