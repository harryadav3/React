import React, { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris",
  },
  // Add more questions here
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Paris", "Bn", "Madrid", "Rome"],
    answer: "Paris",
  },
];

const Question16 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(120);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      handleNextQuestion();
    }
  }, [timeRemaining]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setTimeRemaining(120);

    if (currentQuestion === questions.length - 1) {
      // Quiz completed
      console.log("Quiz completed!");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">MCQ Questions</h2>
      <div className="mb-4">
        <span className="text-xl mr-2">Time Remaining:</span>
        <span className="text-xl font-bold">{formatTime(timeRemaining)}</span>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">
          {currentQuestionData.question}
        </h3>
        {currentQuestionData.options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        disabled={selectedOption === null}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Next Question
      </button>
    </div>
  );
};

export default Question16;
