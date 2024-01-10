import { createContext } from "react";

const UserContext = createContext(
    {user:{
        name:"user",
        mail: "user@gmail.com"
    }}
)
UserContext.displayName="UserContext";
export default UserContext;