import React from "react";
import { Badge, Avatar, Popover, Card, Menu, Dropdown } from "antd";
import Search from "antd/lib/transfer/search";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsFillEnvelopeFill, BsFillPersonFill,BsFillKeyFill } from "react-icons/bs";
import "../VerticleMenu.css";





const NavbarBadge = () => {

  // For Search
  // const Search = Input.Search;

  const loginpage = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userinfo");
    loginpage("/");
  
    // axios.post("http://localhost:5000/users/logoutUser",{userId}).then(function(data){
    // console.log("successfully logout");
    // localStorage.removeItem("userinfo");
    // loginpage("/")
    // })
  };

  const menu = (
    <Menu style={{ width: 180 }}>
      <Menu.Item>
        <Link to="/profile">
          <a target="_blank" rel="noopener noreferrer" href="#">
            <div style={{ display: "flex", paddingLeft: 20 }}>
              <div>
                <BsFillPersonFill style={{ fontSize: 20 }} />
              </div>
  
              <div> &nbsp; User Profile </div>
            </div>
          </a>
        </Link>
      </Menu.Item>
  
      <Menu.Item>
        <Link to="/resetpassword">
          <a target="_blank" rel="noopener noreferrer" href="#">
            <div style={{ display: "flex", paddingLeft: 20 }}>
              <div>
                <BsFillKeyFill style={{ fontSize: 20 }} />
              </div>
  
              <div> &nbsp; Reset Password </div>
            </div>
          </a>
        </Link>
      </Menu.Item>
  
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={logoutHandler}>
          <div style={{ display: "flex", paddingLeft: 20 }}>
            <div>
              <AiOutlineLogout style={{ fontSize: 20 }} />
            </div>
  
            <div> &nbsp; Logout </div>
          </div>
        </a>
      </Menu.Item>
    </Menu>
  );
  

  return (
    <div style={{ display: "flex", alignItems: "center" }} id="navbarband">
      <div>
        <Search
          id="header_search"
          style={{
            backgroundColor: "#001529",
            borderRadius: "50%",
          }}
          placeholder=" Search Here"
          onSearch={(value) => console.log(value)}
        />
      </div>

      <div style={{ marginLeft: 10 }}>
        <span className="avatar-item">
          <Dropdown overlay={menu} placement="bottomCenter">
            <div style={{ marginLeft: 15 }}>
              <img
                style={{ height: 40, width: 40, borderRadius: "50%" }}
                src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
                // alt="test"
              ></img>
            </div>
          </Dropdown>
        </span>
      </div>
    </div>
  );
};

export default NavbarBadge;
