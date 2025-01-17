// QuizResults.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaTrophy } from "react-icons/fa"; // Trophy icon
import Confetti from "react-confetti"; // Party popper effect
import "./Quiz.css"; // Make sure to import CSS for button styles

const QuizResults = () => {
  const location = useLocation();
  const { quizResults, score } = location.state || {}; // Get results and score from navigation state
  const navigate = useNavigate();

  const [showConfetti, setShowConfetti] = useState(false); // State for party popper effect

  // Motivational quotes array
  const motivationalQuotes = [
    "Great job! Keep up the hard work!",
    "You're doing amazing! Keep pushing forward!",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Believe in yourself and all that you are!",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow is our doubts of today.",
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  useEffect(() => {
    // Scroll to the top of the page on initial render
    window.scrollTo(0, 0);

    if (score > 0) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false); // Stop confetti after a few seconds
      }, 5000); // Adjust the duration of the confetti effect
    }
  }, [score]);

  const handleRetryQuiz = () => {
    navigate("/quiz"); // Redirect to quiz page to take the quiz again
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Quiz Results</h3>

          {/* Display Random Motivational Quote */}
          <div className="text-center mb-4">
            <h4>{randomQuote}</h4>
          </div>

          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              gravity={0.2}
              numberOfPieces={500} // Number of confetti pieces
            />
          )}

          <Card>
            <Card.Body>
              <h4>Your Total Score: {score}</h4>
              <div className="d-flex justify-content-center mb-4">
                <FaTrophy size={50} color="gold" />
              </div>
              <ListGroup variant="flush">
                {quizResults?.map((result, index) => (
                  <ListGroup.Item key={index}>
                    <h5>{result.topic}</h5>
                    <p>Correct Answers: {result.correctAnswers}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          {/* Retry Quiz Button */}
          <div className="d-flex justify-content-center mt-4">
            <button className="submit-btn" onClick={handleRetryQuiz}>
              Retry Quiz
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizResults;
