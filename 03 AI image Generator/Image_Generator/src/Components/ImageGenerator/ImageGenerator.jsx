import React, { useState, useRef } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/minions.png";

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputref = useRef(null);

  const imageGenerator = async () => {
    if (inputref.current.value === "") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer sk-proj-SM094Ox010Itilr84XVBT3BlbkFJTKGwaeElTDqXmdAwGnc7",
          "User-Agent": "Chrome",
        },
      }
    );
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI image <span>GENERATOR</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={image_url === "/" ? default_image : image_url} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text "
          ref={inputref}
          className="search-input"
          placeholder="Search"
        />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
