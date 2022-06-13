import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Footer } = Layout;
const Footer1 = () => {
  return (
    <Footer style={{ textAlign: "center", marginBottom: 0 }}>
      Investment Portal ©2021 Created by W3s
    </Footer>
  );
};

export default Footer1;
