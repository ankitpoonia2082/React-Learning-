
import RestaurantCard from "./card";
import { restrautList } from "../contents";
import { useState } from "react";
import { restrautList } from "../contents";

const FilterData = (searchValue) => {
    let restrauts = restrautList;
    return restrauts.filter((restraut) => restraut.info.name.includes(searchValue))
};

const Body = () => {
    const [searchValue, setSearchValue] = useState("");
    const [restrauts, setRestraunts] = useState(restrautList);

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
                    const data = FilterData(searchValue)
                    setRestraunts(data)
                }}>Search</button>

            </div>

            <div className="body-div">
                {restrauts.map(restrautList => {
                    return (<RestaurantCard {...restrautList.info} key={restrautList.info.id} />)
                })}
            </div>
        </div>
    )
}

export default Body;