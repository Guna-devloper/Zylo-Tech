import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Enroll.css";
import enroll from "../Assets/enroll1.png";

const Enroll = () => {
  const location = useLocation();
  const { course } = location.state || { course: "Unknown Course" }; // Fallback in case no course is passed

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
          alert("Enrollment details successfully sent! Check your email for confirmation.");
        },
        (error) => {
          setIsSubmitting(false);
          alert("Failed to send enrollment details. Please try again later.");
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
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Enroll Now"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Enroll;
