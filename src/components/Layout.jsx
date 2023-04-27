import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AuthBox from "./authBox/AuthBox";


const Layout = () => {
    return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthBox />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<AuthBox register />} />
        <Route path="/login" element={<AuthBox />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout
