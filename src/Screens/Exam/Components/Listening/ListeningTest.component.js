/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirstPage, SecondPage } from './Question';
import { Pagination } from 'react-bootstrap';
import ThirdPage from './Question/ThirdPage';

const PAGINATION = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4
};

const ListeningTestComponent = () => {
  const [page, setPage] = useState(PAGINATION.THIRD);
  const getAnswers = useSelector((state) => state.answer.value);
  const dispatch = useDispatch();
  console.log(getAnswers);

  const isPaginationActive = (value) => {
    return value === page;
  };

  const setPagination = (value) => {
    setPage(value);
  };

  return (
    <div className="p-3">
      {page === PAGINATION.FIRST && <FirstPage dispatch={dispatch} getAnswers={getAnswers} />}
      {page === PAGINATION.SECOND && <SecondPage dispatch={dispatch} getAnswers={getAnswers} />}
      {page === PAGINATION.THIRD && <ThirdPage dispatch={dispatch} getAnswers={getAnswers} />}
      <hr />
      <Pagination>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.FIRST)}
          onClick={() => setPagination(1)}>
          1
        </Pagination.Item>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.SECOND)}
          onClick={() => setPagination(2)}>
          2
        </Pagination.Item>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.THIRD)}
          onClick={() => setPagination(3)}>
          3
        </Pagination.Item>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.FOURTH)}
          onClick={() => setPagination(4)}>
          4
        </Pagination.Item>
      </Pagination>
    </div>
  );
};

export default ListeningTestComponent;
