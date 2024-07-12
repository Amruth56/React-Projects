import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";


const Header = () => {
    // const [toggle, setToggle] useState(false)
  return (
    <>
    <div className="black-overlay w-full h-full fixed">
    <header className="p-[15px] shadow-xl text-[#686b78]">
      <div className="max-w-[1200px] mx-auto border border-red-200 flex items-center">
        <div className="w-[100px]">
          <img src="images/logo.png" alt="swiggy logo" className="w-full"></img>
        </div>
        <div className="">
          {" "}
          <span className="font-bold border-b-[3px] border-b-black">
            Amruth Mandappa
          </span>
          , Karnataka, India <RxCaretDown fontSize={25} className="  inline  text-[#fc8019] cursor-pointer "/>

        </div>
      </div>
    </header>
    </div>
    </>
  );
};

export default Header;
