import { useState, useEffect } from "react";
import { useParams } from "react-router";
import React from "react";

export const Productinfo = () => {
  const { resid } = useParams();
  console.log(resid);
  const [prodData, setProdData] = useState("");
  useEffect(() => {
    fetchProductinfo();
  }, []);
  let fetchProductinfo = async () => {
    const data = await fetch(`https://dummyjson.com/products/${resid}`);
    const response = await data.json();
    console.log(response);
    setProdData(response);
  };
  return (
    <>
      <div className="productdiv">
        <img src={prodData.images}></img>
        <h2>Title-{prodData.title}</h2>
        <p>{prodData.brand}</p>
        <p>Description- {prodData.description}</p>
        <p>Price-${prodData.price}</p>
        <p>Rating-{prodData.rating}</p>
        <p>Return Policy-{prodData.returnPolicy}</p>
      </div>
    </>
  );
};
