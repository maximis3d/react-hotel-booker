import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import { Auth } from "./components/auth/Auth";
import { Signup } from "./pages/signup/Signup";
import { Login } from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
