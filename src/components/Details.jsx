import React, { useContext, useState } from "react";
import fibery from "../images/fibery.png";
import clock from "../images/clock.png";
import unicorn from "../images/unicorn.png";
import calender from "../images/calendar.png";
import carrot from "../images/carrot.png";
import twopeople from "../images/celebrating.png";
import group from "../images/group.png";
import leadership from "../images/leadership.png";
import owl from "../images/wisdom.png";
import smile from "../images/smile.png";
import paint from "../images/paint-palette.png";
import laptop from "../images/web-traffic.png";
import sales from "../images/acquisition.png";
import bomb from "../images/bomb.png";
import diamond from "../images/diamond.png";
import education from "../images/education.png";
import question from "../images/question-mark.png";
import { DataContext } from "../DataContext";
import arrow from "../images/arrow.png";
const Details = ({ update, setUpdate }) => {
  const { date, setName, name, email, setEmail, SelectTime } =
    useContext(DataContext);
  const [dflag, setDFlag] = useState(0);
  const d = SelectTime.split(":");
  const prevUpdate = () => {
    setUpdate(update - 1);
  };

  return (
    <div className="flex justify-between p-8 overflow-y-scroll  h-[520px] md:flex-col md:h-auto">
      {
        <button
          onClick={prevUpdate}
          className=" flex justify-end  relative  top-20 left-8 md:top-4 md:left-4"
        >
          <div className="w-6">
            <img src={arrow} alt="back-button" className="w-full " />
          </div>
        </button>
      }

      <div className=" flex flex-col w-1/2 md:w-full">
        <div className="flex justify-evenly">
          <img src={fibery} alt="fibery icon" />
        </div>

        <h1 className="text-3xl font-poppins flex mt-8 justify-start font-semibold mb-4">
          Fibery Demo
        </h1>
        <div className="flex mb-4">
          <img src={clock} alt="clock" className="w-6 mr-3" />
          <p className="font-poppins">45 min</p>
        </div>
        <div className="flex mb-4">
          <div className="w-6 mr-3">
            <img src={calender} alt="clock" className="w-full mr-6" />
          </div>
          <p className="font-poppins">
            {SelectTime + "-" + `${d[0] + ":45 "}`}
            {date.toString()}
          </p>
        </div>
        <p className="flex-col">
          Book a meeting with our fibery team.Talk to a real person about how to
          get your processes set up with us
          <img src={unicorn} alt="unicorn" className="w-4 h-4 inline" /> or not
        </p>
      </div>
      <div className="w-px h-full bg-slate-500 min-w-px min-h-full md:hidden">
        {/* Add some content here if needed */}
      </div>
      <div>
        <form className="mt-8">
          <h1 className="font-bold font-poppins text-xl mb-2 ">
            Enter Details
          </h1>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="font-semibold font-poppins mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className=" border-2 border-slate-400 w-4/5 px-3 py-1 rounded-lg"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="font-semibold font-poppins mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className=" border-2 border-slate-400 w-4/5 px-3 py-1 rounded-lg"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <button
            disabled
            className="px-4 py-2 border-2 border-sky-600 text-sky-600 rounded-full mb-4"
          >
            Add Guest
          </button>
          <p className="font-bold font-poppins ">I want fibery to work for </p>
          <div className="flex mb-2 items-center">
            <input type="checkbox" className=" mr-2" />
            <img src={carrot} alt="" className=" w-4 mr-2" /> <p>Myself</p>
          </div>
          <div className="flex mb-2 mr-2">
            <input type="checkbox" className="mr-2" />
            <img src={twopeople} alt="" className=" w-4 mr-2" />
            <p> {"<"}10 people</p>
          </div>
          <div className="flex mb-2">
            <input type="checkbox" className="mr-2" />
            <img src={unicorn} alt="unicorn" className=" w-6 mr-2" />
            <p> 10-50 people</p>
          </div>
          <div className="flex mb-6">
            <input type="checkbox" className="mr-2" />
            <img src={group} alt="unicorn" className=" w-4 mr-2" />
            <p> 50+ people</p>
          </div>
          <h1 className="font-bold font-poppins ">You are More About</h1>
          <div className="flex mb-2 items-center">
            <input type="checkbox" className="mr-2" />
            <img src={leadership} alt="unicorn" className=" w-4 mr-2" />
            <p>Leadership</p>
          </div>
          <div className="flex mb-2 items-center">
            <input type="checkbox" className="mr-2" />
            <img src={owl} alt="unicorn" className=" w-4 mr-2" />
            <p>Consulting</p>
          </div>
          <div className="flex mb-2 items-center">
            <input type="checkbox" className="mr-2" />
            <img src={smile} alt="unicorn" className=" w-4 mr-2" />
            <p>Product Management</p>
          </div>
          <div className="flex mb-2 items-center">
            <input type="checkbox" className="mr-2" />
            <img src={paint} alt="unicorn" className=" w-4 mr-2" />
            <p>Design</p>
          </div>
          <div className="flex mb-2 items-center">
            <input type="checkbox" className="mr-2" />
            <img src={laptop} alt="unicorn" className=" w-4 mr-2" />
            <p> Engineering</p>
          </div>
          <div className="flex mb-2 items-center">
            <input type="checkbox" className="mr-2" />
            <img src={sales} alt="unicorn" className=" w-4 mr-2" />
            <p> Sales</p>
          </div>
          <div className="flex mb-2 items-center">
            <input type="checkbox" className="mr-2" />
            <img src={bomb} alt="unicorn" className=" w-4 mr-2" />
            <p> Marketing</p>
          </div>
          <div className="flex mb-2">
            <input type="checkbox" className="mr-2" />
            <img src={diamond} alt="unicorn" className=" w-4 mr-2" />
            <p>Human Resources</p>
          </div>
          <div className="flex mb-2">
            <input type="checkbox" className="mr-2" />
            <img src={education} alt="unicorn" className=" w-4 mr-2" />
            <p>Education</p>
          </div>
          <div className="flex mb-2">
            <input type="checkbox" className="mr-2" />
            <img src={question} alt="unicorn" className=" w-4 mr-2" />
            <p>Something else</p>
          </div>
          <div>
            <h1 className="font-bold font-poppins mb-4">
              Please, share anything that will help prepare for our meeting
            </h1>
            <input
              type="text"
              className="  w-11/12 border-2 border-slate-500 h-20 rounded-lg mb-4"
            />
          </div>
          <div className="mb-4">
            <h1 className="font-bold font-poppins mb-4">
              Please, share with ous the name of the Fibery workspace (if any)
            </h1>
            <input
              type="text"
              className="  w-11/12 border-2 border-slate-500 h-20 rounded-lg mb-4"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-poppins text-red-600 ${
                dflag === 1 ? "flex" : "hidden"
              } justify-center items-center mb-8 `}
            >
              Please Enter details
            </span>
            <button
              type="submit"
              className="px-6 py-3 font-poppins font-semibold bg-blue-700 text-white rounded-full mb-4"
              onClick={(e) => {
                e.preventDefault();
                if (name != "" && email != "") {
                  setUpdate(update + 1);
                } else {
                  setDFlag(dflag + 1);
                }
              }}
            >
              Schedule Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
