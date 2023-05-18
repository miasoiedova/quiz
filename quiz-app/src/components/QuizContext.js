import { createContext, useState } from 'react';

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    const [score, setScore] = useState(0);

    const updateScore = (points) => {
        setScore (score + points);
    } 
    return (
        <QuizContext.Provider value={{score, updateScore}}>
            {children}
        </QuizContext.Provider>
    )
};

export { QuizContext, QuizProvider }
