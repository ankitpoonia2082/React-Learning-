import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { img_url_CDN } from "../contents";
import Shimmer from "./Shimmer";


const RestroMenu = () => {
    let { id } = useParams()

    useEffect(() => {
        getRestroData()
    }, []);

    const [restroDetail, setRestroDetail] = useState(null);
    const [menu, setMenu] = useState()

    async function getRestroData() {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.1491875&lng=75.7216527&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const jsonData = await data.json();
            setRestroDetail(jsonData?.data?.cards[0]?.card?.card?.info)
            setMenu(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        }
        catch {
            console.log("Failed to fetch data ")
        }
    };


    return (!restroDetail && !menu) ? <Shimmer /> : (
        <div className="restroDetails">
            <div className="restroInfo">
                <img src={img_url_CDN + restroDetail?.cloudinaryImageId}></img>
                <h1>Restraut name : {restroDetail?.name}</h1>
                <h2>Cuisines : {restroDetail?.cuisines.join(',')}</h2>
                <h2>₹ {restroDetail?.costForTwo} for two</h2>
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
                                <img src={img_url_CDN+item.card?.info?.imageId}></img>
                                <h4>{item.card?.info?.name}</h4>
                                <p >{item.card?.info?.category}</p>
                                <p key={item.card?.info?.id}>Price: ₹{item.card?.info?.price}</p>
                            </div>
                        ))};
                </div>
            </div>
        </div>
    );
};




export default RestroMenu;