import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LIST_URL, IMG_CDN_URL } from "../ConfigFile";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurentMenu = () => {
  let { id } = useParams();
  const restaurent = useRestaurant(id);
  return !restaurent ? (
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
