import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import ForgotPass from "./Pages/ForgotPass";
import Home from "./Pages/Home";

const RouteFile = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/forgot" element={<ForgotPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteFile;
