import React, {useState, useEffect} from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";



function Category() {
    const[categories, setCategories] = useState([]);
    const fetchCategory = async () => {
        const response = await fetch('http://localhost:5000/categories')
        const data = await response.json()
        setCategories(data)

    }

    useEffect( () => {
        fetchCategory();
    }, [])
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between">
        <div className="text-[30px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"><HiArrowSmLeft />
          </div>
          <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"><HiArrowSmRight />
          </div>
        </div>
      </div>
      <div className="flex">
        {
            categories.map((cat, index) => {
                return (
                    <div key={index} className="flex-grow">
                        <img src={"http://localhost:5000/images/"+cat.image} alt=""></img>
                    </div>
                )
        }
    )}
      </div>
    </div>
  );
}

export default Category;
