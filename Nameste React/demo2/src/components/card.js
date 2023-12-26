//______________________________RESTORANT CARD _______________________
import { img_url_CDN } from "../contents";


// Body Of App
const RestaurantCard = ({ name, cloudinaryImageId, avgRating, costForTwo }) => {
    return (<div className="card">
        <img src={img_url_CDN + cloudinaryImageId}></img>
        <h1>{name}</h1>
        <h2>{avgRating} stars</h2>
        <h3>{costForTwo}</h3>
    </div>)
};

export default RestaurantCard;