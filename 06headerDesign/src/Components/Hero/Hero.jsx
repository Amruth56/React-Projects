import React from "react";
import arrow_btn from "../../assets/arrow_btn.png";
import play_btn from "../../assets/play_btn.png";
import pause_btn from "../../assets/pause_btn.png";

import "./Hero.css";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  swetPlayStatus,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the feature</p>
        <img src={arrow_btn}></img>
      </div>
      <div className="hero-dor-play">
        <ul className="hero-dost">
          <li className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
