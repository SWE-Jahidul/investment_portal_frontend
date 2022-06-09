import { Layout, Menu } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./Header1";
import "./Content";
import "./Footer1";
import "./VerticleMenu.css";

import { Link } from "react-router-dom";

const { Sider } = Layout;

const VerticleNavBar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div id="verticle_menu" style={{}}>
        <div className="logo">
          <h1
            id="topHeaderTitle"
            style={{ marginLeft: 20, color: "white", marginTop: 25 }}
          >
            Investment Portal
          </h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            <Link to="/home">
              <i className="fas fa-tachometer-alt"> </i> &nbsp; Dashbord
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
};

export default VerticleNavBar;
