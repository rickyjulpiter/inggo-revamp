/* eslint-disable */
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Col, Row, Table } from 'react-bootstrap';

import SectionTitle from '../../../SectionTitle';
import {
  updatePostTestAudio,
  updatePostTestListeningAnswer
} from '../../../../../../Redux/handleAnswer';
import Image from '../../../../../../Assets/Images/imageListening.jpeg';

const SecondPage = ({ dispatch, getAnswers, setPagination, track, getAudio }) => {
  return (
    <div>
      <SectionTitle title="Section 2" />
      <h5 className="text-center">
        <b> Questions 11-20</b>
      </h5>
      <AudioPlayer
        src={track}
        autoPlay={getAudio[2]}
        onEnded={() => {
          setPagination(3);
          dispatch(updatePostTestAudio({ ...getAudio, 2: false }));
        }}
        showDownloadProgress={false}
        showFilledProgress={false}
        showJumpControls={false}
        showSkipControls={false}
        loop={false}
        customControlsSection={['VOLUME_CONTROLS']}
      />
      <p className="mt-2">
        <i> Questions 11-17</i>
      </p>
      <p>
        <i> Label the plan of the rock festival site below</i>
      </p>
      <p>
        Choose <b>SEVEN</b> answers from the box and write the correct letter, <b>A-I</b>, next to
        questions 11-17
      </p>
      <Row>
        <Col>
          <Table borderless>
            <tbody>
              <tr>
                <td style={{ width: '5%' }}>
                  <b>A</b>
                </td>
                <td>art exhibition</td>
              </tr>
              <tr>
                <td>
                  <b>B</b>
                </td>
                <td>band entrance</td>
              </tr>
              <tr>
                <td>
                  <b>C</b>
                </td>
                <td>car park</td>
              </tr>
              <tr>
                <td>
                  <b>D</b>
                </td>
                <td>craft fair</td>
              </tr>
              <tr>
                <td>
                  <b>E</b>
                </td>
                <td>exhibitors' entrance</td>
              </tr>
              <tr>
                <td>
                  <b>F</b>
                </td>
                <td>fringe stage</td>
              </tr>
              <tr>
                <td>
                  <b>G</b>
                </td>
                <td>lock-up garages</td>
              </tr>
              <tr>
                <td>
                  <b>H</b>
                </td>
                <td>main stage</td>
              </tr>
              <tr>
                <td>
                  <b>I</b>
                </td>
                <td>restaurant</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <img src={Image} alt="image" className="img-responsive" />
        </Col>
        <Col>
          <p>
            <b>11</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    11: event.target.value
                  })
                );
              }}
              value={getAnswers[11]}
            />
          </p>
          <p>
            <b>12</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    12: event.target.value
                  })
                );
              }}
              value={getAnswers[12]}
            />
          </p>
          <p>
            <b>13</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    13: event.target.value
                  })
                );
              }}
              value={getAnswers[13]}
            />
          </p>
          <p>
            <b>14</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    14: event.target.value
                  })
                );
              }}
              value={getAnswers[14]}
            />
          </p>
          <p>
            <b>15</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    15: event.target.value
                  })
                );
              }}
              value={getAnswers[15]}
            />
          </p>
          <p>
            <b>16</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    16: event.target.value
                  })
                );
              }}
              value={getAnswers[16]}
            />
          </p>
          <p>
            <b>17</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    17: event.target.value
                  })
                );
              }}
              value={getAnswers[17]}
            />
          </p>
        </Col>
      </Row>
      <p className="mt-5">
        <i> Questions 18-20</i>
      </p>
      <p>
        <i>Complete the sentences below</i>
      </p>
      <p>
        Write <b>NO MORE THANK TWO WORDS</b> for each answer
      </p>

      <p>
        <b>18.</b> To show you are an official visitor, you have to wear the{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updatePostTestListeningAnswer({
                ...getAnswers,
                18: event.target.value
              })
            );
          }}
          value={getAnswers[18]}
        />
        . provided.
      </p>
      <p>
        <b>19.</b> Cars blocking paths could prevent access by{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updatePostTestListeningAnswer({
                ...getAnswers,
                19: event.target.value
              })
            );
          }}
          value={getAnswers[19]}
        />{' '}
        in an emergency.
      </p>
      <p>
        <b>20.</b> To reclaim items from storage, you must show your{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updatePostTestListeningAnswer({
                ...getAnswers,
                20: event.target.value
              })
            );
          }}
          value={getAnswers[20]}
        />{' '}
        .
      </p>
    </div>
  );
};

export default SecondPage;
