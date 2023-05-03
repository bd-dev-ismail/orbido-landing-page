import React from "react";
import dolfin from "../../assets/Dolfi.png";
import book from "../../assets/book.png";
const FreeResource = () => {
  return (
    <div className="lg:flex mx-auto container">
      <div className="lg:w-[30%] ">
        <h3 className="text-5xl font-bold">
          Your Today’s{" "}
          <span style={{ color: "rgba(241, 156, 56, 1)" }}>Free</span> <br />{" "}
          Resources
        </h3>
        <p
          style={{ color: "#6C7687" }}
          className="text-sm font-normal lg:w-[410px] mt-[1rem]"
        >
          Various news and reports about Edvive have been published in various
          media outlets including daily newspapers and television channels.
        </p>
        <div className="my-5">
          <img src={dolfin} alt="" className="lg:w-[336px] lg:h-[313px]" />
        </div>
      </div>
      <div className="lg:w-[70%]">
        <div className="flex justify-evenly">
          <div className="lg:w-[360px] p-2">
            <h5
              style={{ color: "rgba(22, 32, 49, 1)" }}
              className="font-bold text-2xl"
            >
              Already 1k+ People Collected Our Free Resources
            </h5>
            {/* Avatara  */}
            <div className="mt-[66px]">
              <div className="avatar-group -space-x-6 ">
                <div className="avatar">
                  <div className="w-12">
                    <img
                      alt=""
                      src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      alt=""
                      src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      alt=""
                      src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                    />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[340px] h-[190px] rounded-md p-3 text-white"
            style={{ background: "#162031" }}
          >
            <h4 className="font-bold text-xl">Todays Learning</h4>
            <h6 className=" text-center font-bold">
              When to Use{" "}
              <span style={{ color: "rgba(241, 156, 56, 1)" }}>
                {" "}
                “Ought to”
              </span>{" "}
              instead of{" "}
              <span style={{ color: "rgba(241, 156, 56, 1)" }}>“Must”</span>
            </h6>
            <p className="text-sm">
              When talking about one's responsibility/duties/obligations! Say
              "Ought to" instead of saying "Must"
            </p>
          </div>
        </div>
        <div className="flex justify-evenly mt-[54px]">
          <div>
            <img src={book} alt="" />
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              Recharge Your Grammar <br /> Within 8 Hours
            </h3>
            <p
              style={{ color: "#6C7687" }}
              className="text-sm font-normal lg:w-[410px] mt-[1rem]"
            >
              This is the most guided vocabulary practice app in the world. Be
              the master of 15 vocabularies everyday. Be the vocabulary master
              in just 60 days!
            </p>
            <div className="my-10">
              <p className="font-bold text-black">
                Enter your email to get the download link
              </p>
              <div className="flex justify-between gap-5 mt-1">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  style={{ boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)" }}
                  className="btn btn-primary bg-[#3266E0]"
                >
                  Free Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeResource;
