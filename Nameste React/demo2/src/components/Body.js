import RestaurantCard from "./card";
import { useState, useEffect , useContext} from "react";
import Shimmer, { NoRestro, Offline } from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from './utils/helper';
import { get_Near_By_Restro } from '../contents';
import useOnline from "./utils/useOnline";
import UserContext from "./utils/userContext";

// Application Body
const Body = () => {
    const [filteredRestraut, setFilteredRestraut] = useState()
    const [allRestraut, setAllRestraut] = useState()

    const {user,setNewUser} = useContext(UserContext);

    useEffect(() => {
        getSwigiData()
    }, [])

    // Getting Data from Swigi Api...
    async function getSwigiData() {
        try {
            const data = await fetch(get_Near_By_Restro);
            const json = await data.json();
            const restaurant = await json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setAllRestraut(restaurant);
            setFilteredRestraut(restaurant);
        }
        catch (err) {
            console.log("Failed to fetch", err)
        }
    };

    const [searchValue, setSearchValue] = useState("");
    const offline = useOnline()

    return (offline) ? (
        <div className="flex flex-col justify-center text-center">
            <div className="place-self-center my-5 border-2 rounded-full p-1">
                <input data-testid="searchBox" type="text"
                    className="rounded-full self-center py-1 px-2 focus:bg-gray-200"
                    value={searchValue}
                    placeholder="Search"
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                ></input>
                <button data-testid= "searchBtn" className="bg-red-400 text-white py-1 rounded-full p-2 border hover:bg-red-500" onClick={() => {
                    const data = FilterData(searchValue, allRestraut)
                    setFilteredRestraut(data)
                }}>🔍</button>
            </div>

            <input value={user.name} onChange={(e)=>{setNewUser({name:e.target.value})}}></input>

            {/* Displaying Cards */}
            {(!filteredRestraut) ? <Shimmer /> : (
                <div data-testid ="Restaurant" className="flex flex-wrap justify-center align-middle box-border">
                    {
                        filteredRestraut.length === 0 ? <NoRestro /> : filteredRestraut.map(restrautList => {
                            return (<Link className="m-5" to={`/restroMenu/` + restrautList.info.id} key={restrautList.info.id}><RestaurantCard {...restrautList.info}/></Link>)
                        })
                    }
                </div>
            )}

        </div>
    ) : <Offline />
}

export default Body;