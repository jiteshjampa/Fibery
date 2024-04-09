import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import fibery from "../images/fibery.png";
import clock from "../images/clock.png";
import unicorn from "../images/unicorn.png";
import "./calender.css";

import { DataContext } from "../DataContext";
const Meeting = ({ update, setUpdate }) => {
  const nextUpdate = () => {
    update = update + 1;
    setUpdate(update);
  };
  const time = [
    "09:00",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "01:00",
    "01:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
  ];
  const { setData, date, setTime, SelectTime, flag, setFlag, hover, setHover } =
    useContext(DataContext); // Initialize selectedDate to null

  const handleDateChange = (dat) => {
    setData(dat);
    setHover(hover + 1);
  };

  const handleTime = (t) => {
    setFlag((flag) => flag + 1);

    setTime(t);
  };
  console.log(flag);
  const getLastDatesClassName = ({ date }) => {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const lastFourDates = [
      daysInMonth - 3,
      daysInMonth - 2,
      daysInMonth - 1,
      daysInMonth,
    ];
    return lastFourDates.includes(date.getDate()) ? "last-four-dates" : null;
  };

  // Extracting day, month, and date from the selected date
  const dayOfWeek = date
    ? date.toLocaleDateString("en-US", { weekday: "long" })
    : "";
  const month = date ? date.toLocaleDateString("en-US", { month: "long" }) : "";
  const date1 = date ? date.getDate() : "";

  return (
    <div className="flex flex-col p-6 md:overflow-x-hidden md:pd-1">
      <div className="flex justify-evenly mt-8 h-72 mb-6 md:flex-col md:items-center md:h-auto md:w-full">
        <div className="flex flex-col w-2/5 md:w-full md:items-center">
          <div className="flex justify-evenly">
            <img src={fibery} alt="fibery icon" />
          </div>
          <div className="w-full h-px bg-slate-500 min-h-px mb-4"> </div>
          <h1 className="text-3xl font-poppins flex justify-start font-semibold mb-4 md:text-center ">
            Fibery Demo
          </h1>
          <div className="flex mb-4">
            <img src={clock} alt="clock" className="w-6 mr-3" />
            <p className="font-poppins">45 min</p>
          </div>
          <p className="flex md:justify-center md:items-center md:text-center">
            Book a meeting with our fibery team. Talk to a real person about how
            to get your processes set up with us or not
          </p>
        </div>
        <div className="w-px h-full bg-slate-500"></div>
        <div className="flex justify-start h-72 md:w-full md:h-full md:justify-center md:items-center mb-8">
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="last-four-dates"
            tileClassName={getLastDatesClassName}
          />
        </div>
        <div className={`${hover == 0 ? "hidden" : "flex"} flex-col flex-end`}>
          <h1 className="mb-6 font-poppins font-semibold md:text-center">
            {dayOfWeek} {month} {date1}
          </h1>
          <div className="flex-col justify-evenly overflow-y-scroll ">
            {time.map((t) => (
              <div className="flex-col justify-evenly" key={t}>
                <button
                  onClick={(e) => {
                    handleTime(t);
                  }}
                  value={t}
                  className="text-blue-600 px-10 py-4 border-2 border-blue-600 m-6  hover:bg-blue-700 hover:text-white
                "
                >
                  {t}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`justify-end mr-44 ${
          flag === 0 ? "hidden" : "flex"
        } md:flex-col md:justify-evenly md:items-center md:mr-0`}
      >
        <button className="flex justify-end px-6 py-3 text-white bg-slate-500 mr-3 md:justify-center md:mb-3">
          {SelectTime}
        </button>
        <button
          onClick={nextUpdate}
          className="px-6 py-3 text-white bg-blue-600 flex justify-start md:justify-center"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Meeting;
