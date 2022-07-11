/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import axios from 'axios';

import { PrimaryColor, SecondaryColor, WhiteColor } from '../../Assets/colorPalette';
import { listeningAnswerKey, readingAnswerKey } from './Components/PreTestComponents/AnswerKey';

const ScoreView = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const [listeningAnswer, setListeningAnswer] = useState([]);
  const [readingAnswer, setReadingAnswer] = useState([]);
  const [writingAnswer, setWritingAnswer] = useState([]);

  const [listeningAnswerArray, setListeningAnswerArray] = useState([]);
  const [readingAnswerArray, setReadingAnswerArray] = useState([]);
  const [writingAnswerArray, setWritingAnswerArray] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetch = async () => {
    const { data } = await axios.get('https://inggo-be.herokuapp.com/pre-test');
    setData(data);
  };

  const deleteData = async (id) => {
    const payload = {
      id
    };
    try {
      await axios.post('https://inggo-be.herokuapp.com/pre-test/delete', payload);
      await fetch();
    } catch (e) {
      console.log(e);
    }
  };

  const convertTimeStamp = (time) => {
    return new Date(time).toISOString().slice(0, 19).replace('T', ' ');
  };

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

  useEffect(() => {
    fetch();
  }, []);

  const formattedData = (item) => {
    const formatData = JSON.parse(item?.answer);
    const { listeningAnswer, readingAnswer, writingAnswer } = formatData;

    setListeningAnswer(listeningAnswer);
    setReadingAnswer(readingAnswer);
    setWritingAnswer(writingAnswer);

    let tempListeningArray = [];
    let tempReadingArray = [];
    const tempWritingArray = [];

    for (let i = 1; i <= 40; i++) {
      tempListeningArray.push(listeningAnswer[i]);
      tempReadingArray.push(readingAnswer[i]);
    }

    for (let j = 1; j <= 2; j++) {
      tempWritingArray.push(writingAnswer[j]);
    }

    setListeningAnswerArray(tempListeningArray);
    setReadingAnswerArray(tempReadingArray);
    setWritingAnswerArray(tempWritingArray);
  };

  const _renderTableContent = () => {
    return (
      <tbody>
        <tr>
          <td className="text-center" colSpan={3}>
            <h4>
              <b> Listening</b>
            </h4>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <b> No</b>
          </td>
          <td className="text-center">
            <b> Answer</b>
          </td>
          <td className="text-center" width="50%">
            <b> Answer Key</b>
          </td>
        </tr>
        {listeningAnswerArray?.map((data, index) => {
          let newIndex = index + 1;
          return (
            <tr className="text-center" key={index}>
              <td>{newIndex}</td>
              <td>{convertAnswer(listeningAnswer[newIndex])}</td>
              <td>{convertAnswer(listeningAnswerKey[newIndex])}</td>
            </tr>
          );
        })}
        <tr>
          <td className="text-center" colSpan={3}>
            <h4>
              <b> Reading</b>
            </h4>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <b> No</b>
          </td>
          <td className="text-center">
            <b> Answer</b>
          </td>
          <td className="text-center" width="50%">
            <b> Answer Key</b>
          </td>
        </tr>
        {readingAnswerArray?.map((data, index) => {
          let newIndex = index + 1;
          return (
            <tr className="text-center" key={index}>
              <td>{newIndex}</td>
              <td>{convertAnswer(readingAnswer[newIndex])}</td>
              <td>{convertAnswer(readingAnswerKey[newIndex])}</td>
            </tr>
          );
        })}
        <tr>
          <td className="text-center" colSpan={3}>
            <h4>
              <b> Writing</b>
            </h4>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <b> No</b>
          </td>
          <td className="text-center" colSpan={2}>
            <b> Answer</b>
          </td>
        </tr>
        {writingAnswerArray?.map((data, index) => {
          let newIndex = index + 1;
          return (
            <tr>
              <td className="text-center">{newIndex}</td>
              <td colSpan={2}>
                <p className="text-justify">{writingAnswerArray[index]}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <>
      <div className="p-5" style={{ minHeight: '75vh' }}>
        <Table>
          <thead>
            <tr>
              <td>No</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone Number</td>
              <td className="text-center">Listening Score</td>
              <td className="text-center">Reading Score</td>
              <td className="text-center">Timestamp</td>
              <td className="text-center">#</td>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.notelp}</td>
                  <td className="text-center">{item?.listening}</td>
                  <td className="text-center">{item?.reading}</td>
                  <td className="text-center">{convertTimeStamp(item?.createdAt)}</td>
                  <td className="text-center">
                    <i
                      className="bi bi-eye"
                      onClick={() => {
                        setSelected(item);
                        formattedData(item);
                        handleShow();
                      }}
                      style={{
                        color: WhiteColor,
                        backgroundColor: PrimaryColor,
                        padding: 5,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginRight: '2px'
                      }}
                    />
                    <i
                      className="bi bi-trash"
                      onClick={() => {
                        window.confirm('Are you sure you wish to delete this item?')
                          ? deleteData(item?.id)
                          : () => {
                              console.log('');
                            };
                      }}
                      style={{
                        color: WhiteColor,
                        backgroundColor: SecondaryColor,
                        padding: 5,
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose} animation={false} size="lg" fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>{selected?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered>{selected && _renderTableContent()}</Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ScoreView;
