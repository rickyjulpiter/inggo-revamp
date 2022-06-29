/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import axios from 'axios';

import { ContainerTest } from './style';
import CodeCheckComponent from './Components/CodeCheck.component';
import ListeningContainer from './Components/PreTestComponents/Listening/Listening.container';
import ReadingContainer from './Components/PreTestComponents/Reading/Reading.container';
import WritingContainer from './Components/PreTestComponents/Writing/Writing.container';
import { listeningAnswerKey, readingAnswerKey } from './Components/PreTestComponents/AnswerKey';
import { convertListeningScore, convertReadingScore } from '../../Assets/utils';
import { SecondaryColor, WhiteColor } from '../../Assets/colorPalette';
import { CenterDiv } from '../Home/Contact/Contact.styled';

const PAGE = {
  AUTH: 1,
  LISTENING: 2,
  READING: 3,
  WRITING: 4,
  COUNTING_ANSWER: 5
};

const PreTestContainer = () => {
  const [page, setPage] = useState(PAGE.AUTH);
  const [fillFormPage, setFillFormPage] = useState(true);

  const writingAnswer = useSelector((state) => state.answer.writingAnswer);
  const readingAnswer = useSelector((state) => state.answer.readingAnswer);
  const listeningAnswer = useSelector((state) => state.answer.value);

  const [totalListeningAnswer, setTotalListeningAnswer] = useState(0);
  const [totalReadingAnswer, setTotalReadingAnswer] = useState(0);

  const [listeningAnswerArray, setListeningAnswerArray] = useState([]);
  const [readingAnswerArray, setReadingAnswerArray] = useState([]);

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: ''
  });

  console.log(profile);

  const dispatch = useDispatch();

  const renderAnswerToArray = () => {
    let tempListeningArray = [];
    let tempReadingArray = [];
    for (let i = 1; i <= 40; i++) {
      tempListeningArray.push(listeningAnswer[i]);
      tempReadingArray.push(readingAnswer[i]);
    }
    setListeningAnswerArray(tempListeningArray);
    setReadingAnswerArray(tempReadingArray);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    renderAnswerToArray();
  }, []);

  const convertAnswer = (answer) => {
    if (Array.isArray(answer)) {
      return answer.map((data, index) => {
        if (index + 1 === answer.length) {
          return `${data}`;
        } else {
          return `${data}, `;
        }
      });
    } else {
      return answer;
    }
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const sendResults = async () => {
    const payload = {
      name: profile.name,
      email: profile.email,
      notelp: profile.phone,
      listening: totalListeningAnswer,
      reading: totalReadingAnswer
    };

    const response = await axios.post('https://inggo-be.herokuapp.com/pre-test', payload);
    console.log(response);
    setFillFormPage(false);
  };

  const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} className="p-5">
        <h4 className="text-center">
          <b> Pre-Test Result</b>
        </h4>
        <hr />
        <Row>
          <Col md={4} sm={4}>
            <b>Listening Score</b>
          </Col>
          <Col md={1} sm={1}>
            :
          </Col>
          <Col>{convertListeningScore(totalListeningAnswer)}</Col>
        </Row>
        <Row className="mt-2">
          <Col md={4} sm={4}>
            <b>Reading Score</b>
          </Col>
          <Col md={1} sm={1}>
            :
          </Col>
          <Col>{convertReadingScore(totalReadingAnswer)}</Col>
        </Row>
        <hr />
        <Row className="mt-2">
          <Col md={6} sm={6}>
            <Table bordered>
              <tbody>
                <tr>
                  <td colSpan={3} className="text-center">
                    <b> Listening Answer</b>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>
                    <b> No</b>
                  </td>
                  <td>
                    <b> Answer</b>
                  </td>
                  <td>
                    <b> Answer Key</b>
                  </td>
                </tr>
                {listeningAnswerArray?.map((data, index) => {
                  let newIndex = index + 1;
                  return (
                    <tr className="text-center">
                      <td>{newIndex}</td>
                      <td>{convertAnswer(listeningAnswer[newIndex])}</td>
                      <td>{convertAnswer(listeningAnswerKey[newIndex])}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={6} sm={6}>
            <Table bordered>
              <tbody>
                <tr>
                  <td colSpan={3} className="text-center">
                    <b> Reading Answer</b>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>
                    <b> No</b>
                  </td>
                  <td>
                    <b> Answer</b>
                  </td>
                  <td>
                    <b> Answer Key</b>
                  </td>
                </tr>
                {readingAnswerArray?.map((data, index) => {
                  let newIndex = index + 1;
                  return (
                    <tr className="text-center">
                      <td>{newIndex}</td>
                      <td>{convertAnswer(readingAnswer[newIndex])}</td>
                      <td>{convertAnswer(readingAnswerKey[newIndex])}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={4} sm={4}>
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
          <div style={{ display: 'none' }}>
            <ComponentToPrint ref={componentRef} />
          </div>

          {fillFormPage && (
            <Row className="p-4">
              <Col md={6} className="mx-auto">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      onChange={(e) => {
                        setProfile({
                          ...profile,
                          name: e.target.value
                        });
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => {
                        setProfile({
                          ...profile,
                          email: e.target.value
                        });
                      }}
                    />
                    <Form.Text className="text-muted">
                      Make sure you enter correct email format
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                      onChange={(e) => {
                        setProfile({
                          ...profile,
                          phone: e.target.value
                        });
                      }}
                    />
                  </Form.Group>
                  <CenterDiv>
                    <Button
                      style={{
                        backgroundColor: SecondaryColor,
                        color: WhiteColor,
                        border: 'none',
                        borderRadius: '100px',
                        padding: '11px 42px'
                      }}
                      type="submit"
                      disabled={
                        profile.name === '' ||
                        profile.phone === '' ||
                        profile.email === '' ||
                        !validateEmail(profile.email)
                      }
                      onClick={() => sendResults()}>
                      See my results
                    </Button>
                  </CenterDiv>
                </Form>
              </Col>
            </Row>
          )}

          {!fillFormPage && (
            <>
              <div className="p-5">
                <h4 className="text-center">
                  <b> Pre-Test Result</b>
                </h4>
                <hr />
                <Row>
                  <Col md={4} sm={4}>
                    <b>Listening Score</b>
                  </Col>
                  <Col md={1} sm={1}>
                    :
                  </Col>
                  <Col>{convertListeningScore(totalListeningAnswer)}</Col>
                </Row>
                <Row className="mt-2">
                  <Col md={4} sm={4}>
                    <b>Reading Score</b>
                  </Col>
                  <Col md={1} sm={1}>
                    :
                  </Col>
                  <Col>{convertReadingScore(totalReadingAnswer)}</Col>
                </Row>
              </div>
              <Row>
                <Col md={4} className="mx-auto mb-4">
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
                        Download Answer Sheet and Answer Key
                      </button>
                    )}
                    content={() => componentRef.current}
                  />
                </Col>
              </Row>
            </>
          )}
        </>
      )}
    </ContainerTest>
  );
};

export default PreTestContainer;
