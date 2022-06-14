/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Pagination } from 'react-bootstrap';

import { FirstPage, SecondPage } from './Question';
import ThirdPage from './Question/ThirdPage';
import FourthPage from './Question/FourthPage';
// import Countdown from 'react-countdown';
import {
  Track1,
  Track2,
  Track3,
  Track4
} from './Test/pre-test/pre-test-listening';

const PAGINATION = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4
};

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

  return (
    <div className="p-3">
      {/*<Countdown date={Date.now() + 2000000} daysInHours/>*/}
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
      {/*<hr />*/}
      {/*<Pagination>*/}
      {/*  <Pagination.Item*/}
      {/*    active={isPaginationActive(PAGINATION.FIRST)}*/}
      {/*    onClick={() => setPagination(1)}>*/}
      {/*    1*/}
      {/*  </Pagination.Item>*/}
      {/*  <Pagination.Item*/}
      {/*    active={isPaginationActive(PAGINATION.SECOND)}*/}
      {/*    onClick={() => setPagination(2)}>*/}
      {/*    2*/}
      {/*  </Pagination.Item>*/}
      {/*  <Pagination.Item*/}
      {/*    active={isPaginationActive(PAGINATION.THIRD)}*/}
      {/*    onClick={() => setPagination(3)}>*/}
      {/*    3*/}
      {/*  </Pagination.Item>*/}
      {/*  <Pagination.Item*/}
      {/*    active={isPaginationActive(PAGINATION.FOURTH)}*/}
      {/*    onClick={() => setPagination(4)}>*/}
      {/*    4*/}
      {/*  </Pagination.Item>*/}
      {/*</Pagination>*/}
    </div>
  );
};

export default ListeningTestComponent;
