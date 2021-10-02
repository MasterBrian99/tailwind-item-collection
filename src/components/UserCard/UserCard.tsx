import React from "react";
import GithubIcon from "../../images/icons8-github.svg";
import TwitterIcon from "../../images/icons8-twitter.svg";

interface Prop {
  username?: string;
  cardName?: string;
  githubUserName?: string;
  twitterUserName?: string;
}

const UserCard = ({
  username,
  cardName,
  githubUserName,
  twitterUserName,
}: Prop) => {
  return (
    <div className="w-full h-24 mt-20 ">
      <h1 className="text-2xl font-bold">{cardName}</h1>
      <h1>By {username}</h1>
      <div className="flex justify-between w-16">
        <a href={`https://github.com/${githubUserName}`}>
          <img src={GithubIcon} alt="" />
        </a>
        <a href={`https://twitter.com/${twitterUserName}`}>
          <img src={TwitterIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default UserCard;
