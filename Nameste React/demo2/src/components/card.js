//______________________________RESTORANT CARD _______________________
import { img_url_CDN } from "../contents";

// Body Of App
const RestaurantCard = ({ name, cloudinaryImageId, avgRating, costForTwo, isOpen }) => {

    return (<div data-testid="Card" className="w-80 h-96 p-3 rounded-xl shadow-2xl ">
        <img className="w-full h-3/5 rounded-xl mb-4" src={img_url_CDN + cloudinaryImageId}></img>
        <div className="mt-3">
            <h1 className="my-3 font-bold">{name}</h1>
            <h2>{costForTwo}</h2>
            <h2>Ratings :{avgRating} ⭐️</h2>
            <h5>{(isOpen) ? "OPEN" : "CLOSE"}</h5>
        </div>
    </div>)
};

export default RestaurantCard;