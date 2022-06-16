/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap';

import { FirstPage, SecondPage } from './Question';
import ThirdPage from './Question/ThirdPage';
import FourthPage from './Question/FourthPage';
import Countdown from 'react-countdown';
import { Track1, Track2, Track3, Track4 } from './Test/pre-test/pre-test-listening';
import { SecondaryColor } from '../../../../Assets/colorPalette';
import styled from 'styled-components';

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

const ListeningTestComponent = () => {
  const [page, setPage] = useState(PAGINATION.FIRST);
  const getAnswers = useSelector((state) => state.answer.value);
  const dispatch = useDispatch();
  console.log(getAnswers);

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
          <FirstPage
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              changePage(nextPage);
            }}
            track={Track1}
          />
        )}
        {page === PAGINATION.SECOND && (
          <SecondPage
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              changePage(nextPage);
            }}
            track={Track2}
          />
        )}
        {page === PAGINATION.THIRD && (
          <ThirdPage
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              changePage(nextPage);
            }}
            track={Track3}
          />
        )}
        {page === PAGINATION.FOURTH && (
          <FourthPage
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              console.log(nextPage);
            }}
            track={Track4}
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

export default ListeningTestComponent;
