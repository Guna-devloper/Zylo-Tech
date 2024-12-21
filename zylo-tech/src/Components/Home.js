import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { FaChalkboardTeacher, FaBookOpen, FaVideo, FaGraduationCap } from "react-icons/fa";
import "./Home.css";
import web from "../Assets/web2.png"
import data from "../Assets/datasc.png"
import ux from "../Assets/ui.png"

const Home = () => {
    console.log("home------>>>>>>")
  return (
    <div className="home-page">
      {/* Carousel Section */}
      <Carousel className="carousel-section">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={web}
            alt="Featured Course 1"
          />
          <Carousel.Caption>
            <h3>Master Web Development</h3>
            <p>Learn the latest web technologies and become a professional developer.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data}
            alt="Featured Course 2"
          />
          <Carousel.Caption>
            <h3>Data Science Mastery</h3>
            <p>Unlock the power of data with our comprehensive data science course.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ux}
            alt="Featured Course 3"
          />
          <Carousel.Caption>
            <h3>Design Like a Pro</h3>
            <p>Learn UI/UX design principles and create stunning user experiences.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Features Section */}
      <div className="features-section">
        <Container>
          <h2 className="section-title text-center">Why Choose Zylo LMS?</h2>
          <Row>
            <Col md={3} sm={6} className="mb-4">
              <Card className="feature-card text-center">
                <Card.Body>
                  <FaChalkboardTeacher className="feature-icon" />
                  <h5 className="feature-title">Expert Instructors</h5>
                  <p className="feature-description">Learn from industry-leading professionals.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Card className="feature-card text-center">
                <Card.Body>
                  <FaBookOpen className="feature-icon" />
                  <h5 className="feature-title">Diverse Courses</h5>
                  <p className="feature-description">Access a wide variety of subjects and skills.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Card className="feature-card text-center">
                <Card.Body>
                  <FaVideo className="feature-icon" />
                  <h5 className="feature-title">Live Classes</h5>
                  <p className="feature-description">Participate in interactive live sessions.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Card className="feature-card text-center">
                <Card.Body>
                  <FaGraduationCap className="feature-icon" />
                  <h5 className="feature-title">Certification</h5>
                  <p className="feature-description">Earn certificates to showcase your skills.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <Container>
          <h2 className="section-title text-center">What Our Students Say</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <p className="testimonial-text">
                    "Zylo LMS helped me land my dream job! The courses are well-structured and the instructors are fantastic."
                  </p>
                  <h5 className="testimonial-name">John Doe</h5>
                  <p className="testimonial-role">Web Developer</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <p className="testimonial-text">
                    "The live classes were so interactive and engaging. I highly recommend this platform to all learners!"
                  </p>
                  <h5 className="testimonial-name">Jane Smith</h5>
                  <p className="testimonial-role">Data Scientist</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <p className="testimonial-text">
                    "Zylo LMS provided me with the flexibility to learn at my own pace and earn certifications that boosted my career."
                  </p>
                  <h5 className="testimonial-name">Alex Johnson</h5>
                  <p className="testimonial-role">Graphic Designer</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
