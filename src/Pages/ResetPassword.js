import React, { useEffect, useState } from "react";
import { UserState } from "../Context/UserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Layout, PageHeader } from "antd";
import VerticleNavBar from "../shared/VerticleNavBar";
import Header1 from "../shared/Header1";
import Footer1 from "../shared/Footer1";
import { Base64 } from "js-base64";
import { Avatar, Card } from "antd";
import Form from "antd/lib/form/Form";
import Input from "antd/lib/input/Input";
import { Button, Row, Col, Alert } from "antd";

const { Content } = Layout;

export default function ResetPassword() {
  const loginpage = useNavigate();
  const [oldpassword, setOldPassword] = useState();
  const [newpassword, setNewPassword] = useState();
  const [confirmnewpassword, setConfirmNewPassword] = useState();
  const [userdata, setUserData] = useState({
    id: "",
    password: "",
  });
  const [alertmsg, setAlertmsg] = useState();

  const ResetPasswordHandler = () => {
    //console.log(userdata);
    if (!oldpassword || !newpassword || !confirmnewpassword) {
      setAlertmsg("Plz fill up all fields");
    } else if (newpassword !== confirmnewpassword) {
      setAlertmsg("New password not matched!");
    } else if (newpassword.length < 8) {
      setAlertmsg("Password is too short!");
    } else {
      const DecodePass = Base64.decode(userdata.password);

      if (oldpassword !== DecodePass) {
        setAlertmsg("Invalid old password");
      } else {
        const id = userdata.id;
        const password = newpassword;
        axios
          .put("http://localhost:5000/reset-password", {
            id,
            password,
          })
          .then(function (data) {
            console.log(data.data.message);
            if (data.data.message === "Data Updated Successfully") {
              loginpage("/");
            } else {
              setAlertmsg("something wrong! try again later");
            }
          });
      }
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const id = userInfo.id;
    if (!userInfo) {
      loginpage("/");
    }
    axios
      .post("https://investmentportal.herokuapp.com/getrecordbyid", { id })
      .then(function (data) {
        console.log(data.data.data);
        setUserData({
          ...userdata,
          id: data.data.data.ID,
          password: data.data.data.Password,
        });
      });
  }, []);

  return (
    <Layout style={{ overflowX: "hide" }}>
      <VerticleNavBar style={{ overflowX: "hide" }}></VerticleNavBar>

      <Layout>
        <Header1 style={{ overflowX: "hide", paddingBottom: 40 }}></Header1>

        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            marginTop: 60,
            padding: 24,
            minHeight: 775,
          }}
          i
        >
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 25,
              justifyContent: "center",
              paddingY: 40,
            }}
          >
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
            >
              <Card>
                {/*Reset Password header section  */}
                <div>
                  <h2> Reset Password</h2>{" "}
                </div>

                <div>
                  <div>
                    <Form label="Old Password" name="oldpassword">
                      <Input
                        type="password"
                        placeholder="Old Password"
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <br />
                      <br />
                      <Input
                        type="password"
                        placeholder="New Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <br />
                      <br />
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                      />
                    </Form>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <Button type="primary" onClick={ResetPasswordHandler}>
                      Reset Now
                    </Button>
                  </div>
                </div>
              </Card>

              <Alert message={alertmsg} type="warning" />
            </Col>
          </Row>

          {/* OLD CODE START  */}
          {/* <h1>Reset Password</h1>
          <div style={{marginTop:"5px"}}>
              <input type="password" onChange={(e)=>setOldPassword(e.target.value)} placeholder="Old Password"/>
              <input type="password" onChange={(e)=>setNewPassword(e.target.value)} placeholder="New Password"/>
              <input type="password" onChange={(e)=>setConfirmNewPassword(e.target.value)} placeholder="Confirm Password"/>
          </div>
          <div>
              <button onClick={ResetPasswordHandler} style={{marginTop:"10px"}}>Reset Now</button>
          </div>
          <div style={{marginTop:"20px"}}><p>{alertmsg}</p></div> */}

          {/* OLD CODE END  */}
        </Content>

        <Footer1 style={{ overflowX: "hide" }}></Footer1>
      </Layout>
    </Layout>
  );
}
