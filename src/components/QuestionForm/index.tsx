import './styles.scss';

import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react';

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
      <FormControl className="mt-4" variant="outlined" fullWidth color="secondary">
        <InputLabel htmlFor="input-question">Pergunta</InputLabel>
        <OutlinedInput
          id="input-question"
          type="text"
          placeholder="Digite a pergunta"
          value={description}
          onChange={(event) => handleQuestionChange(event.target.value)}
          label="Pergunta"
        />
      </FormControl>
      <div className=" mb-2">
        <FormControl className="mt-4" variant="outlined" color="secondary" fullWidth>
          <InputLabel htmlFor="input-answer">Resposta</InputLabel>
          <OutlinedInput
            id="input-answer"
            type="text"
            placeholder="Digite a resposta"
            value={answer}
            onChange={(event) => handleAnswerChange(event.target.value)}
            label="Resposta"
          />
        </FormControl>
      </div>

      {isEdit ? (
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          data-testid="submit-button"
        >
          EDITAR
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          data-testid="submit-button"
        >
          CADASTRAR
        </Button>
      )}
    </form>
  );
};

export default QuestionForm;
