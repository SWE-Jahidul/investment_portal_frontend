import React, { useEffect, useState } from "react";
import { UserState } from "../Context/UserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Layout,
  PageHeader,
  Row,
  message,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

import VerticleNavBar from "../shared/VerticleNavBar";
import Header1 from "../shared/Header1";
import Footer1 from "../shared/Footer1";

const { Content } = Layout;

const Home = () => {
  const loginpage = useNavigate();
  const [userinfo, setUserInfo] = useState();
  const [filedata,setFileData] = useState();
  // const {user} = UserState();
  // const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  // console.log(userInfo);
  // const userId = userInfo.data._id;
  // console.log(userInfo);
  // console.log(userInfo.data.email);

  const FileData = (e) => {
    console.log(e.target.files[0]);
    setFileData(e.target.files[0]);
  }

  const UploadFileHandler = (e) => {
    //let formData = new FormData();
    // formData.append("file", filename);
    // console.log(formData);
    

    e.preventDefault();

    //handle file data from the state before sending
    const data = new FormData();
    data.append('featuredImage', filedata);

    axios.post("http://localhost:5000/multerupload",data).then(function(data){
      console.log(data);
    })

    // fetch("http://localhost:5000/multerupload",{
    //   method: "POST",
    //   body: data,
    // })
    // .then((result)=>{
    //   console.log("File sent successfully");
    //   console.log(result);
    // })
    // .catch((err)=>{
    //   console.log(err.message);
    // })
    
  }

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    if (!userInfo) {
      loginpage("/");
    }

    if (userInfo) {
      //console.log(userInfo.id, userInfo.name, userInfo.email);
      setUserInfo({
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
      });
    } else {
      loginpage("/");
    }
  }, []);

  // File Upload

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
            minHeight: 745,
          }}
        >
          <Row  gutter={[16, 16]}>
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
            >
              <div style={{ backgroundColor: "white" ,padding:20}}>
              <form onSubmit={UploadFileHandler}>
              <input type="file" name="featuredImage" onChange={FileData}/>
              <br />
              <br />
              <button type="submit">Submit File</button>
              </form>
              <button onClick={()=>console.log(filedata)}>click me for test</button>
                {/* <Upload onChange={(e)=>setFilePath(e.target.value)}><Button icon={<UploadOutlined />} onClick={UploadFileHandler}>Click to Upload</Button></Upload> */}
              </div>
            </Col>

            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 12, offset: 4 }}
              md={{ span: 12, offset: 4 }}
              sm={{ span: 24, offset: 0 }}
              style={{ backgroundColor: "white" }}
            >
              <div  style={{padding:20}}>
                 All Documents Print Here
                 {/* <p>file path: {file}</p> */}
              </div>
             
            </Col>
          </Row>
        </Content>
        <Footer1 style={{ overflowX: "hide" }}></Footer1>
      </Layout>
    </Layout>
    // <div>
    //     dashboard page...
    //     <div>
    //     <h1>Name: {userinfo?.name}</h1>
    //     <h1>Email: {userinfo?.email}</h1>
    //     <img src='userInfo.picture'/>
    //     </div>
    //     <button onClick={logoutHandler}>LogOut</button>
    // </div>
  );
};

export default Home;
