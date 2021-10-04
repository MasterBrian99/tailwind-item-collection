import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const MainScreen = () => {
  return (
    <div>
      <div className="circle-c circle-c-1"></div>
      <div className="circle-c circle-c-2"></div>
      <div className="h-100v main-backdrop">

        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default MainScreen;
