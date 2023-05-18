const Answer = ({text, isCorrect, handleAnswer}) => {
    return (
        <li>
            <button onClick={() => handleAnswer(isCorrect)}>{text}</button>
        </li>
    );
};

export default Answer;