import React from "react";
import ItemCard from "../components/ItemCard/ItemCard";

const CategoryScreen = () => {
  return (
    <div>
      <div className="circle-c circle-c-1"></div>
      <div className="circle-c circle-c-2"></div>
      <div className="max-h-full min-h-screen  main-backdrop">
        <div className="container flex flex-wrap justify-center mx-auto">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default CategoryScreen;
