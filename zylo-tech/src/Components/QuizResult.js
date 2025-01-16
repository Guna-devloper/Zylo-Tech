import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const QuizResult = () => {
  const location = useLocation();
  const { score } = location.state;
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
      <h2 className="text-center">Quiz Results</h2>

      {/* Confetti effect */}
      {isConfettiVisible && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Card.Title className="text-center">
                  <h3>Your Score: {score} out of 35</h3>
                </Card.Title>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Card.Text className="text-center">
                  Great job! Keep up the learning and keep improving.
                </Card.Text>
              </motion.div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizResult;
