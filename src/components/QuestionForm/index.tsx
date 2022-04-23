import './styles.scss';

import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react';

import YellowButton from '../YellowButton';

interface QuestionFormProps {
  description: string;
  answer: string;
  isEdit?: boolean;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  handleQuestionChange(description: string): void;
  handleAnswerChange(answer: string): void;
}

const QuestionForm = ({
  description,
  answer,
  isEdit,
  handleSubmit,
  handleQuestionChange,
  handleAnswerChange,
}: QuestionFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <div className="formControl">
        <FormControl
          className="formControl mt-4"
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
            onChange={(event) => handleQuestionChange(event.target.value)}
          />
        </FormControl>
      </div>
      <div className="formControl mb-2">
        <FormControl
          className="formControl mt-4"
          variant="outlined"
          color="secondary"
          fullWidth
        >
          <InputLabel htmlFor="email">Resposta</InputLabel>
          <OutlinedInput
            id="email"
            type="text"
            placeholder="Digite a resposta"
            value={answer}
            onChange={(event) => handleAnswerChange(event.target.value)}
          />
        </FormControl>
      </div>

      {isEdit ? (
        <YellowButton type="submit" name="EDITAR" />
      ) : (
        <YellowButton type="submit" name="CADASTRAR" />
      )}
    </form>
  );
};

export default QuestionForm;
