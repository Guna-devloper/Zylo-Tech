import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope,FaPhone } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo and Description */}
          <Col md={4} className="footer-column">
            <h5 className="footer-title">Zylo Tech</h5>
            <p className="footer-description">
              Empowering learning through technology. Zylo Tech provides seamless access to courses, live classes, and resources to help you achieve your goals.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="footer-column">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
            <Link to="/" className="nav-link">
          Home
        </Link>
           
                      <Link to="/course" className="nav-link">
                      Courses
                      </Link>
                      <Link to="/quiz" className="nav-link">
                        Quizzes
                      </Link>
                      <Link to="/coding" className="nav-link">
                        PlayGround
                      </Link>
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
            </ul>
          </Col>

          {/* Contact and Social Media */}
          <Col md={4} className="footer-column">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-contact">
              <FaEnvelope />zylotechofficial@gmail.com
            </p>
            <p className="footer-contact">
  <FaPhone /> +91 8220775520
</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/zylo-tech-854312347/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/zylo_tech_official/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="footer-copyright">
              &copy;2024-{new Date().getFullYear()} Zylo Tech. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
