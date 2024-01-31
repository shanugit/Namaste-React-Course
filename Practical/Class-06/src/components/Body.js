import { restaurantList, SWIGGY_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterData(searchInput, restaurants) {
  console.log(restaurants);
  return restaurants.filter((item) => item?.data?.name?.incudes(searchInput));
}

const Body = () => {
  let [restaurants, setRestaurants] = useState(restaurantList);
  let [searchInput, setSearchInput] = useState("");

  // empty dependency array => once after render it will get called
  // [restaurants] => once after restaurants state changes
  useEffect(() => {
    searchRestaurant();
  }, [searchInput]);

  function searchRestaurant() {
    fetch(SWIGGY_URL)
      .then((response) => response.json())
      .then((data) => setRestaurants(data.data.cards[2].data.data.cards));
  }

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
            // searchTxt = e.target.value;
            setSearchInput(e.target.value);
            // console.log(searchInput);
          }}
        />
        <button
          onClick={() => {
            const data = setRestaurants(data);
            if (data.length > 0) {
              setRestaurants(data);
            } else {
              setRestaurants({});
            }
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
