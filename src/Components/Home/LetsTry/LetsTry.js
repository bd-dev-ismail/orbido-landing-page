import React from "react";

const LetsTry = () => {
  return (
    <div className="px-4 pt-[8rem] lg:pt-5 rounded-lg text-white py-5 lg:pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div
        style={{
          background:
            "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)",
        }}
        className="p-5 rounded-xl lg:flex justify-between items-center mb-5"
      >
        <div>
          <h3 className="lg:text-5xl text-3xl font-bold leading-10 lg:leading-[77px] text-white">
            Let’s try our service now!
          </h3>
          <p
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
            className="text-sm font-normal my-3 lg:my-0"
          >
            Everything you need to accept card payments and <br /> grow your
            business anywhere on the planet.
          </p>
        </div>
        <div className="flex lg:block justify-center items-center">
          <a
            href="/"
            aria-label=""
            style={{
              background:
                "linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
            }}
            className="flex justify-center items-center text-center  font-semibold w-[166px] h-[45px] rounded-lg text-black"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetsTry;
