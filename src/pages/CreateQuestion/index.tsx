import './styles.scss';

import * as Icons from '@mui/icons-material';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import AdminTemplate from 'components/AdminTemplate';
import YellowButton from 'components/YellowButton';
import { useAuthContext } from 'contexts/AuthContext/hook';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { services } from 'services';
interface CreateQuestionProps {
  category_id: number;
  onSubmit: () => void;
}

const CreateQuestion = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [answer, setAnswer] = useState('');
  const { authToken } = useAuthContext();

  const { topicId, topicName } = useLocation().state as {
    topicId: number;
    topicName: string;
  };
  console.log(useLocation().state);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    services
      .createQuestion(authToken, topicId, description, answer)
      .then((response) => response.data)
      .then((response) => {
        console.log(response);
        navigate(-1);
      })
      .catch((err) => {});
  };

  //TODO change mouse hover on back arrow
  return (
    <AdminTemplate>
      <div className="d-flex align-items-center mt-2">
        <i
          className="mr-3 ml-3"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icons.ArrowBack />
        </i>
        <span className="title">Cadastrar Pergunta em {topicName}</span>
      </div>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="formControl">
          <FormControl
            className="formControl"
            variant="outlined"
            fullWidth
            color="secondary"
          >
            <InputLabel htmlFor="email">Pergunta</InputLabel>
            <OutlinedInput
              id="description"
              type="text"
              placeholder="Digite a pergunta"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </FormControl>
        </div>
        <div className="formControl mb-2">
          <FormControl
            className="formControl"
            variant="outlined"
            fullWidth
            color="secondary"
          >
            <InputLabel htmlFor="email">Resposta</InputLabel>
            <OutlinedInput
              id="email"
              type="text"
              placeholder="Digite a resposta"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
            />
          </FormControl>
        </div>

        <YellowButton type="submit" name="CADASTRAR" />
      </form>
    </AdminTemplate>
  );
};

export default CreateQuestion;
