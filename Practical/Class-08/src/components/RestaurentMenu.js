import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LIST_URL, IMG_CDN_URL } from "../ConfigFile";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  let { id } = useParams();
  let [restaurent, setRestaurent] = useState([]);
  useEffect(() => {
    getRestaurents();
  }, []);
  async function getRestaurents() {
    const data = await fetch(LIST_URL);
    const jsonData = await data.json();
    let d =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.filter(
        (item) => item?.info?.id == id
      );
    setRestaurent(d);
  }
  return restaurent.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{restaurent[0].info?.name + " " + restaurent[0].info?.areaName}</h1>
      <h2>
        {restaurent[0].info?.aggregatedDiscountInfoV3?.header +
          " " +
          restaurent[0].info?.aggregatedDiscountInfoV3?.subHeader}
      </h2>
      <img src={IMG_CDN_URL + restaurent[0].info?.cloudinaryImageId} />
      <h2>Rating - {restaurent[0].info?.avgRating}</h2>
      <h2>Cuisins - {restaurent[0].info?.cuisines.join(" ")}</h2>
      <h2></h2>
    </div>
  );
};

export default RestaurentMenu;
