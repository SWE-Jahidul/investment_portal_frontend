import React, {useState} from "react";
import loginImages from "../images/5035121.jpg";
import "../shared/menu.css";
import { Form, Input, Button, Divider } from "antd";
import { Row, Col, Image } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const registration = useNavigate();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [alertmsg,setAlertmsg] = useState();

  const userLogin = async() => {
      axios.post("http://localhost:5000/users/login",{email,password}).then(function(data){
      console.log(data);
      console.log(data.data.message);
      localStorage.setItem("userinfo",JSON.stringify(data));
      console.log(data.data.error);
      if(data.data.message === "successfully login"){
        setAlertmsg("login successfully!");
        registration("/emailotpverify");
      }else if(data.data.error === "Invalid password"){
        setAlertmsg("Invalid password!");
      }else if(data.data.error === "User does not exist"){
        setAlertmsg("User does not exist!");
      }
    })
    
  }

  return (
    <>
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
                  onChange={(e)=>setEmail(e.target.value)}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true }]}
                  onChange={(e)=>setPassword(e.target.value)}
                >
                  <Input />
                </Form.Item>

                <Form.Item style={{ float: "right", overflowX: "hide" }}>
                  <Button type="primary" htmlType="submit" onClick={userLogin}>
                    Login
                  </Button>

                  <br></br>
                  <Form.Item style={{ color: "#007DFE" }}>
                    <a onClick={() => registration("/registration")}>
                      Create New Account?
                    </a>
                    <p>{alertmsg}</p>
                  </Form.Item>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Login;
