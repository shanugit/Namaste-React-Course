import { RestaurantCard } from "./RestaurentCard";
import { restaurantList } from "../ConfigFile";

export const Body = () => {
  return (
    <div id="restaurant-list">
      {restaurantList.map((restaurent) => {
        return <RestaurantCard {...restaurent.data} key={restaurent.data.id} />;
      })}
    </div>
  );
};
