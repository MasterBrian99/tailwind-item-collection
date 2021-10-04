import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const MainScreen = () => {
  return (
    <div>
      <div className="h-screen main-backdrop">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default MainScreen;
