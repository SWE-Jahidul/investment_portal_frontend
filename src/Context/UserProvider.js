import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const userContext = createContext();

const UserProvider = ({children}) => {
    const [user,setUser] = useState();
    const NoUserFound = useNavigate();

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        setUser(userInfo);

        // if(userInfo){
        //     NoUserFound("/home");
        //     setUser(userInfo);
        // }
        // if(!userInfo){
        //     NoUserFound("/");
        // }
    },[]);

    return(
        <userContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </userContext.Provider>
    )
}

export const UserState = () =>{
    return useContext(userContext);
}

export default UserProvider;