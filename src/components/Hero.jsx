import React from "react";
import hands from "../images/hands.png";
import guitar from "../images/guitar.png";
const Hero = () => {
  return (
    <div>
      <div className="flex-col mt-10 ml-10 mb-32 md:ml-0">
        <h1 className="flex justify-start font-bold font-fira  text-6xl md:text-5xl md:flex md:justify-center md:items-center md:mb-3">
          Pricing
        </h1>
        <p className="  text-xl md:text-center">
          Start your 14-day free trial. No CC required.
        </p>
      </div>
      <div>
        <div className="flex justify-evenly md:flex-col md:items-center">
          <div className="w-1/2 flex ml-28 px-10 py-6 hover:bg-green-200 md:w-5/6 md:ml-0 md:flex-col md:text-center md:justify-center md:items-center">
            <div className="w-1/2 flex flex-col  md:w-full">
              <div className="flex items-center">
                <h1 className="font-semibold font-poppins text-2xl mr-3">
                  Standard
                </h1>{" "}
                <img src={hands} alt="hands" className=" w-12 " />
              </div>
              <div className="flex items-center mb-6">
                <span className="font-semibold font-poppins text-2xl mr-3">
                  $10
                </span>
                <p className="w-1/2 md:w-full">
                  per user, per month billed annually
                </p>
              </div>
              <button className="font-semibold font-poppins  px-6 py-3 w-11/12 bg-black text-white md:w-full">
                Start your free trail
              </button>
            </div>
            <p className="w-1/3 md:w-full md:mt-8">
              Version History: 90 days Read-only users: unlimited
            </p>
          </div>
          <div className="w-1/2 flex ml-28 px-10 py-6 hover:bg-red-200 mr-3 md:w-5/6 md:ml-0 md:flex-col md:text-center md:justify-center md:items-center ">
            <div className="w-1/2 flex flex-col md:w-full">
              <div className="flex items-center">
                <h1 className="font-semibold font-poppins text-2xl mr-3">
                  Pro
                </h1>
                <img src={guitar} alt="hands" className=" w-12" />
              </div>
              <div className="flex items-center mb-6">
                <span className="font-semibold font-poppins text-2xl mr-3">
                  $17
                </span>
                <p className="w-1/2 md:w-full ">
                  per user, per month billed annually
                </p>
              </div>
              <button className="font-semibold font-poppins  px-6 py-3 w-11/12 bg-black text-white md:w-full">
                Start your free trail
              </button>
            </div>
            <p className="w-1/3 md:w-full md:mt-8">
              Version history: unlimited, Read-only users: unlimited, Group
              permissions, SAML + SSO, No Fibery branding on forms, Extra-caring
              support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
