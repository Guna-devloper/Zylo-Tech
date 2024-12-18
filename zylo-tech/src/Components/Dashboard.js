import React from "react";
import { Container, Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import { FaUserGraduate, FaBook, FaChalkboardTeacher, FaBell } from "react-icons/fa";
import "./Dashboard.css"; // External CSS for dashboard

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Container fluid>
        {/* Header Section */}
        <Row className="mb-4">
          <Col>
            <h1 className="dashboard-title">Welcome to Zylo LMS Dashboard</h1>
            <p className="dashboard-subtitle">
              Your one-stop solution for managing courses, live classes, and more!
            </p>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="mb-4">
          <Col lg={3} md={6} sm={12}>
            <Card className="dashboard-card">
              <Card.Body>
                <FaUserGraduate className="dashboard-icon" />
                <h5>200+</h5>
                <p>Enrolled Students</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="dashboard-card">
              <Card.Body>
                <FaBook className="dashboard-icon" />
                <h5>15</h5>
                <p>Available Courses</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="dashboard-card">
              <Card.Body>
                <FaChalkboardTeacher className="dashboard-icon" />
                <h5>10</h5>
                <p>Active Teachers</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="dashboard-card">
              <Card.Body>
                <FaBell className="dashboard-icon" />
                <h5>5</h5>
                <p>New Announcements</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Course Progress Section */}
        <Row className="mb-4">
          <Col>
            <h4 className="section-title">Your Course Progress</h4>
            <Card className="progress-card">
              <Card.Body>
                <h5>React for Beginners</h5>
                <ProgressBar now={75} label={`75%`} className="mb-3" />
                <h5>JavaScript Essentials</h5>
                <ProgressBar now={50} label={`50%`} className="mb-3" />
                <h5>Advanced CSS Techniques</h5>
                <ProgressBar now={30} label={`30%`} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Quick Actions Section */}
        <Row>
          <Col>
            <h4 className="section-title">Quick Actions</h4>
            <div className="quick-actions">
              <Button variant="primary" className="quick-action-btn">
                Create a New Course
              </Button>
              <Button variant="success" className="quick-action-btn">
                Schedule a Live Class
              </Button>
              <Button variant="info" className="quick-action-btn">
                View All Students
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
