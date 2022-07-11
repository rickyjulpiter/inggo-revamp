/* eslint-disable */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import Countdown from 'react-countdown';
import styled from 'styled-components';

import { SecondaryColor } from '../../../../../Assets/colorPalette';
import {
  FirstSectionReadingComponent,
  SecondSectionReadingComponent,
  ThirdSectionReadingComponent
} from './Question';

const PAGINATION = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3
};

const ContainerCountDown = styled.div`
  background-color: #cfd3e1;
  text-align: center;
  font-size: 20px;
  margin-bottom: 1vh;
`;

const ReadingTestComponent = ({ date, dispatch, handleNextPage }) => {
  const [page, setPage] = useState(PAGINATION.FIRST);

  const getAnswers = useSelector((state) => state.answer.readingAnswer);

  const isPaginationActive = (value) => {
    return value === page;
  };

  const changePage = (value) => {
    setPage(value);
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    const formatSeconds = seconds === 0 ? '00' : seconds;
    if (completed) {
      return <span>Time's up</span>;
    }
    if (minutes === 10 || minutes === 5) {
      return (
        <>
          <span style={{ color: SecondaryColor, fontWeight: 700, fontSize: 30 }}>
            {minutes}:{formatSeconds}
          </span>{' '}
          left
        </>
      );
    } else {
      return (
        <>
          <span>
            {hours > 0 ? `${hours}:` : ''}
            {minutes}:{formatSeconds}
          </span>{' '}
          left
        </>
      );
    }
  };

  return (
    <div>
      <ContainerCountDown>
        <Countdown
          date={date}
          daysInHours
          renderer={renderer}
          onComplete={() => {
            handleNextPage();
          }}
        />
      </ContainerCountDown>
      <div className="m-4">
        {page === PAGINATION.FIRST && (
          <FirstSectionReadingComponent
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              changePage(nextPage);
            }}
          />
        )}

        {page === PAGINATION.SECOND && (
          <SecondSectionReadingComponent
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              changePage(nextPage);
            }}
          />
        )}

        {page === PAGINATION.THIRD && (
          <ThirdSectionReadingComponent
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              changePage(nextPage);
            }}
          />
        )}
      </div>

      <hr />
      <Pagination>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.FIRST)}
          onClick={() => setPage(PAGINATION.FIRST)}>
          1
        </Pagination.Item>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.SECOND)}
          onClick={() => setPage(PAGINATION.SECOND)}>
          2
        </Pagination.Item>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.THIRD)}
          onClick={() => setPage(PAGINATION.THIRD)}>
          3
        </Pagination.Item>
        <Pagination.Item onClick={() => handleNextPage()}>CONTINUE TO WRITING SECTION</Pagination.Item>
      </Pagination>
    </div>
  );
};

export default ReadingTestComponent;
