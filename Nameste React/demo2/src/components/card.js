//______________________________RESTORANT CARD _______________________
import { img_url_CDN } from "../contents";


// Body Of App
const RestaurantCard = ({ name, cloudinaryImageId, avgRating, costForTwo }) => {
    return (<div className="w-80 h-96  m-5 p-3 rounded-xl shadow-2xl">
        <img className="w-full h-3/5 rounded-xl" src={img_url_CDN + cloudinaryImageId}></img>
        <div className="my-3">
        <h1>{name}</h1>
        <h2>{avgRating} stars</h2>
        <h3>{costForTwo}</h3>
        </div>
    </div>)
};

export default RestaurantCard;