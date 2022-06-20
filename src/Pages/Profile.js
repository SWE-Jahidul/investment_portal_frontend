import React, { useEffect, useState } from "react";
import { UserState } from "../Context/UserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Col, Layout, PageHeader, Row } from "antd";

import VerticleNavBar from "../shared/VerticleNavBar";
import Header1 from "../shared/Header1";
import Footer1 from "../shared/Footer1";

const { Content } = Layout;

export default function Profile() {
  const loginpage = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    if (!userInfo) {
      loginpage("/");
    }
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
        >
          <Breadcrumb
            style={{
              backgroundColor: "white",
              padding: 15,
            }}
          >
            <Breadcrumb.Item
              style={{
                fontSize: 22,
              }}
            >
              {" "}
              Profile{" "}
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
            >
              <div
                style={{
                  marginTop: 15,
                  backgroundColor: "white",
                  paddingTop: 10,
                  paddingBottom: 10,
                  textAlign: "left",
                }}
              >
                <div style={{
                  marginLeft: 15
                }}>
                 
                  <h1>Name: {userInfo.name}</h1>
                  <h1>Email: {userInfo.email}</h1>
                </div>
              </div>
            </Col>
          </Row>
        </Content>

        <Footer1 style={{ overflowX: "hide" }}></Footer1>
      </Layout>
    </Layout>
  );
}
