import { restaurantList, SWIGGY_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, setRestaurants) {
  const d = restaurantList.filter((item) =>
    item.data.name.includes(searchInput)
  );
  setRestaurants(d);
}

const Body = () => {
  let [restaurants, setRestaurants] = useState(restaurantList);
  let [searchInput, setSearchInput] = useState("");

  console.log("render");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search here"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            filterData(searchInput, setRestaurants);
          }}
        >
          Search - {searchInput}
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
