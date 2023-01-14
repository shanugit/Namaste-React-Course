import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

const Body = () => {
  return (
    <>
      <Search />
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
