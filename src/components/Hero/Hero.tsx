import React from "react";
import { Link } from "react-router-dom";
import HeroIcon from "../../images/background-hero.svg";

const Hero = () => {
  return (
    <div className=" flex mx-auto w-90w md:w-11/12 flex-col md:flex-row h-90v  ">
      <div className="flex flex-col items-center justify-center my-10 md:w-1/2">
        <h2 className="px-8 font-bold text-center text-4v tracking-wide mx-10 ">
          Free Tailwind Components with source code
        </h2>
        <h3 className="text-3v md:text-2v m-8">Free and Open Source</h3>
        <div className="flex">
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
      <div className='flex w-90w md:w-1/2 mx-auto'>
        <img src={HeroIcon} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
