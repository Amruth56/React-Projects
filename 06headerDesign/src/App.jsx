import "./App.css";
import React, { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your Passions" },
    { text1: "Give Into", text2: "Your Passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return <div>
    <Background playStatus={playStatus} heroCount={heroCount}></Background>
    <Navbar></Navbar>

  </div>;
}

export default App;
