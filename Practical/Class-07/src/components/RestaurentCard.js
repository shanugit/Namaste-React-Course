import { IMG_CDN_URL } from "../ConfigFile";
export const RestaurantCard = ({
  name,
  area,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div id="card">
      <img alt="Logo of Restaurant" src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h4>{area}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};
