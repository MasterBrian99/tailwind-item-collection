import React from "react";
import { Link } from "react-router-dom";
import HeroIcon from "../../images/background-hero.svg";

const Hero = () => {
  return (
    <div className="container flex justify-between mx-auto py-44">
      <div className="flex flex-col items-center justify-center">
        <h2 className="px-8 font-bold text-center text-7xl">
          Free Tailwind Components with source code
        </h2>
        <h3>Free and Open Source</h3>
        <div className="flex mt-4 ">
          <Link
            to={"/category"}
            className="px-6 py-2 bg-blue-600 rounded-lg shadow-lg"
          >
            Category
          </Link>
          <a
            href="/"
            className="px-6 py-2 ml-2 bg-gray-500 rounded-lg shadow-lg"
          >
            Github
          </a>
        </div>
      </div>
      <img src={HeroIcon} alt="" className="w-2/5" />
    </div>
  );
};

export default Hero;
