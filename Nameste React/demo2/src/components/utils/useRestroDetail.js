import { useState , useEffect } from "react";

const useRestro = (id)=>{
    const [restroDetail, setRestroDetail] = useState(null);
    const [menu, setMenu] = useState([])

    // get data from api
    useEffect(() => {
        getRestroData()
    }, []);

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

    // give data
    return [restroDetail , menu];
};

export default useRestro;