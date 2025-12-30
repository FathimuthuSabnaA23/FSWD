import React, { useState } from "react";
import quizQuestions from "./QuizData";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);

    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected("");

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Mini Quiz</h1>

      {showResult ? (
        <h2>
          Your Score: {score} / {quizQuestions.length}
        </h2>
      ) : (
        <>
          <h2>{quizQuestions[currentQuestion].question}</h2>

          {quizQuestions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={selected !== ""}
              style={styles.button}
            >
              {option}
            </button>
          ))}

          <button
            onClick={nextQuestion}
            disabled={selected === ""}
            style={styles.nextButton}
          >
            Next
          </button>

          <p>Score: {score}</p>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  button: {
    display: "block",
    margin: "10px auto",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
  },
  nextButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px"
  }
};

export default App;
