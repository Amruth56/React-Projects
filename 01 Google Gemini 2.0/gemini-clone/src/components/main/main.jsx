import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can i assist you ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              eum?
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              eum?
            </p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              eu m?
            </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              eum?
            </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
        </div> 
        <p className="bottom-info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, delectus rerum dignissimos et harum amet atque tenetur quos impedit unde.
        </p>
      </div>
    </div>
  );
};

export default Main;
