import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/zlogo.png";
import emailjs from "emailjs-com";
import { Modal, Form, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import "./CustomNavbar.css";

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    services: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare email template parameters
    const templateParams = {
      user_first_name: formData.firstName,
      user_last_name: formData.lastName,
      user_email: formData.email,
      user_mobile: formData.mobileNumber,
      user_services: formData.services,
      user_message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_zslwe4i", // Replace with your EmailJS Service ID
        "template_t0r1jx6", // Replace with your EmailJS Template ID
        templateParams,
        "FFvXmDwhT0OS_gZXk" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast.success("Your request has been successfully submitted! We will get back to you soon.", {
            position: "top-right", // Toast position
            autoClose: 5000, // Auto close after 5 seconds
            hideProgressBar: true,
            style: {
              backgroundColor: "beige", // Green background for success
              color: "green", // White text
              borderRadius: "10px",
              padding: "10px 20px",
              fontWeight: "italic",
            },
          });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            services: "",
            message: "",
          });
          setShowModal(false);
        },
        (error) => {
          setIsSubmitting(false);
          toast.error("Failed to send your request. Please try again.", {
            position: "top-right", // Toast position
            autoClose: 5000, // Auto close after 5 seconds
            hideProgressBar: true,
            style: {
              backgroundColor: "beige", // Red background for error
              color: "red", // White text
              borderRadius: "10px",
              padding: "10px 20px",
              fontWeight: "italic",
            },
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

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
        <Link to="#" className="nav-btn" onClick={() => setShowModal(true)}>
          Get Demo
        </Link>
      </nav>

      {/* Modal for Get Demo Form */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Get Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your mobile number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formServices">
              <Form.Label>Training Services</Form.Label>
              <Form.Control
                as="select"
                name="services"
                value={formData.services}
                onChange={handleChange}
              >
                <option>Select...</option>
                <option>Front-End</option>
                <option>Back-End</option>
                <option>Full-Stack</option>
                <option>Cloud-Computing</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <button className="demo-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Toast Container */}
      <ToastContainer />
    </header>
  );
};

export default CustomNavbar;
