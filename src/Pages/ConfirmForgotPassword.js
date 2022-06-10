import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function ConfirmForgotPassword() {
  const loginpage = useNavigate();
  const [password,setPassword] = useState();
  const [confirmpassword,setConfirmPassword] = useState();
  const [expire,setExpire] = useState(true);
  const [alertmsg, setAlertmsg] = useState();

  const ConfirmPasswordReset = () =>{
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    if(!password || !confirmpassword){
      setAlertmsg("Plz fill up all fields!");
    }else if (password !== confirmpassword) {
      setAlertmsg("password not matched!");
    }else if (password.length < 8) {
      setAlertmsg("Password is too short!");
    }else{
      const id = userInfo.id;
      axios.put("https://investmentportal.herokuapp.com/reset-password",{id,password}).then(function(data){
        if(data.data.message === "Data Updated Successfully"){
          localStorage.removeItem("userinfo");
          loginpage("/");
        }else{
            setAlertmsg("something wrong! try again later");
        }
      })
    }

  }

  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    if(!userInfo){
      setExpire(false);
    }

  },[])


  return (
    <div>
      {expire === true &&(
        <div>
        <h1>Set New Password</h1>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter New Password"/>
        <br />
        <br />
        <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password'/>
        <div style={{marginTop:"10px"}}>
        <button onClick={ConfirmPasswordReset}>Confirm</button>
        </div>
        <div>
          <p>{alertmsg}</p>
        </div>
        </div>
        
      )}

      {expire === false &&(
        <div>
        <h1>Expire your link.</h1>
        <h1>Plz try again..... Thank You!</h1>
        </div>
        
      )}
      
    </div>
  )
}
