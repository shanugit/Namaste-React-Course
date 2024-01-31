import { img_url } from "../../Constants";

const RestaurantCard = ({ cloudinaryImageId, name, avgRating, locality }) => {
  return (
    <div className="card">
      <img src={img_url + cloudinaryImageId} alt="Restaurant logo" />
      <h2>{name}</h2>
      <h3>{avgRating} stars</h3>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestaurantCard;
