import { useState } from "react";
import { RestaurantCard } from "./RestaurentCard";
import { restaurantList } from "../ConfigFile";

function getFilterData(searchInput, setRestaurants) {
  setRestaurants(
    restaurantList.filter((item) => item.data.name.includes(searchInput))
  );
}

export const Body = () => {
  let [searchInput, setSearchInput] = useState("");
  let [restaurant, setRestaurants] = useState(restaurantList);
  return (
    <>
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
            getFilterData(searchInput, setRestaurants);
          }}
        >
          Search food
        </button>
      </div>
      <div id="restaurant-list">
        {restaurant.map((items) => {
          return <RestaurantCard {...items.data} key={items.data.id} />;
        })}
      </div>
    </>
  );
};
