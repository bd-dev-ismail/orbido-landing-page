import React from "react";
import rewards from "../../../assets/icons/rewards.png";
import secured from "../../../assets/icons/secure.png";
import balance from "../../../assets/icons/balance.png";
const Business = () => {
  return (
    <div className="px-4 mb-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="lg:text-5xl text-3xl font-bold leading-10 lg:leading-[77px] text-white">
              You do the business, we’ll handle the money.
            </h2>
            <p
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
              className="text-sm font-normal my-3"
            >
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
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
              className="flex justify-center items-center text-center  font-semibold w-[166px] h-[45px] rounded-lg"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="relative">
          <div className=" rounded-2xl flex justify-center items-center p-5 gap-2">
            <img src={rewards} alt="" className="w-[62px] h-[52px]" />
            <div>
              <h4 className="text-white text-xl font-medium">Rewards</h4>
              <p
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                className="text-sm"
              >
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101D 95.11%)",
            }}
            className="my-5 rounded-2xl flex justify-center items-center p-5 gap-2"
          >
            <img src={secured} alt="" className="w-[62px] h-[52px]" />
            <div>
              <h4 className="text-white text-xl font-medium">100% Secured</h4>
              <p
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                className="text-sm"
              >
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </div>
          <div className="my-4 rounded-2xl flex justify-center items-center p-5 gap-2">
            <img src={balance} alt="" className="w-[62px] h-[52px]" />
            <div>
              <h4 className="text-white text-xl font-medium">
                Blance Transfer
              </h4>
              <p
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                className="text-sm"
              >
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
