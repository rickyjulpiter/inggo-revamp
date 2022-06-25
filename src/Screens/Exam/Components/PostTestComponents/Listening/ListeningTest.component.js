/* eslint-disable */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';
import Countdown from 'react-countdown';

import { SecondaryColor } from '../../../../../Assets/colorPalette';
import Track1 from '../../../../../Assets/post-test-listening/post_test_track1.mp3';
import Track2 from '../../../../../Assets/post-test-listening/post_test_track2.mp3';
import Track3 from '../../../../../Assets/post-test-listening/post_test_track3.mp3';
import Track4 from '../../../../../Assets/post-test-listening/post_test_track4.mp3';
import { updateAudio } from '../../../../../Redux/handleAnswer';
import { FirstPage, FourthPage, SecondPage, ThirdPage } from './Question';

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

const ListeningTestComponent = ({ dispatch, handleNextPage, date }) => {
  const [page, setPage] = useState(PAGINATION.FIRST);
  const getAnswers = useSelector((state) => state.answer.postTestListening);
  const getAudio = useSelector((state) => state.answer.postTestAudio);

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
    if (minutes === 10) {
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
          <FirstPage
            dispatch={dispatch}
            getAnswers={getAnswers}
            setPagination={(nextPage) => {
              changePage(nextPage);
            }}
            track={Track1}
            getAudio={getAudio}
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
            getAudio={getAudio}
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
            getAudio={getAudio}
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
            getAudio={getAudio}
          />
        )}
      </div>

      <hr />
      <Pagination>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.FIRST)}
          onClick={() => {
            setPage(PAGINATION.FIRST);
            // dispatch(updateAudio({ ...getAudio, 1: false }));
          }}>
          1
        </Pagination.Item>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.SECOND)}
          onClick={() => {
            setPage(PAGINATION.SECOND);
            dispatch(updateAudio({ ...getAudio, 1: false }));
          }}>
          2
        </Pagination.Item>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.THIRD)}
          onClick={() => {
            setPage(PAGINATION.THIRD);
            dispatch(
              updateAudio({
                ...getAudio,
                1: false,
                2: false
              })
            );
          }}>
          3
        </Pagination.Item>
        <Pagination.Item
          active={isPaginationActive(PAGINATION.FOURTH)}
          onClick={() => {
            setPage(PAGINATION.FOURTH);

            if (getAudio[5] === false) {
              dispatch(
                updateAudio({
                  ...getAudio,
                  4: false
                })
              );
            } else {
              dispatch(
                updateAudio({
                  ...getAudio,
                  1: false,
                  2: false,
                  3: false,
                  5: false
                })
              );
            }
          }}>
          4
        </Pagination.Item>
        <Pagination.Item onClick={() => handleNextPage()}>Next Section</Pagination.Item>
      </Pagination>
    </div>
  );
};

export default ListeningTestComponent;
