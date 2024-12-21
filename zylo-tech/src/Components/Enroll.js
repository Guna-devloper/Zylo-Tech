import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import "./Enroll.css";

const Enroll = () => {
  const handleEnroll = (e) => {
    e.preventDefault();
    alert("You have successfully enrolled in the course!");
  };

  return (
    <div className="enroll-course-container">
      <h1 className="text-center">Enroll in a Course</h1>

      {/* Course Details Section */}
      <Card className="course-details-card">
        <Card.Img
          variant="top"
          src="https://via.placeholder.com/800x300"
          alt="Course Image"
          className="course-image"
        />
        <Card.Body>
          <Card.Title>Course Title</Card.Title>
          <Card.Text>
            This is a brief description of the course. Learn from the best
            instructors and improve your skills in this field. Duration: 6
            weeks | Level: Intermediate
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
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enroll Now
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Enroll;
