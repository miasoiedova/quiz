import { useContext } from "react";
import { QuizContext } from "./QuizContext";

const Result = ({totalQuestions}) => {
    const {score} = useContext(QuizContext);
    return (
        <h2>
            Ваш результат: {score} балів з {totalQuestions}!
        </h2>
    )
}

export default Result;