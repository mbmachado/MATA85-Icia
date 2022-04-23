import * as Icons from '@mui/icons-material';
import AdminTemplate from 'components/AdminTemplate';
import QuestionForm from 'components/QuestionForm';
import { useAuthContext } from 'contexts/AuthContext/hook';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    services
      .editQuestion(id, authToken, topic_id, description, answer)
      .then((response) => response.data)
      .then((response) => {
        navigate(-1);
      })
      .catch((err) => {});
  };

  //TODO change mouse hover on back arrow
  return (
    <AdminTemplate>
      <div className="d-flex align-items-center mt-2">
        <Icons.ArrowBack
          className="mr-3 ml-3"
          onClick={() => {
            navigate(-1);
          }}
        />
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
