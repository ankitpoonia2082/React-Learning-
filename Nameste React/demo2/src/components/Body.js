import RestaurantCard from "./card";
import { useState } from "react";
import Shimmer, { NoRestro , Offline } from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from './utils/helper';
import useGetRestro from "./utils/useGetRestro";
import useOnline from "./utils/useOnline";


// Application Body
const Body = () => {
    const [allRestro,filteredRestrauts] = useGetRestro();
    const [searchValue, setSearchValue] = useState("");
    // const [filteredRestraut ,setfilteredRestraut] = useState();

    const offline = useOnline()

    return (offline)? (
        <div className="App_body">
            <div className="searchBox">
                <input type="text" className="input-Search"
                    value={searchValue}
                    placeholder="Search"
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                ></input>
                <button onClick={() => {
                    const data = FilterData(searchValue, allRestro)
                    setfilteredRestraut(data)
                }}>Search</button>


            </div>

            {/* Displaying Cards */}
            {(!filteredRestrauts) ? <Shimmer /> : (
                <div className="body-div">
                    {
                        filteredRestrauts.length === 0 ? <NoRestro /> : filteredRestrauts.map(restrautList => {
                            return (<Link to={`/restroMenu/` + restrautList.info.id} key={restrautList.info.id}><RestaurantCard {...restrautList.info} /></Link>)
                        })
                    }

                </div>
            )}

        </div>
    ):<Offline /> 
}

export default Body;