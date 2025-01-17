import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import "./Enroll.css";
import enroll from "../Assets/enroll1.png";

const Enroll = () => {
  const location = useLocation();
  const { course } = location.state || { course: "Unknown Course" }; // Fallback in case no course is passed

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEnroll = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare email template parameters
    const templateParams = {
      course_name: course,
      user_first_name: formDetails.firstName,
      user_last_name: formDetails.lastName,
      user_email: formDetails.email,
      user_phone: formDetails.phone,
      additional_info: formDetails.additionalInfo,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_pcjc4wd", // Replace with your EmailJS Service ID
        "template_nbwvjd5", // Replace with your EmailJS Template ID
        templateParams,
        "FFvXmDwhT0OS_gZXk" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          toast.success("Enrollment details successfully sent! Check your email for confirmation.", {
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
        },
        (error) => {
          setIsSubmitting(false);
          toast.error("Failed to send enrollment details. Please try again later.", {
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
    <div className="enroll-course-container">
      <h1 className="text-center">Enroll in {course}</h1>

      {/* Course Details Section */}
      <Card className="course-details-card">
        <Card.Img
          variant="top"
          src={enroll}
          alt="Course Image"
          className="course-image"
        />
        <Card.Body>
          <Card.Title>{course}</Card.Title>
          <Card.Text>
            This is a detailed description of the "{course}" course. Learn from
            the best instructors and improve your skills in this field. Duration:
            6 weeks | Level: Intermediate
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Enrollment Form */}
      <div className="enrollment-form">
        <h3>Fill out your details to enroll</h3>
        <Form onSubmit={handleEnroll}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formDetails.firstName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formDetails.lastName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formDetails.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formAdditionalInfo">
            <Form.Label>Additional Information</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tell us why you're interested in this course (optional)"
              name="additionalInfo"
              value={formDetails.additionalInfo}
              onChange={handleInputChange}
            />
          </Form.Group>
          <button className="enroll-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Enroll Now"}
          </button>
        </Form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Enroll;
