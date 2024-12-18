import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./SignUp.css";

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Call your API for signup
  };

  const password = watch("password"); // Example of using `watch` for password validation

  return (
    <Container className="signup-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Sign Up</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <Alert variant="danger">{errors.name.message}</Alert>}
            </Form.Group>

            {/* Email Field */}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
              />
              {errors.password && <Alert variant="danger">{errors.password.message}</Alert>}
            </Form.Group>

            {/* Confirm Password Field */}
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  validate: (value) => value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && <Alert variant="danger">{errors.confirmPassword.message}</Alert>}
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
