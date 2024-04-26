import { useState, useEffect } from "react";
import { LIST_URL } from "../ConfigFile";

const useRestaurant = (resId) => {
  if (resId == null) {
    console.log("Please pass a valid restaurent id");
    return;
  }
  let [restaurant, setRestaurant] = useState(null);
  // get data here
  useEffect(() => {
    getRestaurents();
  }, []);
  async function getRestaurents() {
    const data = await fetch(LIST_URL);
    const jsonData = await data.json();
    let d =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.filter(
        (item) => item?.info?.id == resId
      );
    setRestaurant(d);
  }
  // return data
  return restaurant;
};

export default useRestaurant;
