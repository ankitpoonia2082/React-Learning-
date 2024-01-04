import RestaurantCard from "./card";
import { useState } from "react";
import Shimmer, { NoRestro, Offline } from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from './utils/helper';
import useGetRestro from "./utils/useGetRestro";
import useOnline from "./utils/useOnline";


// Application Body
const Body = () => {
    const [allRestro, filteredRestrauts] = useGetRestro();
    const [searchValue, setSearchValue] = useState("");
    // const [filteredRestraut ,setfilteredRestraut] = useState();

    const offline = useOnline()

    return (offline) ? (
        <div className="App_body flex flex-col justify-center text-center">
            <div className="place-self-center my-5">
                <input type="text"
                    className="rounded-l-full self-center py-1 border px-2 focus:bg-gray-200"
                    value={searchValue}
                    placeholder="Search"
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                ></input>
                <button className="bg-red-400 text-white py-1 rounded-r-full p-2 border hover:bg-red-500" onClick={() => {
                    const data = FilterData(searchValue, allRestro)
                    setfilteredRestraut(data)
                }}>Search</button>


            </div>

            {/* Displaying Cards */}
            {(!filteredRestrauts) ? <Shimmer /> : (
                <div className="flex flex-wrap justify-center align-middle m-5">
                    {
                        filteredRestrauts.length === 0 ? <NoRestro /> : filteredRestrauts.map(restrautList => {
                            return (<Link to={`/restroMenu/` + restrautList.info.id} key={restrautList.info.id}><RestaurantCard {...restrautList.info} /></Link>)
                        })
                    }

                </div>
            )}

        </div>
    ) : <Offline />
}

export default Body;