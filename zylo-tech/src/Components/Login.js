import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Login.css"; // Import external CSS file
import logo from "../Assets/zylo-logo.png"; // Add your logo image to assets folder

const Login = () => {
  return (
    <div className="login-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col md={6} className="mx-auto">
            <Card className="shadow-lg login-card">
              <Card.Body>
                <div className="text-center mb-4">
                  <img src={logo} alt="Zylo LMS Logo" className="login-logo" />
                  <h2 className="login-title">Welcome Back</h2>
                  <p className="login-subtitle">Login to your account</p>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="form-input"
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      className="login-button"
                    >
                      Login
                    </Button>
                  </div>
                </Form>
                <div className="text-center mt-3">
                  <a href="/forgot-password" className="text-decoration-none">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center mt-2">
                  <p>
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-decoration-none">
                      Sign Up
                    </a>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
