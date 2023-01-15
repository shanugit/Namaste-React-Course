import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function searchRestaurant(searchInput, restaurants) {
  console.log("check " + restaurants);
  return restaurants.filter((item) => item?.data?.name.includes(searchInput));
}

const Body = () => {
  let [restaurants, setRestaurants] = useState(restaurantList);
  let [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search here"
          value={searchInput}
          onChange={(e) => {
            // searchTxt = e.target.value;
            setSearchInput(e.target.value);
            // console.log(searchInput);
          }}
        />
        <button
          onClick={() => {
            const data = searchRestaurant(searchInput, restaurants);
            setRestaurants(data);
            // if (data.length > 0) {
            //   setRestaurants(data);
            // } else {
            //   setRestaurants({});
            // }
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
