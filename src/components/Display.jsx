import React from "react";
import Meeting from "./Meeting";
import Details from "./Details";
import Form from "./Form";
import { DataContext } from "../DataContext";
import { useContext } from "react";
import close from "../images/cross.png";
const Display = ({ update, setUpdate }) => {
  const { displayComponent, setdisplayComponent } = useContext(DataContext);
  const display = () => {
    switch (update) {
      case 0:
        return <Meeting update={update} setUpdate={setUpdate} />;
      case 1:
        return <Details update={update} setUpdate={setUpdate} />;
      case 2:
        return <Form />;
      default:
        return null;
    }
  };
  return (
    <div
      className={`  w-full ${
        displayComponent === 1 ? "block" : "hidden"
      } h-full absolute  top-0  left-0 bg-black bg-opacity-50 px-20 md:px-0 tab:bg-transparent `}
    >
      <div
        className={`flex justify-center relative top-24 items-center bg-white md:top-0`}
      >
        {display()}
      </div>
      <button
        className=" absolute top-10  right-24 md:top-4 md:right-4"
        onClick={() => {
          setdisplayComponent(displayComponent - 1);
          setUpdate(0);
        }}
      >
        <img src={close} alt="delete_button" className="w-6 h-6 " />{" "}
      </button>
    </div>
  );
};

export default Display;
