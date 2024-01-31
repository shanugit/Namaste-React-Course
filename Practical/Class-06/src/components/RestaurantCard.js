import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card" style={padding: 2px}>
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Distance: {lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
