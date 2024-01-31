import { restaurantList } from "../../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText) {
  console.log(
    "Before filter " + searchText + " " + JSON.stringify(restaurantList)
  );
  // return restaurants.filter((res) => {
  //   res.info.name === searchText;
  // });
  const response = restaurantList.filter((res) => {
    return res.info.name == searchText;
  });
  console.log(response);
  return response;
}

const Body = () => {
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // use to create state variables. This returns state variable and a function to update the variable
  // const [searchClicked, setSearchClicked] = useState("false");
  const [restaurants, setRestaurents] = useState(restaurantList);
  return (
    <>
      <div>
        <input
          type="text"
          className="input-box"
          placeholder="Search restaurant here"
          value={searchText}
          onChange={(e) => {
            // console.log("Suman " + e.target.value);
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // fiter data
            const data = filterData(searchText);
            // console.log(data);
            // set data
            setRestaurents(data);
            // if (searchClicked === "false") {
            //   setSearchClicked("true");
            // } else {
            //   setSearchClicked("false");
            // }
          }}
        >
          Search Item - {searchText}
        </button>
        {/* <h2>{searchClicked}</h2> */}
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
