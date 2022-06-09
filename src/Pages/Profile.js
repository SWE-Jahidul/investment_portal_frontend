

import React, { useEffect, useState } from "react";
import { UserState } from "../Context/UserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Layout, PageHeader } from "antd";

import VerticleNavBar from "../shared/VerticleNavBar";
import Header1 from "../shared/Header1";
import Footer1 from "../shared/Footer1";



const { Content } = Layout;

export default function Profile() {
    const loginpage = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));

    useEffect(()=>{
        if(!userInfo){
            loginpage("/");
        }

    })
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
          <h1>Profile</h1>
          <div>
              <h1>Name: {userInfo.name}</h1>
              <h1>Email: {userInfo.email}</h1>
          </div>
        </Content>

        <Footer1 style={{ overflowX: "hide", }}></Footer1>

      </Layout>
    </Layout>
  )
}
