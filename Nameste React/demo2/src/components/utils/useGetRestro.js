import {useEffect,useState} from 'react';
import {get_Near_By_Restro} from '../../contents';


const useGetRestro = ()=>{
    const [allRestro, setAllRestro] = useState();
    const [filteredRestrauts, setFilteredRestrauts] = useState();

    
    return [allRestro ,filteredRestrauts]; 
};

export default useGetRestro;
