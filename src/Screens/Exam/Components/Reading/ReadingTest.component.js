/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import Countdown from 'react-countdown';
import styled from 'styled-components';

import { SecondaryColor } from '../../../../Assets/colorPalette';
import {
  FirstSectionReadingComponent,
  SecondSectionReadingComponent
} from './Question';

const PAGINATION = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4
};

const ContainerCountDown = styled.div`
  background-color: #cfd3e1;
  text-align: center;
  font-size: 20px;
  margin-bottom: 1vh;
`;

const ReadingTestComponent = () => {
  const [page, setPage] = useState(PAGINATION.FIRST);
  const getAnswers = useSelector((state) => state.answer.readingAnswer);
  const dispatch = useDispatch();
  console.log(getAnswers);

  const isPaginationActive = (value) => {
    return value === page;
  };

  const changePage = (value) => {
    setPage(value);
  };

  const renderer = ({ minutes, seconds, completed }) => {
    const formatSeconds = seconds === 0 ? '00' : seconds;
    if (completed) {
      return <span>Time's up</span>;
    }
    if (minutes === 28) {
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
        <Countdown date={Date.now() + 1800000} daysInHours renderer={renderer} />
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
        <Pagination.Item
          active={isPaginationActive(PAGINATION.FOURTH)}
          onClick={() => setPage(PAGINATION.FOURTH)}>
          4
        </Pagination.Item>
      </Pagination>
    </div>
  );
};

export default ReadingTestComponent;
