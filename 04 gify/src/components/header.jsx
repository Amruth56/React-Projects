import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical } from "react-icons/hi2";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  return (
    <nav>
      <div className="relative flex justify-between items-center mb-2">
        <Link to="/" className="relative flex gap-2">
          <img src="/logo.svg" className="w-8" alt="gify logo"></img>
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">GIFY</h1>
        </Link>
        <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">reactions</Link>
        <button onClick = {()=>setShowCategories(!showCategories)}>
            <HiEllipsisVertical size={35} className={`py-0.5 hover:gradient ${showCategories?'gradient':''} border-b-4 hidden lg:block`} ></HiEllipsisVertical>
        </button>
      </div>
    </nav>
  );
};

export default Header;
