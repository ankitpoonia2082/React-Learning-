import { useParams } from "react-router"
import { img_url_CDN } from "../contents";
import Shimmer from "./Shimmer";
import useRestro from "./utils/useRestroDetail";


const RestroMenu = () => {
    // useParams() is a hook which give us dynamic url value
    let { id } = useParams()

    const [restroDetail,menu ]=  useRestro(id)

    return (!restroDetail && !menu) ? <Shimmer /> : (
        <div className="restroDetails">
            <div className="restroInfo">
                <img src={img_url_CDN + restroDetail?.cloudinaryImageId}></img>
                <h1>Restraut name : {restroDetail?.name}</h1>
                <h2>Cuisines : {restroDetail?.cuisines.join(',')}</h2>
                <h3>Ratings: {restroDetail?.avgRating} Stars </h3>
                <h3>City: {restroDetail?.city} </h3>
                <h3>Locality: {restroDetail?.locality} </h3>
            </div>

            <div className="menu">
                <h1>MENU</h1>
                <div className="menuCard">
                    {
                        menu?.map((item) => (
                            <div className="menuItem">
                                <img src={img_url_CDN + item.card?.info?.imageId}></img>
                                <h4>{item.card?.info?.name}</h4>
                                <p >{item.card?.info?.category}</p>
                                <p >Price: ₹{item.card?.info?.price}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RestroMenu;