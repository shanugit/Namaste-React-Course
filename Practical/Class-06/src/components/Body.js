import { restaurantList } from "../config";
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
  }, [restaurants]);

  async function searchRestaurant() {
    const api = fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await api.then((data) => {
      console.log(data);
    });
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
            const data = filterData(searchInput, restaurants);
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
