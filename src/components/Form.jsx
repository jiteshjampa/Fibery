import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import profile from "../images/profile.png";
import calender from "../images/calendar.png";
import camera from "../images/online-meeting.png";
import microsoft from "../images/microsoft.png";
import google from "../images/search.png";
const Form = () => {
  const { name, SelectTime, date } = useContext(DataContext);
  const d = SelectTime.split(":");
  return (
    <div className="w-9/12 flex justify-center items-center p-6 md:w-screen">
      <div>
        <h1 className="flex justify-center items-center font-poppins text-2xl font-semibold mt-12">
          You are scheduled
        </h1>
        <p className="text-center mb-7">
          A calender invitation has been sent to your email address
        </p>
        <div className="border-2 border-slate-500 p-4 rounded-lg mb-4 md:m-3 md:mb-7">
          <h1 className="font-poppins font-bold mb-3">Fibery Demo</h1>
          <div className="flex mb-3">
            <div className="w-6 mr-3 ">
              <img
                src={profile}
                alt="person"
                className=" sm:w-4/5  object-cover "
              />
            </div>

            <span className="font-poppins text-slate-500 font-semibold">
              {name}
            </span>
          </div>
          <div className="flex mb-3">
            <div className="w-8 mr-3 ">
              <img src={calender} alt="calender" className="w-full" />
            </div>
            <span className="font-poppins text-slate-500 font-semibold">
              {SelectTime + "-" + `${d[0] + ":45"}`} {date.toString()}
            </span>
          </div>
          <div className="mb-3 flex">
            <div className="w-8 mr-3 ">
              <img src={camera} alt="camera" className="w-full" />
            </div>
            <span className="font-poppins text-slate-500 font-semibold">
              web conferencing details to follow
            </span>
          </div>
        </div>
        <h1 className="font-poppins font-semibold mb-2 md:text-center">
          Schedule your own meetings with Calendly for free
        </h1>
        <p className="mb-4 md:text-center">
          Eliminate the back-and-forth emails for finding time
        </p>
        <div className="flex mb-6 md:flex-col md:justify-between md:items-center ">
          <button className=" px-6 py-3 rounded-full flex items-center justify-center border-2 border-black hover:bg-black hover:text-white mr-3 md:mr-0   md:mb-4   ">
            <div className="w-5 mr-2">
              <img src={google} alt="google" className="w-full " />
            </div>
            Sign up with Google
          </button>
          <button className=" px-6 py-3 rounded-full flex items-center justify-center border-2 border-black hover:bg-black hover:text-white mr-3 md:mr-0 ">
            <div className="w-5 mr-2">
              <img src={microsoft} alt="microsoft" className="w-full " />
            </div>
            Sign up with Microsoft
          </button>
        </div>
        <div className="  ml-40 md:ml-0 md:text-center">
          <span className="text-sky-600 text-center md:text-center">
            Sign up with work email
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
