/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';
import Countdown from 'react-countdown';

import { FirstPage, SecondPage } from './Question';
import ThirdPage from './Question/ThirdPage';
import FourthPage from './Question/FourthPage';
import { SecondaryColor } from '../../../../../Assets/colorPalette';
import Track1 from '../../../../../Assets/pre-test-listening/track_1.mp3';
import Track2 from '../../../../../Assets/pre-test-listening/track_2.mp3';
import Track3 from '../../../../../Assets/pre-test-listening/track_3.mp3';
import Track4 from '../../../../../Assets/pre-test-listening/track_4.mp3';
import { updateAudio } from '../../../../../Redux/handleAnswer';
import { renderer, TimeHalfHour } from '../../../../../Assets/utils';

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
  const [time, setTime] = useState(TimeHalfHour);

  useEffect(() => {
    setTime(Date.now() + 3600000);
  }, []);

  const getAnswers = useSelector((state) => state.answer.value);
  const getAudio = useSelector((state) => state.answer.audio);

  const isPaginationActive = (value) => {
    return value === page;
  };

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingRight: '10px'
        }}>
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
        </Pagination>
        <Pagination>
          <Pagination.Item onClick={() => handleNextPage()}>
            CONTINUE TO READING SECTION
          </Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
};

export default ListeningTestComponent;
