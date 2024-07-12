import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    console.log("hiii");
    setToggle(true);
  };
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[500px] h-full bg-white absolute duration-[600ms]"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto border border-red-200 flex items-center">
          <div className="w-[100px]">
            <img
              src="images/logo.png"
              alt="swiggy logo"
              className="w-full"
            ></img>
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-b-black">
              Amruth Mandappa
            </span>
            , Karnataka, India
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="  inline  text-[#fc8019] cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
