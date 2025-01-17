import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup ,ButtonGroup} from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const navigate = useNavigate();
useEffect(() => {
  
  window.scrollTo(0, 0);


}, [])
  // Questions for different topics
  const questions = {
    "C": [
      {
        question: "What is the correct syntax to print a message in C?",
        options: ["echo('message')", "print('message')", "printf('message')", "console.log('message')"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is not a valid data type in C?",
        options: ["int", "char", "bool", "float"],
        correctAnswer: 2,
      },
      {
        question: "What is the size of an integer in C?",
        options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
        correctAnswer: 1,
      },
    ],
    "C++": [
      {
        question: "What is the main difference between C and C++?",
        options: ["C++ is object-oriented", "C++ is functional", "C++ has no structures", "C++ does not support classes"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a correct syntax to declare a constructor in C++?",
        options: ["void constructor()", "constructor()", "public constructor", "constructor(type)"],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used to allocate memory dynamically in C++?",
        options: ["malloc()", "new", "calloc()", "new()"],
        correctAnswer: 1,
      },
    ],
    "Java": [
      {
        question: "Which of these is used to create a new instance of a class in Java?",
        options: ["new Class()", "Class.new()", "create Class()", "instance Class()"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is the default value of a boolean variable in Java?",
        options: ["true", "false", "null", "undefined"],
        correctAnswer: 1,
      },
      {
        question: "What is the access modifier used for a method that is accessible only within the same class?",
        options: ["public", "private", "protected", "default"],
        correctAnswer: 1,
      },
    ],
    "JavaScript": [
      {
        question: "Which of the following is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "create function myFunction()", "function:myFunction()", "func myFunction()"],
        correctAnswer: 0,
      },
      {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        options: ["undefined", "null", "NaN", "0"],
        correctAnswer: 0,
      },
    ],
    "HTML": [
      {
        question: "Which of the following is the correct HTML tag to define an internal style sheet?",
        options: ["<style>", "<css>", "<script>", "<link>"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following tags is used to define a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correctAnswer: 0,
      },
      {
        question: "Which of these tags is used to display an image in HTML?",
        options: ["<image>", "<img>", "<src>", "<picture>"],
        correctAnswer: 1,
      },
    ],
    "CSS": [
      {
        question: "Which property is used to change the background color in CSS?",
        options: ["bgcolor", "color", "background-color", "background"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is the correct way to select an element by its ID in CSS?",
        options: ["#element", ".element", "element", "id:element"],
        correctAnswer: 0,
      },
      {
        question: "Which property is used to change the font size in CSS?",
        options: ["font-size", "font-style", "text-size", "text-font"],
        correctAnswer: 0,
      },
    ],
    "React JS": [
      {
        question: "Which function is used to create a component in React?",
        options: ["createElement()", "render()", "React.Component()", "useState()"],
        correctAnswer: 2,
      },
      {
        question: "What is the default value of 'state' in a React component?",
        options: ["null", "undefined", "false", "object"],
        correctAnswer: 3,
      },
      {
        question: "Which method is used to update the state in React?",
        options: ["setState()", "updateState()", "modifyState()", "changeState()"],
        correctAnswer: 0,
      },
    ],
    "Node JS": [
      {
        question: "Which module is used for file system operations in Node.js?",
        options: ["http", "fs", "path", "os"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is used to install packages in Node.js?",
        options: ["npm", "node-install", "install", "pkg"],
        correctAnswer: 0,
      },
      {
        question: "What does 'npm run start' do in Node.js?",
        options: ["Runs the application", "Installs dependencies", "Compiles the code", "Starts the Node.js server"],
        correctAnswer: 0,
      },
    ],
    "AWS": [
      {
        question: "Which of the following services is used to store data in AWS?",
        options: ["S3", "EC2", "Lambda", "DynamoDB"],
        correctAnswer: 0,
      },
      {
        question: "What is AWS EC2?",
        options: ["Virtual Machine", "Storage Service", "Database", "Container Service"],
        correctAnswer: 0,
      },
      {
        question: "Which AWS service is used to manage DNS and routing?",
        options: ["Route 53", "S3", "VPC", "CloudWatch"],
        correctAnswer: 0,
      },
    ],
    "Spring Boot": [
      {
        question: "What is Spring Boot used for?",
        options: ["Creating Microservices", "Building REST APIs", "Building Web Applications", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "What is the default embedded server in Spring Boot?",
        options: ["Tomcat", "Jetty", "Undertow", "GlassFish"],
        correctAnswer: 0,
      },
      {
        question: "Which annotation is used to create a Spring Boot application?",
        options: ["@SpringBootApplication", "@EnableAutoConfiguration", "@RestController", "@Configuration"],
        correctAnswer: 0,
      },
    ],
  };

  // State to store selected answers
  const [selectedAnswers, setSelectedAnswers] = useState({
    "C": Array(3).fill(null),
    "C++": Array(3).fill(null),
    "Java": Array(3).fill(null),
    "JavaScript": Array(3).fill(null),
    "HTML": Array(3).fill(null),
    "CSS": Array(3).fill(null),
    "React JS": Array(3).fill(null),
    "Node JS": Array(3).fill(null),
    "AWS": Array(3).fill(null),
    "Spring Boot": Array(3).fill(null),
  });



  const handleAnswerSelection = (topic, questionIndex, selectedOption) => {
    const newSelectedAnswers = { ...selectedAnswers };
    if (newSelectedAnswers[topic][questionIndex] === null) {
      newSelectedAnswers[topic][questionIndex] = selectedOption;
    }
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmitQuiz = () => {
    const quizResults = [];
    const score = Object.keys(questions).reduce((acc, topic) => {
      const correctAnswers = selectedAnswers[topic].filter(
        (answer, index) => answer === questions[topic][index].correctAnswer
      ).length;
      quizResults.push({ topic, correctAnswers });
      return acc + correctAnswers;
    }, 0);
  
    navigate("/quizresults", { state: { quizResults, score } });  // Make sure to pass the score as well
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Row>
          <Col>
            <h3>Quiz</h3>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  {Object.keys(questions).map((topic) => (
                    <div key={topic}>
                      <h4>{topic}</h4>
                      {questions[topic].map((question, index) => (
                        <ListGroup.Item key={index}>
                          <p>{question.question}</p>
                          <ButtonGroup className="d-flex justify-content-between w-100">
                          {question.options.map((option, i) => (
                            <Button
                              key={i}
                              variant={
                                selectedAnswers[topic][index] === i
                                  ? i === question.correctAnswer
                                    ? "success"
                                    : "danger"
                                  : "secondary"
                              }
                              onClick={() =>
                                handleAnswerSelection(topic, index, i)
                              }
                              disabled={selectedAnswers[topic][index] !== null}
                            >
                              {option}
                            </Button>
                            
                          ))}
                        </ButtonGroup>

                        </ListGroup.Item>
                      ))}
                    </div>
                  ))}
                </ListGroup>
                <div className="d-flex justify-content-center mt-4">
                  <button
                    className="submit-btn"
                    onClick={handleSubmitQuiz}
                  >
                    Submit Quiz
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Quiz;
