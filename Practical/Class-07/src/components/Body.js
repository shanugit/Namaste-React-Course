import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { LIST_URL } from "../ConfigFile";
import { Link } from "react-router-dom";

function getFilterData(searchInput, allRestaurant) {
  console.log(allRestaurant.length);
  return searchInput.length > 0
    ? allRestaurant.filter((item) =>
        item.info.name.toLowerCase().includes(searchInput.toString().trim())
      )
    : [];
}

export const Body = () => {
  let [allRestaurant, setAllRestaurants] = useState([]);
  let [filteredRestaurent, setFilteredRestaurent] = useState([]);
  let [searchInput, setSearchInput] = useState("");
  /**
   * This hook is usefull when we want to execure some API call
   * which we to call when we want.
   * The first parameter is a callback function and second one is
   * dependency array. If we pass any variable inside dependency arry,
   * based one that specific variable change the callback function will be called.
   */
  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(LIST_URL);
    const jsonData = await data.json();
    const list =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(
    //   jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setAllRestaurants(list);
    setFilteredRestaurent(list);
  }

  /**
   * Conditional rendering
   * If we dont have restaurents, load shimmer UI
   * Once data came from API call, update UI with proper list
   */
  return filteredRestaurent.length == 0 ? (
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
            const data = getFilterData(searchInput, allRestaurant);
            if (searchInput.length > 0) {
              setFilteredRestaurent(data);
            } else {
              setFilteredRestaurent(allRestaurant);
            }
          }}
        >
          Search food
        </button>
      </div>
      <div id="restaurant-list">
        {filteredRestaurent.map((items) => {
          return (
            <Link to={"/restaurent/" + items?.info?.id} key={items.info.id}>
              <RestaurantCard {...items.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
