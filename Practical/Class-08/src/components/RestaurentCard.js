import { IMG_CDN_URL } from "../ConfigFile";
export const RestaurantCard = ({
  name,
  avgRating,
  locality,
  cuisines,
  cloudinaryImageId,
}) => {
  return (
    <div id="card">
      <img alt="Logo of Restaurant" src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h4>{`Star ${avgRating} - ${locality}`}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};
