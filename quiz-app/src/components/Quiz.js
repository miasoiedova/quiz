import  { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const isQuizFinished = currentQuestionIndex === questions.length;

  return (
    <div>
      {isQuizFinished ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          answers={questions[currentQuestionIndex].answers}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;