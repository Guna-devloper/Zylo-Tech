import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Modal, Badge } from "react-bootstrap";
import { FaUserEdit, FaGraduationCap, FaBook, FaPen } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditModalClose = () => setShowEditModal(false);
  const handleEditModalShow = () => setShowEditModal(true);
useEffect(() => {
  
  window.scrollTo(0, 0);


}, [])
  const handleSaveChanges = () => {
    // Save profile changes logic (API integration can be added here)
    setShowEditModal(false);
  };

  return (
    <Container fluid className="profile-page">
      <Row>
        <Col md={4}>
          {/* User Info Card */}
          <Card className="profile-card">
            <Card.Body className="text-center">
              <div className="profile-avatar">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile Avatar"
                  className="rounded-circle"
                />
              </div>
              <h3 className="profile-name">John Doe</h3>
              <p className="profile-email">johndoe@example.com</p>
              <Button variant="primary" onClick={handleEditModalShow} className="edit-profile-btn">
                <FaUserEdit /> Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          {/* Course Stats and Achievements */}
          <Card className="stats-card">
            <Card.Body>
              <h4 className="section-title">Course Progress</h4>
              <Row>
                <Col sm={6} className="mb-3">
                  <Card className="stat-item">
                    <Card.Body>
                      <FaGraduationCap className="stat-icon" />
                      <h5>Courses Completed</h5>
                      <p>
                        <Badge bg="success">5</Badge>
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} className="mb-3">
                  <Card className="stat-item">
                    <Card.Body>
                      <FaBook className="stat-icon" />
                      <h5>Courses Enrolled</h5>
                      <p>
                        <Badge bg="info">8</Badge>
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <h4 className="section-title">Achievements</h4>
              <ul className="achievements-list">
                <li>
                  <FaPen className="achievement-icon" /> Completed React Basics
                </li>
                <li>
                  <FaPen className="achievement-icon" /> Scored 95% in JavaScript Quiz
                </li>
                <li>
                  <FaPen className="achievement-icon" /> Top Performer in Advanced CSS
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Edit Profile Modal */}
      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Profile;
