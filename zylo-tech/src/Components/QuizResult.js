import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa"; // Add a trophy icon for a celebratory touch

const QuizResult = () => {
  const location = useLocation();
  const { score, quizResults } = location.state;
  const [isConfettiVisible, setConfettiVisible] = useState(false);

  // Start confetti effect after component mounts
  useEffect(() => {
    setConfettiVisible(true);
    setTimeout(() => {
      setConfettiVisible(false);
    }, 5000); // Confetti will show for 5 seconds
  }, []);

  return (
    <Container>
      <h2 className="text-center mt-4 mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Quiz Results
        </motion.div>
      </h2>

      {/* Confetti effect */}
      {isConfettiVisible && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg rounded">
            <Card.Body>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Card.Title className="text-center">
                  <h3>
                    <FaTrophy style={{ color: "#FFD700", fontSize: "2rem" }} /> Your Score: {score} out of {quizResults.reduce((sum, topic) => sum + topic.total, 0)}
                  </h3>
                </Card.Title>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Card.Text className="text-center mb-4">
                  Great job! Keep up the learning and keep improving.
                </Card.Text>
              </motion.div>

              {/* Expandable section with quiz feedback */}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Review Your Answers</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Here's how you performed in each topic:</p>
                    <ul>
                      {quizResults.map((result, index) => (
                        <li key={index}>
                          <strong>{result.topic}:</strong> Correct Answers: {result.correct}/{result.total}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Motivational quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, translateY: 20 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <div className="text-center mt-4">
                  <Button variant="success" size="lg" onClick={() => window.location.reload()}>
                    Try Another Quiz
                  </Button>
                </div>
                <p className="text-center mt-3" style={{ fontStyle: "italic", color: "#555" }}>
                  "The future depends on what you do today." – Mahatma Gandhi
                </p>
              </motion.div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizResult;
