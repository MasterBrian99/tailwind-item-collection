import React from "react";
import GithubIcon from "../../images/icons8-github.svg";
import TwitterIcon from "../../images/icons8-twitter.svg";
const UserCard = () => {
  return (
    <div className="w-full h-24 mt-20 ">
      <h1 className="text-2xl font-bold">Yellow Button</h1>
      <h1>By Name</h1>
      <div className="flex justify-between w-16">
        <a href="/">
          <img src={GithubIcon} alt="" />
        </a>
        <a href="/">
          <img src={TwitterIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default UserCard;
