import * as Icons from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AdminTemplate from 'components/AdminTemplate';
import { useAuthContext } from 'contexts/AuthContext/hook';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { services } from 'services';

import QuestionForm from '../../components/QuestionForm';

const CreateQuestion = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [answer, setAnswer] = useState('');
  const { authToken } = useAuthContext();

  const { topicId, topicName } = useLocation().state as {
    topicId: number;
    topicName: string;
  };

  const handleAnswerChange = (newAnswer: string) => {
    setAnswer(newAnswer);
  };

  const handleQuestionChange = (newDescription: string) => {
    setDescription(newDescription);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    services
      .createQuestion(authToken, topicId, description, answer)
      .then((response) => response.data)
      .then((response) => {
        console.log(response);
        navigate('/dashboard/questions', {
          state: {
            message: { type: 'success', text: 'Pergunta adicionada com sucesso!' },
          },
        });
      })
      .catch((err) => {});
  };

  return (
    <AdminTemplate>
      <div className="d-flex align-items-center mt-2">
        <IconButton
          className="mr-3 ml-3"
          aria-label="Voltar"
          component="span"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icons.ArrowBack />
        </IconButton>
        <span className="title">Cadastrar Pergunta em {topicName}</span>
      </div>

      <QuestionForm
        description={description}
        answer={answer}
        handleSubmit={handleSubmit}
        handleAnswerChange={handleAnswerChange}
        handleQuestionChange={handleQuestionChange}
      />
    </AdminTemplate>
  );
};

export default CreateQuestion;
