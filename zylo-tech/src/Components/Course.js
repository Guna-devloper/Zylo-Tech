import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./Course.css";

const Course = () => {
  return (
    <div className="course-page">
      {/* Hero Section */}
      <div className="course-hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="course-title">Master React Development</h1>
              <p className="course-description">
                Learn React from scratch and build modern, responsive web applications with hands-on projects.
              </p>
              <Button variant="success" size="lg" className="enroll-button">
                Enroll Now
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="https://via.placeholder.com/600x400"
                alt="React Course"
                className="course-image"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Course Details Section */}
      <div className="course-details">
        <Container>
          <Row>
            {/* Left Column: Syllabus */}
            <Col md={8}>
              <h2 className="section-title">What You'll Learn</h2>
              <ListGroup as="ul" className="syllabus-list">
                <ListGroup.Item as="li">Introduction to React and JSX</ListGroup.Item>
                <ListGroup.Item as="li">Component-Based Architecture</ListGroup.Item>
                <ListGroup.Item as="li">State and Props Management</ListGroup.Item>
                <ListGroup.Item as="li">React Router for Navigation</ListGroup.Item>
                <ListGroup.Item as="li">API Integration and Data Fetching</ListGroup.Item>
                <ListGroup.Item as="li">Hooks: useState, useEffect, and more</ListGroup.Item>
                <ListGroup.Item as="li">Building and Deploying a Full React App</ListGroup.Item>
              </ListGroup>
            </Col>

            {/* Right Column: Course Info */}
            <Col md={4}>
              <Card className="course-info-card">
                <Card.Body>
                  <h5>Course Information</h5>
                  <p>
                    <strong>Duration:</strong> 8 Weeks
                  </p>
                  <p>
                    <strong>Level:</strong> Beginner to Advanced
                  </p>
                  <p>
                    <strong>Price:</strong> $199
                  </p>
                  <Button variant="primary" className="enroll-now-btn">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>

              <Card className="instructor-card mt-4">
                <Card.Body>
                  <h5>Instructor</h5>
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Instructor"
                    className="instructor-image"
                  />
                  <p className="instructor-name">John Doe</p>
                  <p className="instructor-bio">
                    John is a seasoned software engineer with 10+ years of experience in web
                    development and React.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Ratings and Reviews Section */}
      <div className="ratings-section">
        <Container>
          <h2 className="section-title text-center">Student Reviews</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="review-card">
                <Card.Body>
                  <h5>Alex Johnson</h5>
                  <div className="rating">
                    <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar />
                  </div>
                  <p className="review-text">
                    "This course gave me a solid understanding of React. The instructor explains everything so well!"
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="review-card">
                <Card.Body>
                  <h5>Jane Smith</h5>
                  <div className="rating">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                  <p className="review-text">
                    "Highly recommended! The syllabus is very well structured, and the hands-on projects are super helpful."
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <Container>
          <Row className="text-center">
            <Col>
              <h2>Join Thousands of Learners Today</h2>
              <Button variant="success" size="lg">
                Enroll in This Course
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Course;
