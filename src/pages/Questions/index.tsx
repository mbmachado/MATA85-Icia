import './styles.scss';

import { Button, LinearProgress } from '@mui/material';
import AdminTemplate from 'components/AdminTemplate';
import CreateTopicModal from 'components/CreateTopicModal';
import QuestionsTable from 'components/QuestionsTable';
import TextModal from 'components/TextModal';
import { useAuthContext } from 'contexts/AuthContext/hook';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { services } from 'services';
import { TopicsTree } from 'types';

import { Question } from './types';

export default function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<TopicsTree[]>([]);
  const [initialData, setInitialData] = useState<TopicsTree[]>([]);
  const [currentSubtopics, setCurrentTopics] = useState<TopicsTree[]>([]);
  const [selectedTopicName, setSelectedTopicName] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState(0);
  const [isDeleteTopicModalOpen, setIsDeleteTopicModalOpen] = useState(false);
  const [isCreateTopicModalOpen, setIsCreateTopicModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { authToken } = useAuthContext();
  const { getTopicsTree, getQuestions, deleteTopic } = services;

  const handleCloseDeleteTopicModal = () => {
    setIsDeleteTopicModalOpen(false);
  };

  const handleCloseCreateTopicModal = () => {
    setIsCreateTopicModalOpen(false);
  };

  const clearTree = () => {
    setSelectedTopics([]);
    setCurrentTopics(initialData);
    setSelectedTopicName('');
    setSelectedTopicId(0);
    setQuestions([]);
  };

  const handleDeleteTopic = (topicId: number) => {
    setIsLoading(true);
    deleteTopic(topicId, authToken)
      .then((response) => response?.data)
      .then((data) => {
        console.log(data);
        if (data.status === 'Success') {
          toast.success('Categoria excluída com sucesso!');
          getTree();
        } else {
          console.log(data);
          toast.error('Aconteceu um erro ao excluir a categoria.');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Aconteceu um erro ao excluir a categoria.');
      })
      .finally(() => {
        setIsLoading(false);
        handleCloseDeleteTopicModal();
      });
  };

  const handleRemoveQuestionFromTable = (id: number) => {
    setQuestions((current) => current.filter((question) => question.id !== id));
  };

  useEffect(() => {
    if (selectedTopicId === 0) {
      getQuestions(authToken).then((response) => {
        setQuestions(response.data);
      });
    }
  }, [selectedTopicId]);

  const getTree = React.useCallback(() => {
    setIsLoading(true);
    getTopicsTree(authToken)
      .then((response) => {
        clearTree();
        setCurrentTopics(response.data || []);
        setInitialData(response.data || []);
      })
      .finally(() => setIsLoading(false));
  }, [getTopicsTree, setCurrentTopics, setInitialData]);

  useEffect(() => {
    getTree();
  }, []);

  return (
    <AdminTemplate>
      {isLoading && <LinearProgress variant={'indeterminate'} />}
      <div className="d-flex justify-content-between align-items-center pr-5">
        <div className="title-container">
          <h2 className="title">Perguntas por categoria</h2>
        </div>

        <CreateTopicModal
          isOpen={isCreateTopicModalOpen}
          onClose={handleCloseCreateTopicModal}
          parentId={selectedTopicId}
          onConfirm={() => {
            handleCloseCreateTopicModal();
            getTree();
          }}
        />

        {selectedTopicName && (
          <>
            <TextModal
              title="Excluir Pergunta"
              text={`Tem certeza que deseja excluir a categoria ${selectedTopicName}?`}
              isOpen={isDeleteTopicModalOpen}
              handleClose={handleCloseDeleteTopicModal}
              handleConfirm={() => handleDeleteTopic(selectedTopicId)}
            />
            <div>
              <Button
                variant="contained"
                color="warning"
                data-testid="remove-category-button"
                onClick={() => {
                  setIsDeleteTopicModalOpen(true);
                }}
              >
                Excluir
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="questions-container">
        <div className="breadcrumb-container">
          {selectedTopicId !== 0 ? (
            <span>
              <button
                className="breadcrumb-item"
                onClick={() => {
                  clearTree();
                }}
              >
                Inicio
              </button>
              {' > '}
            </span>
          ) : (
            <span>Inicio</span>
          )}

          {selectedTopics.map((topic, index) => {
            if (index !== selectedTopics.length - 1) {
              return (
                <span key={topic.id}>
                  <button
                    className="breadcrumb-item"
                    onClick={() => {
                      setSelectedTopics((current) => current.slice(0, index + 1));
                      setCurrentTopics(topic.children!);
                      setSelectedTopicName(topic.name);
                      setSelectedTopicId(topic.id);
                      setQuestions(topic.questions);
                    }}
                  >
                    {topic.name}
                  </button>
                  {' > '}
                </span>
              );
            }
            return <>{topic.name}</>;
          })}
        </div>
        {currentSubtopics.map((topic) => {
          if (topic.name === '') return null;
          return (
            <button
              key={topic.id}
              className="filter-question-button"
              onClick={() => {
                setQuestions(topic.questions);
                setSelectedTopics((current) => [...current, topic]);
                setCurrentTopics(topic.children!);
                setSelectedTopicName(topic.name);
                setSelectedTopicId(topic.id);
              }}
            >
              {topic.name}
            </button>
          );
        })}

        <Button
          className="add-category-button"
          variant="contained"
          onClick={() => setIsCreateTopicModalOpen(true)}
        >
          + Categoria
        </Button>
        <div className="mt-3">
          {selectedTopicName && (
            <>
              <h3> {`Perguntas categoria ${selectedTopicName}`}</h3>
              <br />
              <div>
                <Button
                  variant="contained"
                  data-testid="add-question-button"
                  onClick={() => {
                    navigate('/dashboard/questions/create', {
                      state: { topicId: selectedTopicId, topicName: selectedTopicName },
                    });
                  }}
                >
                  ADICIONAR
                </Button>
              </div>
            </>
          )}
        </div>
        <div id="questions-container">
          <QuestionsTable
            questions={questions}
            removeQuestion={handleRemoveQuestionFromTable}
          />
        </div>
      </div>
    </AdminTemplate>
  );
}
