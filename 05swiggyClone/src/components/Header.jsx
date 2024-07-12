import React from "react";

const Header = () => {
  return (
    <header className="p-11 shadow-xl">
      <div className="max-w-[1200px] mx-auto border border-red-200">
        <div className="w-[100px]">
          <img src="images/logo.png" alt ="swiggy logo" className="w-full"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
