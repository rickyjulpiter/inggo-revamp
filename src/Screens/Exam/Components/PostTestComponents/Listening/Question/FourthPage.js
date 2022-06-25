/* eslint-disable */

import SectionTitle from '../../../SectionTitle';
import AudioPlayer from 'react-h5-audio-player';
import {
  updatePostTestAudio,
  updatePostTestListeningAnswer
} from '../../../../../../Redux/handleAnswer';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import {
  LiStyledArrow,
  ULStyled
} from '../../../../../Home/OurPrograms/ProgramDetail/ProgramDetail.styled';

const FourthPage = ({ dispatch, getAnswers, setPagination, track, getAudio }) => {
  return (
    <div>
      <SectionTitle title="Section 3" />
      <h5 className="text-center">
        <b> Questions 31-40</b>
      </h5>
      <AudioPlayer
        src={track}
        autoPlay={getAudio[4]}
        onEnded={() => {
          setPagination(4);
          dispatch(updatePostTestAudio({ ...getAudio, 4: false }));
        }}
        showDownloadProgress={false}
        showFilledProgress={false}
        showJumpControls={false}
        showSkipControls={false}
        loop={false}
        customControlsSection={['VOLUME_CONTROLS']}
      />
      <p className="mt-2">
        <i> Questions 31-33</i>
      </p>
      <p>
        <i>Complete the notes below</i>
      </p>
      <p>
        Write <b>ONE WORD ONLY</b> for each answer
      </p>
      <Row>
        <Col md={6} className="mt-2 p-2" style={{ border: '1px solid black' }}>
          <div>
            <p className="text-center">
              <b>The Tiger Shark</b>
            </p>
            <ULStyled>
              <LiStyledArrow>
                <b> Origin of name: </b>its dark bands
              </LiStyledArrow>
              <LiStyledArrow>
                <b> Size: </b>6.5 metres (maximum)
              </LiStyledArrow>
              <LiStyledArrow>
                <b> Preferred habitat: </b>near to <b>31</b>{' '}
                <input
                  style={{ border: 'none' }}
                  onChange={(event) => {
                    dispatch(
                      updatePostTestListeningAnswer({
                        ...getAnswers,
                        31: event.target.value
                      })
                    );
                  }}
                  value={getAnswers[31]}
                />
              </LiStyledArrow>
              <LiStyledArrow>
                <b> Typical food: </b>other sea creatures but also <b>32</b>
                <input
                  style={{ border: 'none' }}
                  onChange={(event) => {
                    dispatch(
                      updatePostTestListeningAnswer({
                        ...getAnswers,
                        32: event.target.value
                      })
                    );
                  }}
                  value={getAnswers[32]}
                />{' '}
                produces by humans
              </LiStyledArrow>
              <LiStyledArrow>
                <b> Raine Island area: </b>studies show tiger sharks are mainly found here during
                the <b>33</b>{' '}
                <input
                  style={{ border: 'none' }}
                  onChange={(event) => {
                    dispatch(
                      updatePostTestListeningAnswer({
                        ...getAnswers,
                        33: event.target.value
                      })
                    );
                  }}
                  value={getAnswers[33]}
                />{' '}
                (when turtles are nesting)
              </LiStyledArrow>
            </ULStyled>
          </div>
        </Col>
      </Row>
      <p className="mt-4">
        <i> Questions 34-38</i>
      </p>
      <p>
        <i>Complete the flow-chart below.</i>
      </p>
      <p>
        Write <b>ONE WORD ONLY</b> for each answer
      </p>
      <Row>
        <Col md={7}>
          <p className="text-center">
            <b>Shark Tagging Process</b>
          </p>
          <div className="mt-1 p-2 text-center" style={{ border: '1px solid green' }}>
            Pieces of <b>34</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    34: event.target.value
                  })
                );
              }}
              value={getAnswers[34]}
            />{' '}
            were attached to lines as bait
          </div>
          <div className="mt-1 p-2 text-center" style={{ border: '1px solid green' }}>
            The lines were <b>35</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    35: event.target.value
                  })
                );
              }}
              value={getAnswers[35]}
            />{' '}
            regularly.
          </div>
          <div className="mt-1 p-2 text-center" style={{ border: '1px solid green' }}>
            The hooked shark was brought to the <b>36</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    36: event.target.value
                  })
                );
              }}
              value={getAnswers[36]}
            />{' '}
            and secured.
          </div>
          <div className="mt-1 p-2 text-center" style={{ border: '1px solid green' }}>
            The shark was measured and tagged, and tissue removed for research.
          </div>
          <div className="mt-1 p-2 text-center" style={{ border: '1px solid green' }}>
            Larger sharks: an acoustic tag was fitted or a <b>37</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    37: event.target.value
                  })
                );
              }}
              value={getAnswers[37]}
            />{' '}
            was attached
          </div>
          <div className="mt-1 p-2 text-center" style={{ border: '1px solid green' }}>
            The shark was <b>38</b>{' '}
            <input
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updatePostTestListeningAnswer({
                    ...getAnswers,
                    38: event.target.value
                  })
                );
              }}
              value={getAnswers[38]}
            />{' '}
            and could be tracked
          </div>
        </Col>
      </Row>
      <p className="mt-4">
        <i> Questions 39-40</i>
      </p>
      <p>
        <i>
          Choose the correct Letter <b>A, B</b> or <b>C</b>
        </i>
      </p>
      <Row>
        <Col>
          <div className="mt-2">
            <p>39. The purpose of the research was to understand the tiger sharks’</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      39: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. reproductive patterns."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[39] === 'a'}
                />
                <Form.Check
                  label="B. migration patterns."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[39] === 'b'}
                />
                <Form.Check
                  label="C. feeding patterns."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[39] === 'c'}
                />
              </Form>
            </div>
          </div>
        </Col>

        <Col>
          <div className="mt-2">
            <p>40. Observations showed that, in general, tiger sharks</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      40: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. change depths frequently."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[40] === 'a'}
                />
                <Form.Check
                  label="B. usually avoid the surface of the water."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[40] === 'b'}
                />
                <Form.Check
                  label="C. often spend long periods on the ocean floor."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[40] === 'c'}
                />
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FourthPage;
