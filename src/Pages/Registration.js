import React from "react";
import loginImages from "../images/5035121.jpg";

import "../shared/menu.css";
import { Form, Input, Button, Divider } from "antd";
import { Row, Col, Image } from "antd";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const login = useNavigate();

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
                  label="Email"
                  name="username"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Re-Type Password"
                  name="Re-Type password"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item style={{ float: "right", overflowX: "hide" }}>
                  <Button type="primary" htmlType="submit">
                    Registration
                  </Button>
                  <br></br>
                  <Form.Item style={{ color: "#007DFE" }}>
                    <a onClick={() => login("/login")}>Already Register ?</a>
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

export default Registration;
