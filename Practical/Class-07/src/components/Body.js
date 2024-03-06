import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurentCard";
import { restaurantList } from "../ConfigFile";
import { AboutMe } from "./AboutMe";
import Shimmer from "./Shimmer";

function getFilterData(searchInput, setDisplayList, restaurant) {
  let data =
    searchInput.length != null
      ? restaurant.filter((item) =>
          item.info.name.toLowerCase().includes(searchInput.toString().trim())
        )
      : restaurant;
  console.log("see ", data);
  setDisplayList(data);
}

async function callAPI(setRestaurants) {
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.95035448179743&lng=77.71346133202313&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const data = await fetch(url);
  const jsonData = await data.json();
  const list =
    jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  console.log(
    jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  );
  setRestaurants(list);
}

export const Body = () => {
  let [searchInput, setSearchInput] = useState("");
  let [restaurant, setRestaurants] = useState([]);
  let [displayList, setDisplayList] = useState(restaurantList);
  /**
   * This hook is usefull when we want to execure some API call
   * which we to call when we want.
   * The first parameter is a callback function and second one is
   * dependency array. If we pass any variable inside dependency arry,
   * based one that specific variable change the callback function will be called.
   */
  useEffect(() => {
    callAPI(setRestaurants);
  }, []);

  useEffect(() => {
    console.log("Called 2");
    getFilterData(searchInput, setDisplayList, restaurant);
  }, [searchInput]);
  return restaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div id="body-content">
      <div id="input-box">
        <input
          id="get-input"
          placeholder="search here"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          id="search-btn"
          onClick={() => {
            getFilterData(searchInput, setDisplayList, restaurant);
          }}
        >
          Search food
        </button>
      </div>
      <div id="restaurant-list">
        {displayList.map((items) => {
          return <RestaurantCard {...items.info} key={items.info.id} />;
        })}
      </div>
      <AboutMe />
    </div>
  );
};
