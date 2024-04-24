import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LIST_URL, IMG_CDN_URL } from "../ConfigFile";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurentMenu = () => {
  let { id } = useParams();

  const restaurent = useRestaurant(id);

  const dispatch = useDispatch();

  function addItems(item) {
    dispatch(addItem(item));
  }

  return !restaurent ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="font-bold">
        <h1>{restaurent[0].info?.name + " " + restaurent[0].info?.areaName}</h1>
        <h2>
          {restaurent[0].info?.aggregatedDiscountInfoV3?.header +
            " " +
            restaurent[0].info?.aggregatedDiscountInfoV3?.subHeader}
        </h2>
        <img src={IMG_CDN_URL + restaurent[0].info?.cloudinaryImageId} />
        <h2>Rating - {restaurent[0].info?.avgRating}</h2>
      </div>
      <ul>
        {restaurent[0].info?.cuisines?.map((item) => (
          <li>
            {item}
            <button
              className="p-2 m-2 font-bold bg-green-500 rounded-xl text-white"
              onClick={() => addItems(item)}
            >
              Add Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
