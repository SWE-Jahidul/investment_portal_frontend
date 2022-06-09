import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import EmailOTPVerify from "./Pages/EmailOTPVerify";
import Test from "./test/Test";
import Profile from "./Pages/Profile";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {

  return (
    <div className="App">
      
        <Routes>
          
          {/* <Route path="/" element={<Home />} /> */}
          
          
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home/>} /> 
        </Routes>
      
    </div>
  );
}

export default App;
