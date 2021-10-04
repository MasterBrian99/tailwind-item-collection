import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className=" w-11/12 h-10v flex justify-between items-center mx-auto">
        <h1 className="text-2xl font-bold">Tailwind Components</h1>
        <div>
          <ul className="flex">
            <Link to={"/"}>
              <li className="mx-4">Home</li>
            </Link>
            <Link to={"/category"}>
              <li className="ml-4">Category</li>
            </Link>
          </ul>
        </div>
      </div>
  );
};

export default Header;
