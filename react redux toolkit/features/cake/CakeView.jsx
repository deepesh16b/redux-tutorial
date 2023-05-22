// import React from "react";
import { useSelector } from "react-redux";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });
  return (
    <div>
      <h2>Number of Cakes - `${numOfCakes}</h2>
      <button>Order Cake</button>
      <button>restock Cake</button>
    </div>
  );
};
