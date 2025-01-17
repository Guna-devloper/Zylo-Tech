import React, { useEffect } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { FaChalkboardTeacher, FaBookOpen, FaVideo, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Home.css";
import web from "../Assets/web2.png";
import data from "../Assets/datasc.png";
import ux from "../Assets/ui.png";

const Home = () => {
  console.log("home------>>>>>>");
useEffect(() => {
  window.scrollTo(0, 0);
}, [])
  // Animations for Features and Testimonial Sections
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="home-page">
      {/* Carousel Section */}
      <Carousel className="carousel-section">
        <Carousel.Item>
          <motion.img
            className="d-block w-100"
            src={web}
            alt="Featured Course 1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <Carousel.Caption>
            <h3>Master Web Development</h3>
            <p>Learn the latest web technologies and become a professional developer.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <motion.img
            className="d-block w-100"
            src={data}
            alt="Featured Course 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <Carousel.Caption>
            <h3>Data Science Mastery</h3>
            <p>Unlock the power of data with our comprehensive data science course.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <motion.img
            className="d-block w-100"
            src={ux}
            alt="Featured Course 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
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
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Zylo LMS?
          </motion.h2>
          <Row>
            {[
              { icon: <FaChalkboardTeacher />, title: "Expert Instructors", desc: "Learn from industry-leading professionals." },
              { icon: <FaBookOpen />, title: "Diverse Courses", desc: "Access a wide variety of subjects and skills." },
              { icon: <FaVideo />, title: "Live Classes", desc: "Participate in interactive live sessions." },
              { icon: <FaGraduationCap />, title: "Certification", desc: "Earn certificates to showcase your skills." },
            ].map((feature, index) => (
              <Col md={3} sm={6} className="mb-4" key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="feature-card text-center">
                    <Card.Body>
                      <div className="feature-icon">{feature.icon}</div>
                      <h5 className="feature-title">{feature.title}</h5>
                      <p className="feature-description">{feature.desc}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <Container>
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Students Say
          </motion.h2>
          <Row>
            {[
              { text: "Zylo LMS helped me land my dream job! The courses are well-structured and the instructors are fantastic.", name: "Vignesh M", role: "Web Developer" },
              { text: "The live classes were so interactive and engaging. I highly recommend this platform to all learners!", name: "Arul S", role: "Data Scientist" },
              { text: "Zylo LMS provided me with the flexibility to learn at my own pace and earn certifications that boosted my career.", name: "Vishnu R", role: "Graphic Designer" },
            ].map((testimonial, index) => (
              <Col md={4} className="mb-4" key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="testimonial-card">
                    <Card.Body>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
