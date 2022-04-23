import './styles.scss';

import AdminTemplate from 'components/AdminTemplate';
import QuestionCard from 'components/QuestionCard';
import YellowButton from 'components/YellowButton';
import { useAuthContext } from 'contexts/AuthContext/hook';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { authToken } = useAuthContext();
  const { getTopicsTree } = services;
  console.log(currentSubtopics);
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
              <button
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
                      setCurrentTopics(topic.children);
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
          {console.log(questions)}
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      </div>
    </AdminTemplate>
  );
}
