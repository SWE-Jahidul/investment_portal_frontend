import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmailOTPVerify = () => {
    const dashboard = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const [otp,setOtp] = useState();

    const verifyPin = () => {
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        //console.log("user email: ",userInfo.data.user.email);
        //const userEmail = userInfo.data.user.email
        console.log("user id: ",userInfo.data._id);
        const userId = userInfo.data._id
        axios.post("http://localhost:5000/users/verifyOTP",{userId,otp}).then(function(data){
          console.log(data);
          localStorage.setItem("userinfo",JSON.stringify(data));
          dashboard("/home")
        })
    }

    return(
        <div>
            <h1>Verify your email otp..... Check your email. We have send otp for verification</h1>
            <input type="text" onChange={(e)=>setOtp(e.target.value)} placeholder='Enter pin'/>
            <button onClick={verifyPin}>Verify</button>
        </div>
    )
}
export default EmailOTPVerify;