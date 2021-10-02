import React from "react";
import Ra from "../../images/randomIMage.jpeg";
const ItemCard = () => {
  return (
    <div className="p-5 cursor-pointer">
      <div className="max-w-sm overflow-hidden shadow-lg rounded-xl card-item w-96">
        <img className="w-full h-40" src={Ra} alt="Mountain" />
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold">Item Name</h3>
          <h3>Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
