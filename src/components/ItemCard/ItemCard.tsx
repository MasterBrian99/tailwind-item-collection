import React from "react";
import { Link } from "react-router-dom";

interface Prop {
  itemName: string;
  username: string;
  path: string;
  image: any;
}

const ItemCard = ({ itemName, username, path, image }: Prop) => {
  return (
    <Link to={path}>
      <div className="p-5 cursor-pointer">
        <div className="max-w-sm overflow-hidden shadow-lg rounded-xl card-item w-96">
          <img className="w-full h-40" src={image} alt="Mountain" />
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold">{itemName}</h3>
            <h3>{username}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
