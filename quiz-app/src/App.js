import './App.css';
import { QuizProvider } from './components/QuizContext';
import Quiz from './components/Quiz';

function App() {
  const questions = [
      {
      question:'Яка планета третя від Сонця ?',
      answers:
        [
        { text: 'Марс', isCorrect: false },
        { text: 'Земля', isCorrect: true },
        { text: 'Юпітер', isCorrect: false }
        ]
      },
      {
      question:'Який океан є найбільшим у світі ?',
      answers:
        [
        { text: 'Тихий', isCorrect: true },
        { text: 'Індійський', isCorrect: false },
        { text: 'Атлантичний', isCorrect: false },
        ]
      },
      {
      question:'Яке з чисел є найменшим простим числом ?',
      answers:
        [
        { text: '1', isCorrect: false },
        { text: '2', isCorrect: true },
        { text: '0', isCorrect: false },
        ]
      }
  ]
  return (
      <QuizProvider>
      <div>
        <Quiz questions={questions} />
      </div>
    </QuizProvider>
  );
}

export default App;
