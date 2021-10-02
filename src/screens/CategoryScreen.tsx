import React from "react";
import Header from "../components/Header/Header";
import ItemCard from "../components/ItemCard/ItemCard";
import { cards } from "../data/cards";

const CategoryScreen = () => {
  return (
    <div>
      <div className="max-h-full min-h-screen main-backdrop">
        <Header />
        <div className="container flex flex-wrap justify-center mx-auto">
          {cards.map((el, i) => (
            <ItemCard
              key={i}
              image={el.image}
              itemName={el.itemName}
              username={el.username}
              path={el.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryScreen;
