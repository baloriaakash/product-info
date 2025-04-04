import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { Link } from "react-router";
import { Card } from "./Card";
import { Instock } from "./Card";
export const Body = () => {
  useEffect(() => {
    let data = async () => {
      const response = await fetch("https://dummyjson.com/products");
      let readdata = await response.json();
      console.log(readdata);
      setRes(readdata.products);
      setNewRes(readdata.products);
    };
    data();
  }, []);
  const InStockorNot = Instock(Card);
  const [res, setRes] = useState([]);
  const [newRes, setNewRes] = useState([]);
  let [searchRes, setSearchRes] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("choose");
  const statusOnline = useOnlineStatus();
  if (statusOnline === false) {
    return <h1>You are offline please check you network</h1>;
  }

  return res.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="selector">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="choose"> choose</option>
          <option value="beauty">beauty </option>
          <option value="fragrances">fragrances </option>
          <option value="furniture">furniture </option>
          <option value="groceries">groceries</option>
        </select>
        <button
          onClick={() => {
            if (selectedCategory === "choose") {
              setRes(newRes);
            } else {
              let filteredRes = newRes.filter((element) => {
                return (
                  element.category.toLowerCase() ===
                  selectedCategory.toLowerCase()
                );
              });
              setRes(filteredRes);
            }
          }}
        >
          click
        </button>
        {/* let [searchRes, setSearchRes] = useState([]); */}
        {
          <input
            type="text"
            placeholder="search"
            value={searchRes}
            onChange={(e) => {
              setSearchRes(e.target.value);
            }}
          ></input>
        }
        {/* const [newRes, setNewRes] = useState([]); */}

        <button
          onClick={() => {
            let filterReslist = newRes.filter((element) => {
              return element.title
                .toLowerCase()
                .includes(searchRes.toLowerCase());
            });
            setRes(filterReslist);
          }}
        >
          search item
        </button>
      </div>
      <div className="items-div">
        {res.map((elem) => {
          return (
            <Link key={elem.id} to={`/products/${elem.id}`}>
              {/* {elem.availabilityStatus === "Low Stock" ? (
                <InStockorNot products={elem}></InStockorNot>
              ) : (
                <Card products={elem}></Card>
              )} */}

              {/* <Card key={elem.id} products={elem}></Card> */}
              <InStockorNot products={elem}></InStockorNot>
            </Link>
          );
        })}
      </div>
    </>
  );
};
