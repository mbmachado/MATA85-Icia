import './styles.scss';

import AdminTemplate from 'components/AdminTemplate';
import QuestionCard from 'components/QuestionCard';
import YellowButton from 'components/YellowButton';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Question } from './types';

const initialQuestions = [
  {
    description: 'Essa é a minha pergunta?',
    answer: 'Essa é a minha resposta, e ela pode ser bem grande na verdade',
  },
  {
    description: 'Essa é outra pergunta, um pouco maior dessa vez?',
    answer: 'A resposta foi menor!',
  },
  {
    description: 'Essa é a minha pergunta?',
    answer: 'Essa é a minha resposta, e ela pode ser bem grande na verdade',
  },
  {
    description: 'Essa é outra pergunta, um pouco maior dessa vez?',
    answer: 'A resposta foi menor!',
  },
  {
    description: 'Essa é a minha pergunta?',
    answer: 'Essa é a minha resposta, e ela pode ser bem grande na verdade',
  },
  {
    description: 'Essa é outra pergunta, um pouco maior dessa vez?',
    answer: 'A resposta foi menor!',
  },
  {
    description: 'Essa é a minha pergunta?',
    answer: 'Essa é a minha resposta, e ela pode ser bem grande na verdade',
  },
  {
    description: 'Essa é outra pergunta, um pouco maior dessa vez?',
    answer: 'A resposta foi menor!',
  },
  {
    description: 'Essa é a minha pergunta?',
    answer: 'Essa é a minha resposta, e ela pode ser bem grande na verdade',
  },
  {
    description: 'Essa é outra pergunta, um pouco maior dessa vez?',
    answer: 'A resposta foi menor!',
  },
];

const menu = [
  {
    id: 5,
    name: 'Subcategoria',
    topic_id: 1,
    questions: initialQuestions,
    submenu: [],
  },
  {
    id: 6,
    name: 'Sub',
    topic_id: 2,
    questions: initialQuestions,
    submenu: [],
  },
  {
    id: 7,
    name: 'Category',
    topic_id: 3,
    questions: initialQuestions,
    submenu: [],
  },
  {
    id: 8,
    name: 'Testiando Tudo',
    topic_id: 4,
    questions: initialQuestions,
    submenu: [],
  },
];
const data = {
  menu: [
    {
      id: 1,
      name: 'Ensino',
      topic_id: null,
      questions: initialQuestions,
      submenu: menu,
    },
    {
      id: 2,
      name: 'Pesquisa',
      topic_id: null,
      questions: initialQuestions,
      submenu: menu,
    },
    {
      id: 3,
      name: 'Extensão',
      topic_id: null,
      questions: initialQuestions,
      submenu: menu,
    },
    {
      id: 4,
      name: 'Inovação',
      topic_id: null,
      questions: initialQuestions,
      submenu: menu,
    },
  ],
};

export default function Questions() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [filteredText, setFilteredText] = useState('');
  const navigate = useNavigate();
  const filteredQuestions = useMemo(() => {
    return questions.filter(
      (question) =>
        question.description.includes(filteredText) ||
        question.answer.includes(filteredText),
    );
  }, [filteredText]);

  //TODO remove mock and get questions from backend

  return (
    <AdminTemplate>
      <div className="title-container">
        <h2 className="title">Perguntas por categoria</h2>
      </div>
      <div className="questions-container">
        <label htmlFor="filter-questions">Pesquisar:</label>
        <br />
        <input
          id="filter-questions"
          type="text"
          value={filteredText}
          onChange={(event) => setFilteredText(event.target.value)}
        />
        <br />
        <div className="mt-3">
          <YellowButton
            name="ADICIONAR"
            onClick={(xablau) => {
              navigate('/questions/create', { state: { category_id: 5 } });
            }}
          />
        </div>
        <div id="questions-container">
          {filteredQuestions.map((question) => (
            <QuestionCard question={question} />
          ))}
        </div>
      </div>
    </AdminTemplate>
  );
}
