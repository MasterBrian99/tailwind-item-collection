import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="container flex justify-between py-4 mx-auto">
        <h1 className="text-2xl font-bold">Tailwind Components</h1>

        <div>
          <ul className="flex ">
            <Link to={"/"}>
              <li className="mr-2">Home</li>
            </Link>
            <Link to={"/category"}>
              <li className="mr-2">Category</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
