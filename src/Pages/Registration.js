import React, { useState } from "react";
import loginImages from "../images/5035121.jpg";
import "../shared/menu.css";
import { Form, Input, Button, Divider } from "antd";
import { Row, Col, Image } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const login = useNavigate();

  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [picture, setPicture] = useState();
  const [alertmsg, setAlertmsg] = useState();

  const UserRegistration = () => {
    if (!firstname || !lastname || !email || !password || !confirmpassword) {
      setAlertmsg("Plz fill up all fields!");
    } else if (password !== confirmpassword) {
      console.log("password not matched");
      setAlertmsg("password not matched!");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setAlertmsg("Invalid Email entered");
    } else if (password.length < 8) {
      setAlertmsg("Password is too short!");
    } else {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var today = new Date();
      var date =
        today.getDate() +
        "-" +
        monthNames[today.getMonth()] +
        "-" +
        today.getFullYear();
      axios
        .post("https://investmentportal.herokuapp.com/addrecord", {
          firstname,
          lastname,
          email,
          password,
          date,
        })
        .then(function (data) {
          console.log(data.data.message);
          if (data.data.message === "Data Added Successfully") {
            setAlertmsg("Your registration created successfully!");
          } else {
            setAlertmsg("Server error! plz try again after sometimes");
          }
        });
    }
  };

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
          {/* <h2 style={{marginTop:30, textAlign: "center" , marginLeft:20}}>Registration </h2> */}
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
                  label="First Name"
                  name="firstname"
                  rules={[{ required: true }]}
                  onChange={(e) => setFirstName(e.target.value)}
                >
                  <Input placeholder="Input Your First Name"/>
                </Form.Item>

                <Form.Item
                  label="Last Name"
                  name="lastname"
                  rules={[{ required: true }]}
                  onChange={(e) => setLastName(e.target.value)}
                >
                  <Input placeholder="Input Your Last Name"/>
                </Form.Item>

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
                  <Input.Password placeholder="Input Your Password" />
                </Form.Item>

                <Form.Item
                  label="Re-Type Password"
                  name="Re-Type password"
                  rules={[{ required: true }]}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                >
                  <Input.Password placeholder="Input Your Re-Password" />
                </Form.Item>

                <Form.Item style={{ float: "right", overflowX: "hide" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={UserRegistration}
                  >
                    Registration
                  </Button>
                  <br></br>
                  <Form.Item style={{ color: "#007DFE" }}>
                    <a onClick={() => login("/")}>Already Register ?</a>
                  </Form.Item>
                </Form.Item>
              </Form>
              <p>{alertmsg}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Registration;
