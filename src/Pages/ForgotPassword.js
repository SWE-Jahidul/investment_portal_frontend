
import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function ForgotPassword() {
  const loginpage = useNavigate();
  const [userdata, setUserData] = useState();
  const [email, setEmail] = useState();
  const [alertmsg, setAlertmsg] = useState();
  const userAllData = () => {
    //Get Record - Detail View
    axios.get("https://investmentportal.herokuapp.com/getrecord").then(function (data) {
      console.log(data.data.data);
      setUserData(data.data.data);
    });
  };

  const UserEmailHandler = () => {
    if (userdata) {
      if (!email) {
        console.log("plz fill the all fields");
        setAlertmsg("Plz enter your email!");
      } else {
        for (let i = 0; i < userdata.length; i++) {
          //const DecodePass = Base64.decode(userdata[i]?.Password);
          // console.log(userdata[i]?.Email)
          // console.log(userdata[i]?.Password)
          if (userdata[i]?.Email === email) {
            localStorage.setItem(
              "userinfo",
              JSON.stringify({
                id: userdata[i].ID,
                email: userdata[i].Email,
              })
            );
            const id = userdata[i].ID;
            const email = userdata[i].Email;
            axios.post("https://investmentportal.herokuapp.com/sendemail",{id,email}).then(function(data){
              console.log(data.data.message);
              if(data.data.message === "send email successfully"){
                setAlertmsg("Sent link in your email for new password! Plz check your email.")
              }

            })
            // console.log("Successfully sent link in email!");
            // setAlertmsg("Successfully sent link in email!")
            // loginpage("/home");
          }
        }
      }
    } else {
      console.log("Server problem. User not found try after sometimes");
      setAlertmsg("Server problem. User not found try after sometimes");
    }
  };

  useEffect(()=>{
    userAllData();
  },[])


  return (
    <div>
        <h1>Forgot Password?</h1>
        <div>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
        </div>
        <br />
        <div>
            <button onClick={UserEmailHandler}>Send</button>
        </div>
        <br />
        <div>
        <p>{alertmsg}</p>
        </div>

        <div>

        </div>
    </div>
  )
}
