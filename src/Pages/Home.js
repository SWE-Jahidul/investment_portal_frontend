import React, {useEffect} from 'react';
import {UserState} from '../Context/UserProvider';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const loginpage = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const userId = userInfo.data._id;
    // console.log(userInfo);
    // console.log(userInfo.data.email);
    const logoutHandler = () =>{
        axios.post("http://localhost:5000/users/logoutUser",{userId}).then(function(data){
        console.log("successfully logout");
        localStorage.removeItem("userinfo");
        loginpage("/")
        })
    }

    // useEffect(()=>{

    //     const userInfo = JSON.parse(localStorage.getItem("userinfo"))       

    // },[]);

    return (
        <div>
            dashboard page...
            <div>
                {/* <h1>Name: {userInfo}</h1> */}
            </div>
            <button onClick={logoutHandler}>LogOut</button>
        </div>
    );
};

export default Home;