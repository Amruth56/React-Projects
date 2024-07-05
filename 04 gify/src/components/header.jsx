import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../context/gif-context";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const { gf, filter, setFilter, favorites } = GifState();

  const fetchGifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  };
  useEffect(() => {
    fetchGifCategories();
  }, []);
  return (
    <nav>
      <div className="relative flex justify-between items-center mb-2">
        <Link to="/" className="relative flex gap-2">
          <img src="/logo.svg" className="w-8" alt="gify logo"></img>
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIFY
          </h1>
        </Link>
        <div className="font-bold text-md flex gap-2 items-center">
          {categories?.slice(0, 5)?.map((category) => {
            return (
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
              >
                {category.name}
              </Link>
            );
          })}
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 hidden lg:block`}
            ></HiEllipsisVertical>
          </button>
          {favorites.length > 0 && (
            <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
              <Link to="/favorites">Favorite GIFs</Link>
            </div>
          )}
          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            ></HiMiniBars3BottomRight>
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pb-9 w-full gradient z-20">
            <span className ="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5"></hr>
            <div>
              {categories?.map((category) => {
                return <Link className="font-bold"
                key={category.name}
                to={`/${category.name_encoded}`}>{category.name} </Link>;
              })}
            </div>
          </div>
        )}
      </div>
      {/* search */}
    </nav>
  );
};

export default Header;
