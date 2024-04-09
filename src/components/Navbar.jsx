import React, { useState } from "react";
import logo from "../images/fibery_logo1.png";
import { DataContext } from "../DataContext";
import { useContext } from "react";
import nav from "../images/menu.png";
const Navbar = () => {
  const { setdisplayComponent } = useContext(DataContext);
  const [toggle, setToggle] = useState(0);
  const navbutton = () => {
    if (toggle === 1) {
      setToggle(0);
    }
    if (toggle === 0) {
      setToggle(1);
    }
  };
  return (
    <div
      className={`${toggle === 1 ? "md:h-screen" : "md:h-full"}-z-50 md:w-full`}
    >
      <div>
        <button
          className="
          top-0 right-0 hidden md:block absolute "
          onClick={navbutton}
        >
          <img src={nav} alt="nav_button" className="w-6" />
        </button>

        <img
          src={logo}
          alt="logo"
          className=" hidden md:relative top-0 left-0 "
        />

        <ul
          className={`${
            toggle === 0 ? "md:hidden" : "md:flex"
          } flex justify-evenly  mt-4 items-center font-bold font-poppins md:flex-col md:items-center md:leading-10`}
        >
          <li>
            <img src={logo} alt="logo" className="  md:hidden" />
          </li>
          <li>
            <select name="Solutions" className=" outline-none">
              <option value="Product Management">Solutions</option>
              <option value="Software Development">Software</option>
            </select>
          </li>

          <li>
            <select name="Product" id="">
              <option>Product</option>
            </select>
          </li>
          <li>Resources</li>
          <li>Pricing</li>
          <li className=" font-normal md:mt-8 md:mb-10">Log in</li>
          <li>
            <button className="px-6 py-3 border-2 border-black mb-3">
              Get a demo
            </button>
          </li>
          <li>
            <button
              className="px-6 py-3 bg-black text-white font-bold"
              onClick={() => {
                setdisplayComponent(1);
              }}
            >
              Try for free
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
