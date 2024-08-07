import "./App.css";
import React, { useState, useEffect } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your Passions" },
    { text1: "Give Into", text2: "Your Passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect( ()=> {
    setInterval( ()=> {
      setHeroCount((prev)=> {return prev === 2? 0: prev+1})
    }, 3000)
  }, [])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}></Background>
      <Navbar></Navbar>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      ></Hero>
    </div>
  );
}

export default App;
