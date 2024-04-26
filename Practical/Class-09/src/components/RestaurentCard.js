import { useContext } from "react";
import { IMG_CDN_URL } from "../ConfigFile";
import UserContext from "../utils/UserContext";

export const RestaurantCard = ({
  name,
  avgRating,
  locality,
  cuisines,
  cloudinaryImageId,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg rounded-lg">
      <img alt="Logo of Restaurant" src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>{`Star ${avgRating} - ${locality}`}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="font-bold text-pink-600">{user.name}</h4>
    </div>
  );
};
