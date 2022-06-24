/* eslint-disable */
import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';

import { updateAnswer, updateAudio } from '../../../../../Redux/handleAnswer';
import SectionTitle from '../../SectionTitle';

const FourthPage = ({ dispatch, getAnswers, setPagination, track, getAudio }) => {
  return (
    <div>
      <SectionTitle title="Section 4" />
      <h5 className="text-center">
        <b> Questions 31-40</b>
      </h5>

      <AudioPlayer
        src={track}
        autoPlay={getAudio[4]}
        onEnded={() => {
          setPagination(5);
          dispatch(updateAudio({ ...getAudio, 4: false }));
        }}
        showDownloadProgress={false}
        showFilledProgress={false}
        showJumpControls={false}
        showSkipControls={false}
        loop={false}
        customControlsSection={['VOLUME_CONTROLS']}
      />

      <h5 className="mt-2">
        <b> Questions 31-33</b>
      </h5>
      <h6>Complete the sentences below.</h6>
      <h6>
        Write <b>NO MORE THAN THREE WORDS</b> for each answer
      </h6>
      <Row>
        <Col md={10}>
          <div>
            <p className="text-center mt-3">
              <b>Peregrine Falcons</b>
            </p>
            <p>
              <b>31</b> The Peregrine falcons found in{' '}
              <input
                style={{ border: 'none' }}
                value={getAnswers[31]}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      31: event.target.value
                    })
                  );
                }}
              />{' '}
              are not migratory birds.
            </p>
            <p>
              <b>32</b> There is disagreement about their maximum{' '}
              <input
                style={{ border: 'none' }}
                value={getAnswers[32]}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      32: event.target.value
                    })
                  );
                }}
              />
            </p>
            <p>
              <b>33</b> When the female is guarding the nest, the male spends most of his time{' '}
              <input
                style={{ border: 'none' }}
                value={getAnswers[33]}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      33: event.target.value
                    })
                  );
                }}
              />
            </p>
          </div>
        </Col>
      </Row>

      <h5 className="mt-2">
        <b> Questions 34-37</b>
      </h5>
      <h6>
        <i>Complete the table below.</i>
      </h6>
      <h6>
        Write <b>NO MORE THAN THREE WORDS </b> for each answer
      </h6>

      <div>
        <Table bordered>
          <tbody>
            <tr>
              <td>
                <b>Age of falcons</b>
              </td>
              <td>
                <b>What occurs</b>
              </td>
            </tr>
            <tr>
              <td>20 days old</td>
              <td>
                The falcons <b>34</b>{' '}
                <input
                  style={{ border: 'none' }}
                  value={getAnswers[34]}
                  onChange={(event) => {
                    dispatch(
                      updateAnswer({
                        ...getAnswers,
                        34: event.target.value
                      })
                    );
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>28 days old</td>
              <td>
                The falcons are <b>35</b>{' '}
                <input
                  style={{ border: 'none' }}
                  value={getAnswers[35]}
                  onChange={(event) => {
                    dispatch(
                      updateAnswer({
                        ...getAnswers,
                        35: event.target.value
                      })
                    );
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>2 months old</td>
              <td>
                The falcons <b>36</b>{' '}
                <input
                  style={{ border: 'none' }}
                  value={getAnswers[36]}
                  onChange={(event) => {
                    dispatch(
                      updateAnswer({
                        ...getAnswers,
                        36: event.target.value
                      })
                    );
                  }}
                />{' '}
                permanently
              </td>
            </tr>
            <tr>
              <td>1-12 months old</td>
              <td>
                More than half of falcons <b>37</b>{' '}
                <input
                  style={{ border: 'none' }}
                  value={getAnswers[37]}
                  onChange={(event) => {
                    dispatch(
                      updateAnswer({
                        ...getAnswers,
                        37: event.target.value
                      })
                    );
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <h5 className="mt-4">
        <b> Questions 38-40</b>
      </h5>
      <h6>
        <i>Complete the table below.</i>
      </h6>
      <h6>
        Write <b>NO MORE THAN TWO WORDS AND OR A NUMBER</b> for each answer
      </h6>
      <Table borderless>
        <tbody>
          <tr>
            <td colSpan={2}>
              <b>Procedures used for field research on Peregrine falcon chick</b>
            </td>
          </tr>
          <tr>
            <td>First:</td>
            <td>catch chicks</td>
          </tr>
          <tr>
            <td>Second:</td>
            <td>
              <b>38</b>{' '}
              <input
                value={getAnswers[38]}
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      38: event.target.value
                    })
                  );
                }}
              />{' '}
              to legs
            </td>
          </tr>
          <tr>
            <td>Third:</td>
            <td>
              <b>39</b>{' '}
              <input
                value={getAnswers[39]}
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      39: event.target.value
                    })
                  );
                }}
              />{' '}
              of chicks
            </td>
          </tr>
          <tr>
            <td>Fo:</td>
            <td>take blood sample to assess the level of pesticide</td>
          </tr>
          <tr>
            <td>Fifth:</td>
            <td>
              check the <b>40</b>{' '}
              <input
                value={getAnswers[40]}
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      40: event.target.value
                    })
                  );
                }}
              />{' '}
              of the birds
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FourthPage;
