import { useContext } from "react";
import { QuizContext } from "./QuizContext";

const Result = () => {
    const {score} = useContext(QuizContext);

    const point = score === 1 ? "бал" : "бали";
    return (
        <h2>
            Ваш результат: {score} {point}!
        </h2>
    )
}

export default Result;