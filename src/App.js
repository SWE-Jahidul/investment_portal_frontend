import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Home */}
          <Route path="/home" element={<Home />} />
          {/* Login */}
          <Route path="login" element={<Login />} />
          {/* Registration  */}
          <Route path="registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
