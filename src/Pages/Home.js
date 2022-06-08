import React, {useEffect, useState} from 'react';
import {UserState} from '../Context/UserProvider';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const loginpage = useNavigate();
    const [userinfo,setUserInfo] = useState();
    // const {user} = UserState();
    // const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    // console.log(userInfo);
    // const userId = userInfo.data._id;
    // console.log(userInfo);
    // console.log(userInfo.data.email);
    const logoutHandler = () =>{
        localStorage.removeItem("userinfo");
        loginpage("/")

        // axios.post("http://localhost:5000/users/logoutUser",{userId}).then(function(data){
        // console.log("successfully logout");
        // localStorage.removeItem("userinfo");
        // loginpage("/")
        // })
    }

    useEffect(()=>{

        const userInfo = JSON.parse(localStorage.getItem("userinfo"))
        if(userInfo){
            console.log(userInfo.id,userInfo.name,userInfo.email);
            setUserInfo({id:userInfo.id,name:userInfo.name,email:userInfo.email});
        }else{
            loginpage("/");
        }       
        
    },[]);

    return (
        <div>
            dashboard page...
            <div>
            <h1>Name: {userinfo?.name}</h1>
            <h1>Email: {userinfo?.email}</h1>
            {/* <img src='userInfo.picture'/> */}
            </div>
            <button onClick={logoutHandler}>LogOut</button>
        </div>
    );
};

export default Home;