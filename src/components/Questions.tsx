import React, { useState, useEffect } from 'react';

interface QuestionsProps {
  apiUrl: string; // get data from backend
}

interface Question {
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
}

const Questions: React.FC<QuestionsProps> = ({ apiUrl }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        // Time, depending on questions type
        const questionType =
          data[0].options.length > 2 ? 'multiple' : 'trueFalse';
        setTimer(questionType === 'multiple' ? 90 : 60);
      })
      .catch((error) => {
        console.error('can not communicate with the api:', error);
      });
  }, [apiUrl]);

  return <div></div>;
};

export default Questions;
