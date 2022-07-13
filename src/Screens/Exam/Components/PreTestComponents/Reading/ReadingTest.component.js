/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import Countdown from 'react-countdown';
import styled from 'styled-components';

import {
  FirstSectionReadingComponent,
  SecondSectionReadingComponent,
  ThirdSectionReadingComponent
} from './Question';
import { renderer, TimeOneHour } from '../../../../../Assets/utils';

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

const ReadingTestComponent = ({ dispatch, handleNextPage }) => {
  const [page, setPage] = useState(PAGINATION.FIRST);
  const [time, setTime] = useState(TimeOneHour);

  const getAnswers = useSelector((state) => state.answer.readingAnswer);

  const isPaginationActive = (value) => {
    return value === page;
  };

  useEffect(() => {
    setTime(Date.now() + 3600000);
  }, []);

  const changePage = (value) => {
    setPage(value);
  };

  return (
    <div>
      <ContainerCountDown>
        <Countdown
          date={time}
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
      <div style={{display: 'flex', justifyContent: 'space-between', paddingRight: '10px'}}>
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

        </Pagination>
        <Pagination>
          <Pagination.Item onClick={() => handleNextPage()}>
            CONTINUE TO WRITING SECTION
          </Pagination.Item>
        </Pagination>
      </div>

    </div>
  );
};

export default ReadingTestComponent;
