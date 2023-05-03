import React from "react";

const StickeyBar = () => {
  return (
    <div className="bg-[#3266E0] lg:h-[90px]  text-white w-full fixed top-[20%] z-50">
      <div className="lg:px-10 px-1 py-3 lg:pt-5">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-sm lg:text-xl">
            Become The Vocabulary Master | Be The Vocabulary Guru
          </h3>
          <div className="flex lg:gap-10 items-center">
            <h3 className="font-bold text-xl">$30</h3>
            <button
              style={{ boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)" }}
              className="btn btn-primary bg-[#F19C38]"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickeyBar;
