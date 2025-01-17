import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Course.css";
import course from "../Assets/course5.png";
const Course = () => {
  const navigate = useNavigate();

  const handleEnroll = (courseName) => {
    navigate("/enroll", { state: { course: courseName } });
  };
const handleViewall = ()=>{
  window.scrollTo(0, 0);

}
useEffect(() => {
  
  window.scrollTo(0, 0);


}, [])
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  // Courses List
  const courses = [
    "C Programming",
    "C++ Programming",
    "Java Development",
    "Python Programming",
    "HTML Fundamentals",
    "CSS Styling",
    "JavaScript Essentials",
    "React.js fundamentals",
    "Node.js Development",
    "SQL Basics",
    "MySQL Database",
    "MongoDB",
    "Cloud Computing",
    "Data Structures",
    "Software Testing",
    "Spring Boot",
  ];

  return (
    <motion.div className="course-page" initial="hidden" animate="visible" exit="hidden">
      {/* Hero Section */}
      <motion.div className="course-hero" variants={fadeIn}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.h1 className="course-title" variants={fadeIn}>
                Explore Our Courses
              </motion.h1>
              <motion.p className="course-description" variants={fadeIn}>
                Unlock your potential with our expert-designed courses. Whether you're a beginner
                or advanced learner, we have something for you.
              </motion.p>
            </Col>
            <Col md={6}>
              <motion.img
                src={course}
                alt="Courses"
                className="course-image"
                variants={scaleUp}
              />
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Courses List Section */}
      <motion.div className="courses-list" variants={fadeIn} >
        <Container>
          <h2 className="section-title text-center">Our Courses</h2>
          <Row>
            {courses.map((course, index) => (
              <Col md={4} className="mb-4" key={index}>
  <motion.div
    className="course-card"
    variants={scaleUp}
    whileHover={{ scale: 1.1 }}
  >
    <Card>
      <Card.Body>
        <h5>{course}</h5>
        <p>
          Learn {course} with hands-on projects and expert mentorship to boost your career.
        </p>
        <button
          className="enroll-button"
          onClick={() => handleEnroll(course)}
        >
          Enroll Now
        </button>
      </Card.Body>
    </Card>
  </motion.div>
</Col>

            ))}
          </Row>
        </Container>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div className="cta-section" variants={fadeIn}>
        <Container>
          <Row className="text-center">
            <Col>
              <h2>Join Thousands of Learners Today</h2>
              <button className="submit-btn"  onClick={() => handleViewall("General Enrollment")}>
                View All Courses
              </button>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default Course;
