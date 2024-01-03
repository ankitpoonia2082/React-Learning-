import { useEffect, useState } from "react";

const useOnline = ()=>{
    const [isOnline,setOnline] = useState(true);
    
    useEffect(()=>{
        const handelOnline = ()=>{setOnline(true)}
        const handelOffline = ()=>{setOnline(false)}

        window.addEventListener('online',handelOnline);
        window.addEventListener('offline',handelOffline);

        // returned a function because it cleans our addEventListener;
        return ()=>{
            window.removeEventListener('online',handelOnline);
            window.removeEventListener('offline',handelOffline);
        }
    });

    return isOnline;
};

export default useOnline;