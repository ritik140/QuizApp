import React, { useState, useEffect } from "react";
import "./quizpage.css";
import { useLocation, useNavigate } from "react-router-dom";

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Corrected Navigate function
  const quizData = location.state?.value;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null); // Track correct option

  if (!quizData) {
    // If quizData is null, navigate to an error page
    navigate("/error-page");
    return null; // Don't render anything until redirected
  }

  const currentQuestion = quizData[currentQuestionIndex];

  // Handle option selection
  const handleOption = (selectedOptionIndex) => {
    setSelectedOption(selectedOptionIndex);

    // Find the correct answer index
    const correctAnswerIndex = Object.keys(
      currentQuestion.correctAns
    ).findIndex((key) => currentQuestion.correctAns[key] === "true");

    setCorrectOptionIndex(correctAnswerIndex);

    // Update score if the selected option is correct
    if (selectedOptionIndex === correctAnswerIndex) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question or show results if it’s the last question
    if (currentQuestionIndex + 1 < quizData.length) {
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null); // Reset selected option for the next question
        setCorrectOptionIndex(null); // Reset correct option for the next question
      }, 1000); // Delay for better UX after option selection
    } else {
      setTimeout(() => {
        setShowResults(true); // Show results after last question
      }, 1000);
    }
  };

  useEffect(() => {
    if (showResults) {
      // Navigate to home after showing the results
      setTimeout(() => {
        navigate("/");
      }, 2000); // 2-second delay before navigating to home
    }
  }, [showResults, navigate]);

  // Render the quiz question and options
  if (showResults) {
    return (
      <div className="mainp">
        <div className="sectionp">
          <h1 className="heading">Quiz Complete!</h1>
          <h2>
            Your Final Score is: {score} / {quizData.length}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="mainp">
      <h3>No. of Question: {quizData.length}</h3>
      <div className="sectionp">
        <h1 className="heading">Question {currentQuestionIndex + 1}:</h1>
        <div>
          <h1 className="quest">{currentQuestion.question}</h1>
        </div>
        <div className="options">
          {Object.entries(currentQuestion.options).map(([key, option], index) =>
            option != null ? (
              <div key={key} className="op">
                <button
                  className={`btnp ${
                    selectedOption !== null && index === correctOptionIndex
                      ? "correct"
                      : ""
                  } ${
                    selectedOption === index &&
                    selectedOption !== correctOptionIndex
                      ? "incorrect"
                      : ""
                  }`}
                  type="button"
                  onClick={() => handleOption(index)}
                  disabled={selectedOption !== null} // Disable after selection
                >
                  {option}
                </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div>
          <h1>Score: {score}</h1>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
