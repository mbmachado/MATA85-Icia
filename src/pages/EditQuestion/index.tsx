import * as Icons from '@mui/icons-material';
import { IconButton, LinearProgress } from '@mui/material';
import AdminTemplate from 'components/AdminTemplate';
import QuestionForm from 'components/QuestionForm';
import { useAuthContext } from 'contexts/AuthContext/hook';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { services } from 'services';

interface EditQuestionNavigationState {
  id: number;
  topic_id: number;
  description: string;
  topicName: string;
  answer: string;
}

const EditQuestion = () => {
  const {
    id,
    topic_id,
    topicName,
    description: initialDescription,
    answer: initialAnswer,
  } = useLocation().state as EditQuestionNavigationState;

  const navigate = useNavigate();
  const [description, setQuestion] = useState(initialDescription);
  const [answer, setAnswer] = useState(initialAnswer);
  const { authToken } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const { pathname } = useLocation();
  const isEdit = pathname.includes('edit');

  const handleAnswerChange = (newAnswer: string) => {
    setAnswer(newAnswer);
  };

  const handleQuestionChange = (newQuestion: string) => {
    setQuestion(newQuestion);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    services
      .editQuestion(id, authToken, topic_id, description, answer)
      .then((response) => response.data)
      .then((response) => {
        setIsLoading(false);
        navigate('/dashboard/questions', {
          state: { message: { type: 'success', text: 'Pergunta editada com sucesso!' } },
        });
      })
      .catch((err) => {
        toast.error('Ocorreu um erro');
        setIsLoading(false);
      });
  };

  //TODO change mouse hover on back arrow
  return (
    <AdminTemplate>
      {isLoading && <LinearProgress variant={'indeterminate'} />}
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

        <span className="title">Editar Pergunta{topicName}</span>
      </div>

      <QuestionForm
        description={description}
        answer={answer}
        handleSubmit={handleSubmit}
        handleAnswerChange={handleAnswerChange}
        handleQuestionChange={handleQuestionChange}
        isEdit={isEdit}
      />
    </AdminTemplate>
  );
};

export default EditQuestion;
