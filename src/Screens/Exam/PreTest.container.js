/* eslint-disable */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';
import { Col, Row } from 'react-bootstrap';

import { ContainerTest } from './style';
import CodeCheckComponent from './Components/CodeCheck.component';
import ListeningContainer from './Components/Listening/Listening.container';
import ReadingContainer from './Components/Reading/Reading.container';
import WritingContainer from './Components/Writing/Writing.container';
import { listeningAnswerKey, readingAnswerKey } from './AnswerKey';
import { convertListeningScore, convertReadingScore } from '../../Assets/utils';
import ButtonComponent from '../../Components/Button/Button.component';
import { SecondaryColor, WhiteColor } from '../../Assets/colorPalette';

const PAGE = {
  AUTH: 1,
  LISTENING: 2,
  READING: 3,
  WRITING: 4,
  COUNTING_ANSWER: 5
};

const PreTestContainer = () => {
  const [page, setPage] = useState(PAGE.READING);
  const writingAnswer = useSelector((state) => state.answer.writingAnswer);
  const readingAnswer = useSelector((state) => state.answer.readingAnswer);
  const listeningAnswer = useSelector((state) => state.answer.value);

  const [totalListeningAnswer, setTotalListeningAnswer] = useState(0);
  const [totalReadingAnswer, setTotalReadingAnswer] = useState(0);

  const dispatch = useDispatch();

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} className="p-5">
        <h4 className="text-center">
          <b> Pre-Test Result</b>
        </h4>
        <hr />
        <Row>
          <Col md={2} sm={2}>
            <b>Listening</b>
          </Col>
          <Col md={1} sm={1}>
            :
          </Col>
          <Col>{convertListeningScore(totalListeningAnswer)}</Col>
        </Row>
        <Row className="mt-2">
          <Col md={2} sm={2}>
            <b>Reading</b>
          </Col>
          <Col md={1} sm={1}>
            :
          </Col>
          <Col>{convertReadingScore(totalReadingAnswer)}</Col>
        </Row>
        <Row className="mt-2">
          <Col md={2} sm={2}>
            <b>Writing</b>
          </Col>
          <Col md={1} sm={1}>
            :
          </Col>
          <Col>
            <Row>
              <Col md={12} sm={12}>
                <b>Part 1</b> <br />
                {writingAnswer[1]}
              </Col>
              <Col className="mt-5" md={12} sm={12}>
                <b>Part 2</b> <br />
                {writingAnswer[2]}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  });

  const componentRef = useRef();

  const checkingAnswer = () => {
    let listeningAnswerTemp = 0;
    let readingAnswerTemp = 0;

    for (let i = 1; i <= 40; i++) {
      if (listeningAnswer[i] !== '') {
        if (i === 14) {
          let temp = '';

          if (listeningAnswer[i] === listeningAnswerKey[i][0]) {
            temp = listeningAnswerKey[i][0];
            listeningAnswerTemp += 1;
          } else if (listeningAnswer[i] === listeningAnswerKey[i][1]) {
            temp = listeningAnswerKey[i][1];
            listeningAnswerTemp += 1;
          }

          if (listeningAnswer[i + 1] === listeningAnswerKey[i][0]) {
            if (temp !== listeningAnswer[i + 1]) {
              listeningAnswerTemp += 1;
            }
          } else if (listeningAnswer[i + 1] === listeningAnswerKey[i][1]) {
            if (temp !== listeningAnswer[i + 1]) {
              listeningAnswerTemp += 1;
            }
          }
        } else if (Array.isArray(listeningAnswerKey[i])) {
          for (let j = 0; j < listeningAnswerKey[i].length; j++) {
            if (listeningAnswerKey[i][j].includes(listeningAnswer[i])) {
              listeningAnswerTemp += 1;
              break;
            }
          }
        } else {
          if (listeningAnswer[i].toLowerCase() === listeningAnswerKey[i].toLowerCase()) {
            listeningAnswerTemp += 1;
          }
        }
      }

      if (readingAnswer[i] !== '') {
        if (i === 6) {
          let temp = '';

          if (readingAnswer[i] === readingAnswerKey[i][0]) {
            temp = readingAnswerKey[i][0];
            readingAnswerTemp += 1;
          } else if (readingAnswer[i] === readingAnswerKey[i][1]) {
            temp = readingAnswerKey[i][1];
            readingAnswerTemp += 1;
          }

          if (readingAnswer[i + 1] === readingAnswerKey[i][0]) {
            if (temp !== readingAnswer[i + 1]) {
              readingAnswerTemp += 1;
            }
          } else if (readingAnswer[i + 1] === readingAnswerKey[i][1]) {
            if (temp !== readingAnswer[i + 1]) {
              readingAnswerTemp += 1;
            }
          }
        } else {
          if (Array.isArray(readingAnswerKey[i])) {
            for (let k = 0; k < readingAnswerKey[i].length; k++) {
              if (readingAnswerKey[i][k].includes(readingAnswer[i])) {
                readingAnswerTemp += 1;
                break;
              }
            }
          } else {
            if (readingAnswer[i].toLowerCase() === readingAnswerKey[i].toLowerCase()) {
              readingAnswerTemp += 1;
            }
          }
        }
      }
    }
    setTotalReadingAnswer(readingAnswerTemp);
    setTotalListeningAnswer(listeningAnswerTemp);
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
        <>
          <ComponentToPrint ref={componentRef} />
          <Row>
            <Col md={2} className="mx-auto">
              <ReactToPrint
                trigger={() => (
                  <button
                    style={{
                      backgroundColor: SecondaryColor,
                      color: WhiteColor,
                      border: 'none',
                      borderRadius: '100px',
                      padding: '11px 42px'
                    }}
                    onClick={() => checkingAnswer()}>
                    Download Result
                  </button>
                )}
                content={() => componentRef.current}
              />
            </Col>
          </Row>
        </>
      )}
    </ContainerTest>
  );
};

export default PreTestContainer;
