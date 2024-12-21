import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar"; // Make sure Navbar uses LinkContainer
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import Course from "./Components/Course";
import Coding from "./Components/Coding";
import Enroll from "./Components/Enroll";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course" element={<Course />} />
        <Route path="/coding" element={<Coding userId="12345" />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
            <Footer />

    </BrowserRouter>
    
  );
}

export default App;
