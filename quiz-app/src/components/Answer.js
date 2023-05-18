import { useState, useEffect } from "react";


const Answer = ({ text, isCorrect, handleAnswer, currentQuestionIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
    handleAnswer(isCorrect);
  };

  const buttonClassName = selectedIndex === text ? "answer-button active" : "answer-button";

  useEffect(() => {
    setSelectedIndex(null);
  }, [currentQuestionIndex]);

  return (
    <div className="answerDiv">
    <li>
      <button onClick={() => handleClick(text)} className={buttonClassName}>
        {text}
      </button>
    </li>
    </div>
  );
};

export default Answer;