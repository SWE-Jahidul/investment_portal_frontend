import React, { useState, useEffect } from "react";
import loginImages from "../images/5035121.jpg";
import "../shared/menu.css";
import { Form, Input, Button, Divider, Alert, message } from "antd";
import { Row, Col, Image } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Base64 } from "js-base64";

const Login = () => {
  const registration = useNavigate();
  const forgotpassword = useNavigate();
  const homepage = useNavigate();
  const [userdata, setUserData] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alertmsg, setAlertmsg] = useState();

  const userAllData = () => {
    //Get Record - Detail View
    axios
      .get("https://investmentportal.herokuapp.com/getrecord")
      .then(function (data) {
        //console.log(data.data.data);
        setUserData(data.data.data);
        // localStorage.setItem("userinfo",JSON.stringify(data));
        // setVisiable(true);
      });
  };

  const userLogin = () => {
    if (userdata) {
      if (!email || !password) {
        //console.log("plz fill the all fields");
        //setAlertmsg("plz fill the all fields");

        // Adding new Messages
        message.warning("Please fill all the fields !");
      } else {
        for (let i = 0; i < userdata.length; i++) {
          const DecodePass = Base64.decode(userdata[i]?.Password);
          // console.log(userdata[i]?.Email)
          // console.log(userdata[i]?.Password)
          //console.log(DecodePass);
          if (userdata[i]?.Email === email && DecodePass === password) {
            if(userdata[i].UserStatus === "Approved"){
              localStorage.setItem(
                "userinfo",
                JSON.stringify({
                  id: userdata[i].ID,
                  name: userdata[i].Name.display_value,
                  email: userdata[i].Email,
                  userstatus: userdata[i].UserStatus,
                })
              );
              // console.log("");
              message.success("Successfully login!");
              registration("/home");
            }else if(userdata[i].UserStatus === "Pending"){
              message.success("Your request is pending...");
            }else{
              message.success("Please ask an admin to grant permission to this app.");
            }
            
          } else {
            setAlertmsg("");
            // setAlertmsg(<Alert message="Incorrect Email and Password" type="warning" showIcon closable />)

            //message.error("Incorrect Email and Password");
          }
        }
      }
    } else {
      // console.log("Server problem. User not found try after sometimes");
      // setAlertmsg("Server problem. User not found try after sometimes");
   //   message.success("Server problem. User not found try after sometimes!");
    }
  };

  const ForgotPassword = () => {
    forgotpassword("/forgotpassword");
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    if (userInfo) {
      homepage("/home");
    }
    userAllData();
  }, []);

  return (
    <Row style={{ overflowX: "hide" }}>
      <Col
        id="signInmain"
        xs={{ span: 22, offset: 0 }}
        lg={{ span: 16, offset: 4 }}
        md={{ span: 16, offset: 4 }}
        sm={{ span: 22, offset: 0 }}
      >
        {/* <h2 style={{marginTop:30, textAlign: "center" , marginLeft:20}}>Login </h2> */}
        <Row
          gutter={[36]}
          style={{
            // border: "2px solid gray",
            display: "flex",
            alignItems: "center",
            // padding: 3,
          }}
        >
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 10, offset: 0 }}
            md={{ span: 10, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
          >
            <Image
              style={{ padding: 20 }}
              width="100%"
              src={loginImages}
              preview={false}
            />
          </Col>

          <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }}>
            <Divider
              id="signinDeviderVerticle"
              type="vertical"
              style={{ height: "350px", backgroundColor: "#4B9FFF" }}
            />

            <Divider
              id="signinDeviderHorizonal"
              type="horizonal"
              style={{
                width: "375px",
                backgroundColor: "#4B9FFF",
              }}
            />
          </Col>

          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 10, offset: 0 }}
            md={{ span: 10, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            style={{ marginTop: 35 }}
            id="login_input_filed"
          >
            <Form
              name="wrap"
              labelCol={{ flex: "110px" }}
              labelAlign="left"
              labelWrap
              wrapperCol={{ flex: 1 }}
              colon={false}
            >
              <Form.Item
                label="Email"
                name="username"
                rules={[{ required: true }]}
                onChange={(e) => setEmail(e.target.value)}
              >
                <Input placeholder="Input Your Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true }]}
                onChange={(e) => setPassword(e.target.value)}
              >
                <Input.Password placeholder="input your password" />
              </Form.Item>

              <Form.Item style={{ float: "right", overflowX: "hide" }}>
                <Button type="primary" onClick={userLogin}>
                  Login
                </Button>
              </Form.Item>

              <br></br>
              <div
                id="forgetandcreateaccount"
                style={{
                  //padding:10,
                  marginTop: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Form.Item style={{ color: "#007DFE" }}>
                  <a onClick={() => registration("/registration")}>
                    Create New Account?
                  </a>
                  {/* <Button type="primary" htmlType="submit" onClick={()=>console.log(userdata)}>check</Button> */}
                </Form.Item>

                <Form.Item style={{ color: "#007DFE" }}>
                  <a onClick={ForgotPassword}>Fogot Password ?</a>
                </Form.Item>
              </div>
            </Form>
          </Col>
        </Row>
      </Col>
      <p>{alertmsg}</p>
    </Row>
  );
};

export default Login;
