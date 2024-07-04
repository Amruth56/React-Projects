import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  return (
    <nav>
      <div>
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" className="w-8" alt="gify logo"></img>
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">GIFY</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
