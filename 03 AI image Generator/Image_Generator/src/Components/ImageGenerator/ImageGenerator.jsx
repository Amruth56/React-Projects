import React, { useState, useRef } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/minions.png";

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false)
  let inputref = useRef(null);

  const imageGenerator = async () => {
    if (inputref.current.value === "") {
      return 0;
    }
    setLoading(true)
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
          Authorization:
            // "Bearer ---OpenAi API---", here generate your own API ussing the help of OpenAI API.
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          // to get text written in the input field
          prompt: `${inputref.current.value}`,
          // to get 1 image
          n: 1,
          // size of the image
          size: "512x512",
        }),
      }
    );

    // to pass the response variable in JSON
    let data = await response.json();
    let data_array = data.data;
    setImage_url(data_array[0].url);
    setLoading(false)
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
        <div className="loading">
          <div className={loading? "loading-bar-full": "loading-bar"}></div>
          <div className={loading? "loading-text" : "display-none"}>Loading...</div>
        </div>
      </div>
      <div className="search-box">
        <input
          type="text "
          ref={inputref}
          className="search-input"
          placeholder="Search"
        />
        <div
          className="generate-btn"
          onClick={() => {
            imageGenerator();
          }}
        >
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
