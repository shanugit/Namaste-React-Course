import { useState } from "react";
import restaurantList from "../config";

function searchRestaurant(searchInput, restaurants) {
  // console.log("check " + restaurants);
  return restaurants.filter((item) => item?.data?.name.includes(searchInput));
}

const Search = () => {
  // this hook is used to create local state variable
  // first parameter is the variable and second one is the setter function to chnage the variable value
  let [restaurants, setRestaurants] = useState(restaurantList);
  let [searchInput, setSearchInput] = useState("");

  // creating toggle
  // let [searchClick, setSearchClick] = useState("false");
  return (
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
        }}
      >
        Search - {searchInput}
      </button>
    </div>
  );
};

export default Search;

/**
 * The search Component should not be here as we are trying to modify the restaurants based on
 * the user search options. So ideally I need to put the search box inside the body component.
 *
 * Its working as expected now and exactly the same way i learnt in class. But need to try this -
 * Whether I can pass state of one component to another component.
 */
