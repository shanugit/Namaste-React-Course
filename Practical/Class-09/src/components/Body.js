import { useState, useEffect, useContext } from "react";
import { RestaurantCard } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { LIST_URL } from "../ConfigFile";
import { Link } from "react-router-dom";
import useOnline from "../utils/isOnline";
import UserContext from "../utils/UserContext";

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
  let { user, setUser } = useContext(UserContext);
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

  const isOnline = useOnline();
  if (!isOnline) {
    return <div>You are offline!!</div>;
  }
  async function getRestaurents() {
    const data = await fetch(LIST_URL);
    const jsonData = await data.json();
    const list =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
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
    <>
      <div className="p-5 my-2 bg-pink-300 rounded-lg">
        <input
          className="ml-96 p-2 h-10 w-72 rounded-s-lg"
          placeholder="search here"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="h-10 w-28 bg-purple-700 rounded-e-lg text-white hover:bg-purple-900"
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
        <input
          value={user.name}
          onChange={(e) => {
            setUser({
              name: e.target.value,
              mail: "new@mail.com",
            });
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurent.map((items) => {
          return (
            <Link to={"/restaurent/" + items?.info?.id} key={items.info.id}>
              <RestaurantCard {...items.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
