import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./About.css";
import logo from "../Assets/zlogo.png"; 

const About = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="about-page"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Hero Section */}
      <motion.div 
        className="about-hero" 
        variants={fadeIn} 
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.h1 
                className="about-title" 
                variants={fadeIn} 
              >
                Welcome to ZyloTech
              </motion.h1>
              <motion.p 
                className="about-description" 
                variants={fadeIn} 
              >
                We are an Edu-Tech company committed to transforming education
                and empowering students to achieve their dreams. Whether it's
                learning new skills, creating innovative projects, or securing
                top placements, ZyloTech is here to guide you every step of the
                way.
              </motion.p>
            </Col>
            <Col md={6}>
              <motion.img
                src={logo}
                alt="About ZyloTech"
                className="about-image"
                variants={scaleUp}
              />
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div 
        className="mission-section" 
        variants={fadeIn} 
      >
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                At ZyloTech, our mission is to provide students with the
                resources, mentorship, and opportunities they need to excel in
                their academic and professional journeys. We believe in turning
                ideas into reality and shaping the future of education.
              </p>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="services-section" 
        variants={fadeIn} 
    // Jumping effect on hover
      >
        <Container>
          <h2 className="section-title text-center">What We Offer</h2>
          <Row>
            <Col md={4} className="mb-4">
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Card className="service-card">
                  <Card.Body>
                    <h5>Comprehensive Courses</h5>
                    <p>
                      Learn in-demand skills with our wide range of courses
                      designed to prepare you for the future.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Card className="service-card">
                  <Card.Body>
                    <h5>Final-Year Project Assistance</h5>
                    <p>
                      Bring your ideas to life with our expert guidance and
                      hands-on project support.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div variants={scaleUp} whileHover={{ scale: 1.1 }}>
                <Card className="service-card">
                  <Card.Body>
                    <h5>Internship Opportunities</h5>
                    <p>
                      Gain real-world experience with internships across various
                      roles and industries.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div 
        className="cta-section" 
        variants={fadeIn} 
      >
        <Container>
          <Row className="text-center">
            <Col>
              <h2>Ready to Transform Your Future?</h2>
              <p>
                Join ZyloTech today and unlock your potential with our
                industry-leading courses, internships, and resources.
              </p>
              <Button variant="success" size="lg">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default About;
