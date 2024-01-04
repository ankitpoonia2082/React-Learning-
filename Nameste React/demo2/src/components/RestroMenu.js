import { useParams } from "react-router"
import { img_url_CDN } from "../contents";
import Shimmer from "./Shimmer";
import useRestro from "./utils/useRestroDetail";


const RestroMenu = () => {
    // useParams() is a hook which give us dynamic url value
    let { id } = useParams()

    const [restroDetail,menu ]=  useRestro(id)

    return (!restroDetail && !menu) ? <Shimmer /> : (
        <div className="m-7">
            <div className="flex flex-col w-auto text-center items-center justify-between">
                <img className="h-96 w-96 rounded-2xl " src={img_url_CDN + restroDetail?.cloudinaryImageId}></img>
                <div className=" p-5">
                <h1>Restraut name : {restroDetail?.name}</h1>
                <h2>Cuisines : {restroDetail?.cuisines.join(',')}</h2>
                <h3>Ratings: {restroDetail?.avgRating} ⭐️ </h3>
                <h3>City: {restroDetail?.city} </h3>
                <h3> 📍: {restroDetail?.locality} </h3>
                </div>
            </div>

            <div>
                <h1 className="bg-red-500 text-center p-3 text-white font-bold my-6">MENU</h1>
                <div className="flex flex-wrap justify-center">
                    {
                        menu?.map((item) => (
                            <div className="border-2 w-80 text-center p-2 m-5">
                                <img className="w-full h-3/4" src={img_url_CDN + item.card?.info?.imageId}></img>
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