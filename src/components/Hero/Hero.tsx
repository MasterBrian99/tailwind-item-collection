import React from "react";
import HeroIcon from "../../images/background-hero.svg";
const Hero = () => {
  return (
    <div className="container mx-auto flex justify-between  py-44">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-7xl text-center px-8 font-bold">
          Beautiful, fast and modern React UI library.
        </h2>
        <h3>Open source is changing the world – one contribution at a time.</h3>
        <div className="flex ">
          <a href="/" className="bg-blue-600 py-2 px-6 shadow-lg rounded-lg">
            Hello
          </a>
          <a href="/" className="bg-blue-600 py-2 px-6 shadow-lg rounded-lg">
            Hello
          </a>
        </div>
      </div>
      <img src={HeroIcon} alt="" className="w-2/5" />
    </div>
  );
};

export default Hero;
