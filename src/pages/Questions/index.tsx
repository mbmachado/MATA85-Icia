import './styles.scss';

import AdminTemplate from 'components/AdminTemplate';
import QuestionCard from 'components/QuestionCard';
import YellowButton from 'components/YellowButton';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Question } from './types';
import { useAuthContext } from 'contexts/AuthContext/hook';
import { services } from 'services';

export default function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<any[]>([]);
  const [initialData, setInitialData] = useState<any[]>([]);
  const [currentSubtopics, setCurrentTopics] = useState<any[]>([]);
  const [selectedTopicName, setSelectedTopicName] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState(0);
  const navigate = useNavigate();
  const { authToken } = useAuthContext();
  const { getTopicsTree } = services;

  useEffect(() => {
    getTopicsTree(authToken).then((response) => {
      setCurrentTopics(response.data || []);
      setInitialData(response.data || []);
    });
  }, []);

  return (
    <AdminTemplate>
      <div className="title-container">
        <h2 className="title">Perguntas por categoria</h2>
      </div>
      <div className="questions-container">
        <div className="breadcrumb-container">
          {selectedTopicId !== 0 ? (
            <span>
              <a
                className="breadcrumb-item"
                onClick={() => {
                  setSelectedTopics([]);
                  setCurrentTopics(initialData);
                  setSelectedTopicName('');
                  setSelectedTopicId(0);
                  setQuestions([]);
                }}
              >
                Inicio
              </a>
              {' > '}
            </span>
          ) : (
            <span>Inicio</span>
          )}

          {selectedTopics.map((topic, index) => {
            if (index !== selectedTopics.length - 1) {
              return (
                <span>
                  <a
                    className="breadcrumb-item"
                    onClick={() => {
                      setSelectedTopics((current) => current.slice(0, index + 1));
                      setCurrentTopics(topic.children);
                      setSelectedTopicName(topic.name);
                      setSelectedTopicId(topic.id);
                      setQuestions(topic.questions);
                    }}
                  >
                    {topic.name}
                  </a>
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
              className="filter-question-button"
              onClick={() => {
                setQuestions(topic.questions);
                setSelectedTopics((current) => [...current, topic]);
                setCurrentTopics(topic.children);
                setSelectedTopicName(topic.name);
                setSelectedTopicId(topic.id);
              }}
            >
              {topic.name}
            </button>
          );
        })}

        <button className="add-category-button">+</button>
        <div className="mt-3">
          {selectedTopicName && (
            <>
              <h3> {`Perguntas categoria ${selectedTopicName}`}</h3>
              <br />
              <div>
                <YellowButton
                  name="ADICIONAR"
                  onClick={() => {
                    navigate('/dashboard/questions/create', {
                      state: { topicId: selectedTopicId, topicName: selectedTopicName },
                    });
                  }}
                />
              </div>
            </>
          )}
        </div>
        <div id="questions-container">
          {questions.map((question) => (
            <QuestionCard question={question} />
          ))}
        </div>
      </div>
    </AdminTemplate>
  );
}
