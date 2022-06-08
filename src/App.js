import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import EmailOTPVerify from "./Pages/EmailOTPVerify";
import Test from "./test/Test";

function App() {

  return (
    <div className="App">
      
        <Routes>
          
          {/* <Route path="/" element={<Home />} /> */}
          
          
          <Route path="/" element={<Login />} />
          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/registration" element={<Registration />} />
          {/* <Route path="emailotpverify" element={<EmailOTPVerify/>}/> */}
          <Route path="/home" element={<Home/>} /> 
          {/* <Route path="/test" element={<Test/>} /> */}
        </Routes>
      
    </div>
  );
}

export default App;
