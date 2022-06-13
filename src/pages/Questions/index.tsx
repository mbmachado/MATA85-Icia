import './styles.scss';

import { Button, LinearProgress } from '@mui/material';
import AdminTemplate from 'components/AdminTemplate';
import CreateTopicModal from 'components/CreateTopicModal';
import QuestionsTable from 'components/QuestionsTable';
import TextModal from 'components/TextModal';
import { useAuthContext } from 'contexts/AuthContext/hook';
import React, { useEffect, useLayoutEffect, useState } from 'react';
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
    setCurrentTopics((current) => [...current]);
    setIsCreateTopicModalOpen(false);
  };

  const clearTree = () => {
    setSelectedTopics([]);
    setCurrentTopics(initialData);
    setSelectedTopicName('');
    setSelectedTopicId(0);
    setQuestions([]);
    window.sessionStorage.removeItem('breadcrumb');
    window.sessionStorage.removeItem('selectedTopic');
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
    const breadcrumb = window.sessionStorage.getItem('breadcrumb');
    const selectedTopic = window.sessionStorage.getItem('selectedTopic');

    if (breadcrumb && selectedTopic) {
      const newSelectedTopics = JSON.parse(breadcrumb) as TopicsTree[];
      const newSelectedTopic = JSON.parse(selectedTopic) as TopicsTree;
      setSelectedTopics(newSelectedTopics);
      setSelectedTopicId(newSelectedTopic.id);
      setSelectedTopicName(newSelectedTopic.name);
      setCurrentTopics(newSelectedTopic.children!);
      setQuestions(newSelectedTopic.questions);
    } else if (selectedTopicId === 0) {
      getTree();

      getQuestions(authToken).then((response) => {
        setQuestions(response.data);
      });
    }
  }, [selectedTopicId]);

  const getTree = React.useCallback(() => {
    setIsLoading(true);
    getTopicsTree(authToken)
      .then((response) => {
        if (currentSubtopics.length === 0) {
          clearTree();
          setCurrentTopics(response.data || []);
          setInitialData(response.data || []);
        }
      })
      .finally(() => setIsLoading(false));
  }, [selectedTopicId, getTopicsTree, setCurrentTopics, setInitialData]);

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
                Categorias iniciais
              </button>
              {' > '}
            </span>
          ) : (
            <span></span>
          )}

          {selectedTopics.map((topic, index) => {
            if (index !== selectedTopics.length - 1) {
              return (
                <span key={topic.id}>
                  <button
                    className="breadcrumb-item"
                    onClick={() => {
                      setSelectedTopics((current) => current.slice(0, index + 1));
                      setCurrentTopics(topic.children);
                      setSelectedTopicName(topic.name);
                      setSelectedTopicId(topic.id);
                      setQuestions(topic.questions);
                      window.sessionStorage.setItem(
                        'breadcrumb',
                        JSON.stringify(selectedTopics.slice(0, index + 1)),
                      );
                      window.sessionStorage.setItem(
                        'selectedTopic',
                        JSON.stringify(topic),
                      );
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
                setCurrentTopics(topic.children);
                setSelectedTopicName(topic.name);
                setSelectedTopicId(topic.id);

                window.sessionStorage.setItem(
                  'breadcrumb',
                  JSON.stringify([...selectedTopics, topic]),
                );
                window.sessionStorage.setItem('selectedTopic', JSON.stringify(topic));
              }}
            >
              {topic.name}
            </button>
          );
        })}
        <div className="mt-2 d-flex justify-content-row">
          <Button
            className="add-category-button mr-2"
            variant="contained"
            onClick={() => setIsCreateTopicModalOpen(true)}
          >
            + {selectedTopicName ? 'Subcategoria' : 'Categoria'}
          </Button>
          {selectedTopicName && (
            <>
              <TextModal
                title="Excluir Pergunta"
                text={`Tem certeza que deseja excluir a categoria ${selectedTopicName}?`}
                isOpen={isDeleteTopicModalOpen}
                handleClose={handleCloseDeleteTopicModal}
                handleConfirm={() => handleDeleteTopic(selectedTopicId)}
              />
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
            </>
          )}
        </div>
        <div className="mt-3">
          {selectedTopicName && (
            <>
              <h3> {`Perguntas da subcategoria "${selectedTopicName}`}"</h3>
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
