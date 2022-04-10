import * as Icons from '@mui/icons-material';
import AdminTemplate from 'components/AdminTemplate';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface CreateQuestionProps {
  category_id: number;
  onSubmit: () => void;
}

const CreateQuestion = () => {
  const navigate = useNavigate();

  //TODO change mouse hover on back arrow
  return (
    <AdminTemplate>
      <div>
        <i
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icons.ArrowBack />
        </i>{' '}
        <span className="title">Cadastrar Pergunta</span>
      </div>
    </AdminTemplate>
  );
};

export default CreateQuestion;
