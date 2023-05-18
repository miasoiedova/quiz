import { useContext } from 'react';
import { QuizContext } from './QuizContext';
import Answer from './Answer'

const Question = ({question, answers}) => {
    const {updateScore} = useContext(QuizContext);
    const handleAnswer = (isCorrect) => {
        if(isCorrect) {
            updateScore(1);
        };
    };

    return(
        <div>
            <h1>
                {question}
            </h1>
            <ul>
                {answers.map((answer, index) => 
                <Answer
                    key={index}
                    text={answer.text}
                    isCorrect={answer.isCorrect}
                    handleAnswer={handleAnswer}
                />
                )}
            </ul>
        </div>
    )
};

export default Question;