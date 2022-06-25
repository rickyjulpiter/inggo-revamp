/* eslint-disable */

import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Table } from 'react-bootstrap';

import SectionTitle from '../../../SectionTitle';
import {
  updatePostTestAudio,
  updatePostTestListeningAnswer
} from '../../../../../../Redux/handleAnswer';

const FirstPage = ({ dispatch, getAnswers, setPagination, track, getAudio }) => {
  return (
    <div>
      <SectionTitle title="Section 1" />
      <h5 className="text-center">
        <b> Questions 1-10</b>
      </h5>
      <AudioPlayer
        src={track}
        autoPlay={getAudio[1]}
        onEnded={() => {
          setPagination(2);
          dispatch(updatePostTestAudio({ ...getAudio, 1: false }));
        }}
        showDownloadProgress={false}
        showFilledProgress={false}
        showJumpControls={false}
        showSkipControls={false}
        loop={false}
        customControlsSection={['VOLUME_CONTROLS']}
      />

      <h6 className="mt-2">
        <i>Complete the form below</i>
      </h6>
      <p>
        Write <b>ONE WORD AND/OR A NUMBER</b> for each answer
      </p>
      <Table bordered>
        <tbody>
          <tr>
            <td colSpan={2} className="text-center">
              <b>THEATRE ROYAL PLYMOUTH</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Example</td>
          </tr>
          <tr>
            <td>Performance</td>
            <td>
              The <b>Impostor</b>
            </td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>
              Saturday <b>1</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      1: event.target.value
                    })
                  );
                }}
                value={getAnswers[1]}
              />
            </td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>
              <b>2</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      2: event.target.value
                    })
                  );
                }}
                value={getAnswers[2]}
              />
            </td>
          </tr>
          <tr>
            <td>Tickets:</td>
            <td>three adults and one childs</td>
          </tr>
          <tr>
            <td>Seats in:</td>
            <td>
              the <b>3</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      3: event.target.value
                    })
                  );
                }}
                value={getAnswers[3]}
              />
            </td>
          </tr>
          <tr>
            <td>Seat row/number(s):</td>
            <td>
              <b>4</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      4: event.target.value
                    })
                  );
                }}
                value={getAnswers[4]}
              />
            </td>
          </tr>
          <tr>
            <td>Method of delivery:</td>
            <td>post</td>
          </tr>
          <tr>
            <td>Total payment:</td>
            <td>£39</td>
          </tr>
          <tr>
            <td colSpan={2}>Card details:</td>
          </tr>
          <tr>
            <td>Type:</td>
            <td>
              <b>5</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      5: event.target.value
                    })
                  );
                }}
                value={getAnswers[5]}
              />
            </td>
          </tr>
          <tr>
            <td>Number:</td>
            <td>
              <b>6</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      6: event.target.value
                    })
                  );
                }}
                value={getAnswers[6]}
              />
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>
              Mr J. <b>7</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      7: event.target.value
                    })
                  );
                }}
                value={getAnswers[7]}
              />
            </td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>
              <b>8</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      8: event.target.value
                    })
                  );
                }}
                value={getAnswers[8]}
              />{' '}
              Street, London
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <b>9</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      9: event.target.value
                    })
                  );
                }}
                value={getAnswers[9]}
              />
            </td>
          </tr>
          <tr>
            <td>Additional requests:</td>
            <td>put on the mailing list</td>
          </tr>
          <tr>
            <td></td>
            <td>
              book <b>10</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      10: event.target.value
                    })
                  );
                }}
                value={getAnswers[10]}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FirstPage;
