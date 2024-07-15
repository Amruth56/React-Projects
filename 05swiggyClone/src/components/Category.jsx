import React, {useState} from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";



function Category() {
    const[categories, setCategories] = useState([]);
    const fetchCategory = async () => {

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
    </div>
  );
}

export default Category;
