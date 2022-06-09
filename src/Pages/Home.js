import React, { useEffect, useState } from "react";
import { UserState } from "../Context/UserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Layout, PageHeader } from "antd";

import VerticleNavBar from "../shared/VerticleNavBar";
import Header1 from "../shared/Header1";
import Footer1 from "../shared/Footer1";



const { Content } = Layout;

const Home = () => {
  const loginpage = useNavigate();
  const [userinfo, setUserInfo] = useState();
  // const {user} = UserState();
  // const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  // console.log(userInfo);
  // const userId = userInfo.data._id;
  // console.log(userInfo);
  // console.log(userInfo.data.email);
  const logoutHandler = () => {
    localStorage.removeItem("userinfo");
    loginpage("/");

    // axios.post("http://localhost:5000/users/logoutUser",{userId}).then(function(data){
    // console.log("successfully logout");
    // localStorage.removeItem("userinfo");
    // loginpage("/")
    // })
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    // if(userInfo){
    //     console.log(userInfo.id,userInfo.name,userInfo.email);
    //     setUserInfo({id:userInfo.id,name:userInfo.name,email:userInfo.email});
    // }else{
    //     loginpage("/");
    // }
  }, []);

  return (
    <Layout style={{ overflowX: "hide" }}>
      <VerticleNavBar style={{ overflowX: "hide" }}></VerticleNavBar>

      <Layout>
        <Header1 style={{ overflowX: "hide" , paddingBottom:40 }}></Header1>

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            marginTop:60,
            padding: 24,
            minHeight: 775,
          }}
        >
          Content
        </Content>

        <Footer1 style={{ overflowX: "hide", }}></Footer1>

      </Layout>
    </Layout>
    // <div>
    //     dashboard page...
    //     <div>
    //     <h1>Name: {userinfo?.name}</h1>
    //     <h1>Email: {userinfo?.email}</h1>
    //     <img src='userInfo.picture'/>
    //     </div>
    //     <button onClick={logoutHandler}>LogOut</button>
    // </div>
  );
};

export default Home;
