import { HelpCircle, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions] = useState<Question[]>([
    {
      id: '1',
      text: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2,
    },
    {
      id: '2',
      text: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
    },
  ]);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Quiz</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-lg mb-4">
              Your score: {score} out of {questions.length}
            </p>
            <div className="flex justify-center gap-2 mb-4">
              {score === questions.length ? (
                <CheckCircle className="h-8 w-8 text-green-500" />
              ) : (
                <XCircle className="h-8 w-8 text-red-500" />
              )}
            </div>
            <button
              onClick={resetQuiz}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <h2 className="text-lg font-semibold">
                {questions[currentQuestion].text}
              </h2>
            </div>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-3 text-left rounded-lg border hover:bg-gray-50"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}