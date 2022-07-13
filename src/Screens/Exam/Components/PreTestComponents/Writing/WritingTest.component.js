/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Countdown from 'react-countdown';
import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';

import { SecondaryColor } from '../../../../../Assets/colorPalette';
import FirstSectionWritingComponent from './Question/FirstSection.writing.component';
import SecondSectionWritingComponent from './Question/SecondSection.writing.component';
import { renderer, TimeOneHour } from '../../../../../Assets/utils';

const ContainerCountDown = styled.div`
  background-color: #cfd3e1;
  text-align: center;
  font-size: 20px;
  margin-bottom: 1vh;
`;

const PAGINATION = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3
};

const WritingTestComponent = ({ dispatch, handleNextPage }) => {
  const [page, setPage] = useState(PAGINATION.FIRST);
  const [time, setTime] = useState(TimeOneHour);

  const getAnswers = useSelector((state) => state.answer.writingAnswer);

  const isPaginationActive = (value) => {
    return value === page;
  };

  const changePage = (value) => {
    setPage(value);
  };

  useEffect(() => {
    setTime(Date.now() + 3600000);
  }, []);

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
          <FirstSectionWritingComponent
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              changePage(nextPage);
            }}
          />
        )}

        {page === PAGINATION.SECOND && (
          <SecondSectionWritingComponent
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              changePage(nextPage);
            }}
          />
        )}
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingRight: '10px'
        }}>
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
        </Pagination>
        <Pagination>
          <Pagination.Item onClick={() => handleNextPage()}>Finish</Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
};

export default WritingTestComponent;
