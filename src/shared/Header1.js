import React from "react";
import { Layout,Search,Input } from "antd";
import "antd/dist/antd.css";
// or 'antd/dist/antd.less'

import "./VerticleMenu.css";
import NavbarBadge from "./NavaberBadge/NavbarBadge";

const { Header } = Layout;
const Header1 = ({user}) => {
  const Search = Input.Search;

  return (
    <Header style={{ width: "100%", position: "fixed", zIndex: 1 }}>
      <div>
        {/* <div className="logo">
          <h1
            id="topHeaderForMobile"
            style={{ color: "#FFFFFF", float: "left" }}
          >
          
            E-Commrch{" "}
          </h1>
        </div> */}

      
        <div id="navbarbadge" style={{ float: "right" }}>
     
          <NavbarBadge> </NavbarBadge>
        </div>
      </div>
    </Header>
  );
};

export default Header1;
