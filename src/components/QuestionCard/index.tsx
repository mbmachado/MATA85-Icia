import './styles.scss';

import YellowButton from 'components/YellowButton';
import { Question } from 'pages/Questions/types';
import React from 'react';

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  const { id, description, answare } = question;
  return (
    <div className="question-container">
      <div>
        <h4 className="question-text">{description}</h4>
        <p className="question-text">{answare}</p>
      </div>
      <YellowButton name="EDITAR" onClick={(xablau) => {}} />
    </div>
  );
};

export default QuestionCard;
