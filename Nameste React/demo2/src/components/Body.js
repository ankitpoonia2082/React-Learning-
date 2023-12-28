import RestaurantCard from "./card";
import { useState, useEffect } from "react";
import Shimmer, { NoRestro } from "./Shimmer"
import { Link } from "react-router-dom";

// Restraut searching 
const FilterData = (searchValue, allRestro) => {
    let restrauts = allRestro;
    searchValue = searchValue.toLowerCase()
    return restrauts.filter((restraut) => restraut?.info?.name.toLowerCase().includes(searchValue))
};

// Application Body
const Body = () => {
    const [searchValue, setSearchValue] = useState("");
    const [allRestro, setAllRestro] = useState([]);
    const [filteredRestrauts, setFilteredRestrauts] = useState(allRestro);

    useEffect(() => {
        getSwigiData()
    }, [])

    // Getting Data from Swigi Api...
    async function getSwigiData() {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1491875&lng=75.7216527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
            const json = await data.json();
            setAllRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestrauts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch {
            console.log("Failed to fetch")
        }
    }

    return (
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
                    setFilteredRestrauts(data)
                }}>Search</button>


            </div>
            {/* Displaying Cards */}
            {(!allRestro.length) ? <Shimmer /> : (
                <div className="body-div">
                    {
                        filteredRestrauts.length === 0 ? <NoRestro /> : filteredRestrauts.map(restrautList => {
                            return (<Link to={`/restroMenu/`+restrautList.info.id} key={restrautList.info.id}><RestaurantCard {...restrautList.info}/></Link>)
                        })
                    }
                    
                </div>
            )}

        </div>
    )
}

export default Body;