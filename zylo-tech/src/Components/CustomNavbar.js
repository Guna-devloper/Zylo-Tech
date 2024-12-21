import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../Assets/zylo-logo.png"; // Replace with your logo path
import "./CustomNavbar.css";

const CustomNavbar = () => {
  return (
    <header className="custom-navbar">
      {/* Logo Section */}
      <div className="navbar-logo-container">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Zylo LMS Logo" className="navbar-logo" />
          <span className="navbar-brand-name">Zylo Tech</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/courses/:id" className="nav-link">
        Course
        </Link>
        <Link to="/quiz" className="nav-link">
          Quizzes
        </Link>
        <Link to="/coding" className="nav-link">
          PlayGround
        </Link>


        {/* Dropdown Menu */}
        <div className="nav-dropdown">
          <button className="dropdown-toggle">
            <FaUserCircle size={20} className="me-2" />
            Account
          </button>
          <div className="dropdown-menu">
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <Link to="/settings" className="dropdown-item">
              Settings
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="/login" className="dropdown-item">
              Logout
            </Link>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <Link to="/signup" className="signup-button">
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default CustomNavbar;
