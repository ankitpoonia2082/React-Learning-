import {useEffect,useState} from 'react';
import {get_Near_By_Restro} from '../../contents';


const useGetRestro = ()=>{
    const [allRestro, setAllRestro] = useState();
    const [filteredRestrauts, setFilteredRestrauts] = useState();

    useEffect(() => {
        getSwigiData()
    },[])

    // Getting Data from Swigi Api...
    async function getSwigiData() {
        try {
            const data = await fetch(get_Near_By_Restro);
            const json = await data.json();
            const restaurant = await json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setAllRestro(restaurant);
            setFilteredRestrauts(restaurant);
        }
        catch(err) {
            console.log("Failed to fetch" , err)
        }
    };
    return [allRestro ,filteredRestrauts]; 
};

export default useGetRestro;
