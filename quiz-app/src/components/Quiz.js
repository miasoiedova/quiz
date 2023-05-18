import  { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const Quiz = ({ questions }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    // if(activeQuestion !== 0) {
    //     setActiveQuestion((prevIndex) => prevIndex + 1);
    // }
  };

  const onClickNext = () => {
    setActiveQuestion((prevIndex) => prevIndex + 1);
  }

  const isQuizFinished = activeQuestion === questions.length;

  return (
    <div className="main">
      {isQuizFinished ? (
        <Result score={score} />
      ) : (
        <Question
          question={questions[activeQuestion].question}
          answers={questions[activeQuestion].answers}
          handleAnswer={handleAnswer}
        />
      )}
      <button onClick={onClickNext} className="next">Next</button>
    </div>
  );
};

export default Quiz;