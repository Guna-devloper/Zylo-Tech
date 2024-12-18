import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import logo from "../Assets/zylo-logo.png"; // Replace with your logo path
import "./CustomNavbar.css";

const CustomNavbar = () => {
  console.log("navbar------>>>>>")
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <h1>welcome</h1>
      <Container>
        {/* Logo */}
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex align-items-center">
            <img src={logo} alt="Zylo LMS Logo" className="navbar-logo" />
            <span className="navbar-brand-name">Zylo LMS</span>
          </Navbar.Brand>
        </LinkContainer>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-custom">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard">
              <Nav.Link className="nav-link-custom">Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/live-class">
              <Nav.Link className="nav-link-custom">Live Classes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/quiz">
              <Nav.Link className="nav-link-custom">Quizzes</Nav.Link>
            </LinkContainer>

            {/* Dropdown for User Actions */}
            <NavDropdown
              title={
                <span className="d-flex align-items-center">
                  <FaUserCircle size={20} className="me-2" />
                  Account
                </span>
              }
              id="basic-nav-dropdown"
              className="nav-link-custom"
            >
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/settings">
                <NavDropdown.Item>Settings</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/login">
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            {/* CTA Button */}
            <LinkContainer to="/signup">
              <Button variant="primary" className="signup-button ms-3">
                Sign Up
              </Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
