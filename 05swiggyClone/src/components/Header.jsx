import React from "react";
import { RxCaretDown } from "react-icons/rx";


const Header = () => {
  return (
    <header className="p-[15px] shadow-xl">
      <div className="max-w-[1200px] mx-auto border border-red-200 flex items-center">
        <div className="w-[100px]">
          <img src="images/logo.png" alt="swiggy logo" className="w-full"></img>
        </div>
        <div className="">
          {" "}
          <span className="font-bold border-b-[3px] border-b-black">
            Amruth Mandappa
          </span>
          , Karnataka, India <RxCaretDown  className="inline text-[0.9rem] text-[#fc8019] "/>

        </div>
      </div>
    </header>
  );
};

export default Header;
