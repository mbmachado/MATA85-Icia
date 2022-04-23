import './styles.scss';

import YellowButton from 'components/YellowButton';
import { Question } from 'pages/Questions/types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  const { id, description, answer, topic_id } = question;
  const navigate = useNavigate();
  return (
    <div className="question-container">
      <div>
        <h4 className="question-text">{description}</h4>
        <p className="question-text">{answer}</p>
      </div>
      <YellowButton
        name="EDITAR"
        onClick={() => {
          navigate('edit', { state: { id, topic_id, description, answer } });
        }}
      />
    </div>
  );
};

export default QuestionCard;
