import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    console.log("hiii");
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [{
    icon:<IoMdSearch />,
    name:'Search'
  },{
    icon:<CiDiscount1 />,
    name:'Offers'
  },{
    icon:<IoMdHelpCircleOutline />,
    name:'Help'
  },{
    icon:<IoPersonOutline />,
    name:'SignIn'
  },{
    icon:<IoCartOutline />,
    name:'Cart'
  },
]
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] h-full bg-white absolute duration-[400ms]"
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
          <nav className="flex list-none gap-4 ml-auto font-semibold text-[18px] gap-10 ">
           {
            links.map(
              (link, index) => {
                return (
                  <li className = 'flex items-center gap-2' key ={index}>
                    {link.icon}
                    {link.name}
                  </li>
                )
              }
            )
           }
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
