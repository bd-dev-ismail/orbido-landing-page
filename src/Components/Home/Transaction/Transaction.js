import React from "react";
import apple from "../../../assets/icons/apple.png";
import play from "../../../assets/icons/playStore.png";
import dribble from "../../../assets/icons/dribble.png";
import arrowRed from "../../../assets/icons/Polygon 2.png";
import netflix from "../../../assets/icons/Netflix-Logo.wine.png";
import manu from "../../../assets/icons/manulife.png";
import arrowgreen from "../../../assets/icons/Polygon 4.png";
import paypal from "../../../assets/icons/paypal.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Transaction = () => {
  return (
    <div className="px-4 lg:my-0 my-[3rem] relative py-16 h-[85vh] lg:h-[65vh] flex justify-center items-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="grid  row-gap-8 gap-16  lg:gap-[20rem] lg:grid-cols-2">
        <div className="flex flex-col justify-center place-items-center">
          <div
            style={{
              background:
                "linear-gradient(113.08deg, #FFFFFF -242.51%, #14101D 85.56%)",
            }}
            className="w-[234px] mb-5 lg:mb-0  lg:absolute right-[3.8rem]  top-[-15%] lg:top-[3%] lg:right-[55%] text-white p-5 shadow-xl rounded-lg "
          >
            <div>
              <div className="flex  items-center gap-5">
                <div className="bg-white flex justify-center items-center w-[57px] h-[52px] rounded-full">
                  <img src={paypal} alt="" className=" w-8" />
                </div>
                <div className="text-white">
                  <p style={{ fontSize: "24px" }} className=" font-semibold">
                    Paypal
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    Checkout
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center my-3">
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    Total
                  </p>
                  <p style={{ fontSize: "16px" }} className=" font-semibold">
                    $210
                  </p>
                </div>
                <div
                  style={{ border: "1px solid rgba(51, 187, 207, 1)" }}
                  className="flex p-1 rounded-lg justify-center items-center w-[73px] "
                >
                  <p
                    style={{ color: "rgba(51, 187, 207, 1)", fontSize: "12px" }}
                  >
                    Change
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() =>
                    toast.success("Great! Your Payment is succesfully.")
                  }
                  style={{
                    background:
                      "linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
                  }}
                  className="flex justify-center text-black items-center text-center  font-semibold w-[194px] h-[31px] rounded-lg"
                >
                  Make Payment
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(113.08deg, #FFFFFF -242.51%, #14101D 85.56%)",
            }}
            className=" text-white p-5  shadow-xl rounded-lg w-[346px]"
          >
            <h4 className="text-2xl font-semibold"> Last Transaction</h4>
            <div className=" my-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={dribble} alt="" />
                  <div>
                    <p style={{ fontSize: "16px" }} className=" font-semibold">
                      Dribble Pro
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      15 days ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={arrowRed} alt="" />
                  <p className="text-sm">-$250,93</p>
                </div>
              </div>
              <div className="flex my-5 justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={netflix}
                    alt=""
                    className="bg-white w-10 h-10 rounded-full"
                  />
                  <div>
                    <p style={{ fontSize: "16px" }} className=" font-semibold">
                      Netflix
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      4 days ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={arrowRed} alt="" />
                  <p className="text-sm">-$250,93</p>
                </div>
              </div>
              <div className="flex my-5 justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={manu}
                    alt=""
                    className="bg-white w-10 h-10 rounded-full"
                  />
                  <div>
                    <p style={{ fontSize: "16px" }} className=" font-semibold">
                      Manulife Cash
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      4 days ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={arrowgreen} alt="" />
                  <p className="text-sm">-$250,93</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="max-w-xl mb-6">
            <h2 className="lg:text-5xl text-3xl font-bold leading-10 lg:leading-[77px] text-white">
              Easily control your <br /> billing & invoicing.
            </h2>
            <p
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
              className="text-sm font-normal my-5"
            >
              Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices
              ametodio Aeneas neque. Fusce ipsum orci <br /> rhoncus
              aliporttitor integer platea placerat.
            </p>
          </div>
          <div className="flex lg:justify-start gap-4  justify-center items-center">
            <div className="flex items-center">
              <img src={apple} alt="" className="w-[4.5rem] h-12" />
              <div className="text-white">
                <p className="font-normal text-xs">Download on the</p>
                <p className="font-medium text-sm">App Store</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={play} alt="" className="w-[4rem] h-12" />
              <div className="text-white">
                <p className="font-normal text-xs">Get it on</p>
                <p className="font-medium text-sm">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
