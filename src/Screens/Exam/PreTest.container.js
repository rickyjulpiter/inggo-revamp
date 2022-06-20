/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerTest } from './style';
import CodeCheckComponent from './Components/CodeCheck.component';
import ListeningContainer from './Components/Listening/Listening.container';
import ReadingContainer from './Components/Reading/Reading.container';
import WritingContainer from './Components/Writing/Writing.container';
import { listeningAnswerKey, readingAnswerKey } from './AnswerKey';

const PAGE = {
  AUTH: 1,
  LISTENING: 2,
  READING: 3,
  WRITING: 4,
  COUNTING_ANSWER: 5
};

const PreTestContainer = () => {
  const [page, setPage] = useState(PAGE.AUTH);
  const writingAnswer = useSelector((state) => state.answer.writingAnswer);
  const readingAnswer = useSelector((state) => state.answer.readingAnswer);
  const listeningAnswer = useSelector((state) => state.answer.value);

  const dispatch = useDispatch();

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const checkingAnswer = () => {
    let listeningAnswerTemp = 0;
    let readingAnswerTemp = 0;

    for (let i = 1; i <= 40; i++) {
      if (readingAnswer[i] !== '') {
        if (readingAnswer[i].toLowerCase() === readingAnswerKey[i].toLowerCase()) {
          readingAnswerTemp += 1;
        }
      }

      if (listeningAnswer[i] !== '') {
        if (listeningAnswer[i].toLowerCase() === listeningAnswerKey[i].toLowerCase()) {
          listeningAnswerTemp += 1;
        }
      }
    }
    alert(
      `Jawaban benar Listening Test: ${listeningAnswerTemp}, Jawaban benar Reading Test: ${readingAnswerTemp}`
    );
  };

  return (
    <ContainerTest>
      {page === PAGE.AUTH && (
        <CodeCheckComponent handleNextPage={handleNextPage} dispatch={dispatch} />
      )}
      {page === PAGE.LISTENING && (
        <ListeningContainer handleNextPage={handleNextPage} dispatch={dispatch} />
      )}
      {page === PAGE.READING && (
        <ReadingContainer handleNextPage={handleNextPage} dispatch={dispatch} />
      )}
      {page === PAGE.WRITING && (
        <WritingContainer handleNextPage={handleNextPage} dispatch={dispatch} />
      )}
      {page === PAGE.COUNTING_ANSWER && (
        <div>
          <button onClick={() => checkingAnswer()}> Check Answer</button>
        </div>
      )}
    </ContainerTest>
  );
};

export default PreTestContainer;
