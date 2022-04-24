import { Button, CircularProgress } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import TextModal from 'components/TextModal';
import { useAuthContext } from 'contexts/AuthContext/hook';
import { Question } from 'pages/Questions/types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { services } from 'services';

interface QuestionTableProps {
  questions: Question[];
  removeQuestion?(id: number): void;
}

export default function QuestionsTable({
  questions,
  removeQuestion,
}: QuestionTableProps) {
  const navigate = useNavigate();
  const { authToken } = useAuthContext();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [openedModal, setOpenedModal] = React.useState<number>();
  const handleEdit = (question: Question) => {
    const { id, topic_id, description, answer, parents } = question;
    let topic = topic_id;
    if (!topic && parents) {
      topic = parents[parents.length - 1].id;
    }
    navigate('edit', { state: { id, topic_id: topic, description, answer } });
  };

  const handleConfirm = (id: number) => {
    services.deleteQuestion(id, authToken).then((response) => {
      const data = response.data;

      if (data.status === 'Success') {
        removeQuestion && removeQuestion(id);
        toast.success('Pergunta excluída com sucesso!');
      } else {
        toast.error('Houve um erro ao excluir a pergunta.');
      }
      handleCloseModal();
    });
  };

  const handleOpenModal = (questionId: number) => {
    setOpenedModal(questionId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setOpenedModal(undefined);
    setIsModalOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: 'description',
      headerName: 'Pergunta',
      flex: 4,
    },
    {
      field: 'answer',
      headerName: 'Resposta',
      flex: 4,
    },
    {
      field: 'id',
      headerName: 'Ações',
      minWidth: 200,
      renderCell: (item) => (
        <>
          <TextModal
            title="Excluir Pergunta"
            text="Tem certeza que deseja excluir essa pergunta?"
            isOpen={isModalOpen}
            handleClose={handleCloseModal}
            handleConfirm={() => handleConfirm(openedModal as number)}
          />
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => handleEdit(item.row as Question)}
            data-testid="edit-button"
          >
            EDITAR
          </Button>

          <Button
            variant="contained"
            color="warning"
            className="ml-2"
            onClick={() => {
              handleOpenModal(item.row.id);
            }}
            data-testid="delete-button"
          >
            EXCLUIR
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGrid
        rows={questions}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[]}
        disableSelectionOnClick
      />
    </div>
  );
}
