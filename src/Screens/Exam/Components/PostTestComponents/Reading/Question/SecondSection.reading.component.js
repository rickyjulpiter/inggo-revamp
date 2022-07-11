/* eslint-disable */
import React, { useState } from 'react';

import SectionTitle from '../../../SectionTitle';
import { Col, Form, Row } from 'react-bootstrap';

import FirstImage from '../../../../../../Assets/post-test-reading/postTest14.jpeg';
import SecondImage from '../../../../../../Assets/post-test-reading/postTest1516.png';
import ThirdImage from '../../../../../../Assets/post-test-reading/postTest17.png';
import { updatePostTestReadingAnswer } from '../../../../../../Redux/handleAnswer';

const SecondSectionReadingComponent = ({ dispatch, getAnswers }) => {
  const [answer, setAnswer] = useState(getAnswers[24]);

  const checkIfExists = (value) => {
    return answer?.includes(value);
  };

  const isChecked = (value) => {
    const isExists = checkIfExists(value);
    if (isExists) {
      const filteredArray = answer.filter((e) => e !== value);
      setAnswer(filteredArray);
    }
    if (!isExists) {
      if (answer?.length > 2) {
        alert('Maximal 3 answer for this question!');
      } else {
        setAnswer([...answer, value]);
        dispatch(
          updatePostTestReadingAnswer({
            ...getAnswers,
            24: [...answer, value]
          })
        );
      }
    }
  };
  return (
    <div>
      <SectionTitle title="READING PASSAGE 2" />
      <p>
        You should spend about 20 minutes on <b> Questions 14-26</b>, which are based on Reading
        Passage 2 on pages 6 and 7.
      </p>
      <Row>
        <Col md={8}>
          <h5 className="text-center">
            <b>TWO WINGS AND A TOOLKIT</b>
          </h5>
          <h6 className="text-center">
            <b>
              <i>
                A research team at Oxford University discover the remarkable toolmaking skills of
                New Caledonian crows
              </i>
            </b>
          </h6>
          <p className="text-justify mt-2 mb-2">
            Betty and her mate Abel are captive crows in the care of Alex Kacelnik, an expert in
            animal behaviour at Oxford University. They belong to a forest-dwelling species of bird
            (Corvus moneduloides) confined to two islands in the South Pacific. New Caledonian crows
            are tenacious predators, and the only birds that habitually use a wide selection of
            self-made tools to find food.
          </p>
          <p className="text-justify mt-2 mb-2">
            One of the wild crows’ cleverest tools is the crochet hook, made by detaching a side
            twig from a larger one, leaving enough of the larger twig to shape into a hook. Equally
            cunning is a tool crafted from the barbed vine-leaf, which consists of a central rib
            with paired leaflets each with a rose-like thorn at its base. They strip out a piece of
            this rib, removing the leaflets and all but one thorn at the top, which remains as a
            ready-made hook to prise out insects from awkward cracks.
          </p>
          <p className="text-justify mt-2 mb-2">
            The crows also make an ingenious tool called a padanus probe from padanus tree leaves.
            The tool has a broad base, sharp tip, a row of tiny hooks along one edge, and a tapered
            shape created by the crow nipping and tearing to form a progression of three or four
            steps along the other edge of the leaf. What makes this tool special is that they
            manufacture it to a standard design, as if following a set of instructions. Although it
            is rare to catch a crow in the act of clipping out a padanus probe, we do have ample
            proof of their workmanship: the discarded leaves from where the tools are cut. The
            remarkable thing that these ‘counterpart’ leaves tell us is that crows consistently
            produce the same design every time, with no in-between or trial versions. It’s left the
            researchers wondering whether, like people, they envisage the tool before they start and
            perform the actions they know are needed to make it. Research has revealed that genetics
            plays a part in the less sophisticated toolmaking skills of finches in the Galapagos
            islands. No one knows if that’s also the case for New Caledonian crows, but it’s highly
            unlikely that their toolmaking skills are hardwired into the brain. ‘The picture so far
            points to a combination of cultural transmission – from parent birds to their young –
            and individual resourcefulness,’ says Kacelnik.
          </p>
          <p className="text-justify mt-2 mb-2">
            In a test at Oxford, Kacelnik’s team offered Betty and Abel an original challenge – food
            in a bucket at the bottom of a ‘well’. The only wat to get the food was to hook the
            bucket out by its handle. Given a choice of tools – a straight length of wire and one
            with a hooked end – the birds immediately picked the hook, showing that they did indeed
            understand the functional properties of the tool.
          </p>
          <p className="text-justify mt-2 mb-2">
            But do they also have the foresight and creativity to plan the construction of their
            tools? It appears they do. In one bucket-in-the-well test, Abel carried off the hook,
            leaving Betty with nothing but the straight wire. ‘What happened next was absolutely
            amazing,’ says Kacelnik. She wedged the tip of the wire into a crack in a plastic dish
            and pulled the other end to fashion her own hook. Wild crows don't have access to
            pliable, bendable material that retains its shape, and Betty’s only similar experience
            was a brief encounter with some pipe cleaners a year earlier. In nine out of ten further
            tests, she again made hooks and retrieved the bucket.
          </p>
          <p className="text-justify mt-2 mb-2">
            The question of what's going on in a crow’s mind will take time and a lot more
            experiments to answer, but there could be a lesson in it for understanding our own
            evolution. Maybe our ancestors, who suddenly begin to create symmetrical tools with
            carefully worked edges some 1.5 million years ago, didn't actually have the
            sophisticated mental abilities with which we credit them. Closer scrutiny of the brains
            of New Caledonian crows might provide a few pointers to the special attributes they
            would have needed. ‘If we’re lucky we may find specific developments in the brain that
            set these animals apart,’ says Kacelnik.
          </p>
          <p className="text-justify mt-2 mb-2">
            One of these might be a very strong degree of laterality - the specialisation of one
            side of the brain to perform specific tasks. In people, the left side of the brain
            controls the processing of complex sequential tasks, and also language and speech. One
            of the consequences of this is thought to be the right-handedness. Interestingly,
            biologists have noticed that most padanus probes are cut from the left side of the leaf,
            meaning that the birds clip them with the right side of their beaks - the crow
            equivalent of right-handedness. The team thinks this reflects the fact that the left
            side of the crow’s brain is specialised to handle the sequential processing required to
            make complex tools.
          </p>
          <p className="text-justify mt-2 mb-2">
            Under what conditions this extraordinary talent have emerged in these two species? They
            are both social creatures, and wide-ranging in their feeding habits. These factors were
            probably important but, ironically, it may have been their shortcomings that triggered
            the evolution of toolmaking. Maybe the ancestors of crows and humans found themselves in
            a position where they couldn't make the physical adaptations required for survival - so
            they had to change their behaviour instead. The stage was then set for the evolution all
            of those rare cognitive skills that produce sophisticated tools. New Caledonian crows
            may tell us what those crucial skills are.
          </p>
        </Col>
        <Col>
          <h5 className="mt-4">
            <b> Questions 14-17</b>
          </h5>
          <p>
            <i>Label the diagram below</i>
          </p>
          <p>
            Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.
          </p>
          <p>
            <i>Write your answers in boxes 14 - 17 on your answer sheet </i>
          </p>
          <p className="text-center">
            <b>THREE TOOLS MADE BY CROWS</b>
          </p>

          <p>
            <b> a) 14</b>{' '}
            <input
              style={{ border: 'none', width: '20%' }}
              value={getAnswers[14]}
              onChange={(event) => {
                dispatch(
                  updatePostTestReadingAnswer({
                    ...getAnswers,
                    14: event.target.value
                  })
                );
              }}
            />
          </p>
          <img src={FirstImage} alt="image" className="img-fluid" />

          <p className="mt-3">
            <b>b) Barbed vine-leaf stick</b>
          </p>
          <p className="mt-3">
            <b> 15</b>{' '}
            <input
              style={{ border: 'none', width: '20%' }}
              value={getAnswers[15]}
              onChange={(event) => {
                dispatch(
                  updatePostTestReadingAnswer({
                    ...getAnswers,
                    15: event.target.value
                  })
                );
              }}
            />
          </p>
          <p className="mt-1">
            <b> 16. a</b>{' '}
            <input
              style={{ border: 'none', width: '20%' }}
              value={getAnswers[16]}
              onChange={(event) => {
                dispatch(
                  updatePostTestReadingAnswer({
                    ...getAnswers,
                    16: event.target.value
                  })
                );
              }}
            />
          </p>
          <img src={SecondImage} alt="image" className="img-fluid" />
          <p className="mt-3">
            <b>c) Padanus Brobe</b>
          </p>
          <p className="mt-1">
            series of <b> 17</b>{' '}
            <input
              style={{ border: 'none', width: '20%' }}
              value={getAnswers[17]}
              onChange={(event) => {
                dispatch(
                  updatePostTestReadingAnswer({
                    ...getAnswers,
                    17: event.target.value
                  })
                );
              }}
            />{' '}
            created by nipping and tearing
          </p>
          <img src={ThirdImage} alt="image" className="img-fluid" style={{ width: '50%' }} />
        </Col>
        <Col md={12} sm={12} xl={12}>
          <h5 className="mt-4">
            <b> Questions 18-23</b>
          </h5>
          <p>
            Do the following statements agree with the information given in Reading Passage 2?{' '}
            <br />
            In boxes 18-23 on your answer sheet, write
          </p>
          <div style={{ marginLeft: 30 }}>
            <b>
              <i>TRUE</i> if the statement agrees with the information
            </b>{' '}
            <br />
            <b>
              <i>FALSE</i> if the statement contradicts the information
            </b>{' '}
            <br />
            <b>
              <i>NOT GIVEN</i> if there is no information on this
            </b>
          </div>
          <Row>
            <Col md={6} sm={6} xl={6}>
              <Row className="mb-2 mt-4">
                <Col md={1}>
                  <b>18 </b>
                </Col>
                <Col md={11}>
                  There appears to be a fixed pattern for the padanus probe’s construction.
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updatePostTestReadingAnswer({
                          ...getAnswers,
                          18: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. True"
                      name="group1"
                      type="radio"
                      value="true"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[18] === 'true'}
                    />
                    <Form.Check
                      label="B. False"
                      name="group1"
                      type="radio"
                      value="false"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[18] === 'false'}
                    />
                    <Form.Check
                      label="C. Not Given"
                      name="group1"
                      type="radio"
                      value="notgiven"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[18] === 'notgiven'}
                    />
                  </Form>
                </Col>
              </Row>

              <Row className="mb-2 mt-4">
                <Col md={1}>
                  <b>19 </b>
                </Col>
                <Col md={11}>
                  There is plenty of evidence to indicate how the crows manufacture the padanus
                  probe.
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updatePostTestReadingAnswer({
                          ...getAnswers,
                          19: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. True"
                      name="group1"
                      type="radio"
                      value="true"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[19] === 'true'}
                    />
                    <Form.Check
                      label="B. False"
                      name="group1"
                      type="radio"
                      value="false"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[19] === 'false'}
                    />
                    <Form.Check
                      label="C. Not Given"
                      name="group1"
                      type="radio"
                      value="notgiven"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[19] === 'notgiven'}
                    />
                  </Form>
                </Col>
              </Row>

              <Row className="mb-2 mt-4">
                <Col md={1}>
                  <b>20 </b>
                </Col>
                <Col md={11}>
                  Crows seem to practice a number of times before making a usable padanus probe.
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updatePostTestReadingAnswer({
                          ...getAnswers,
                          20: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. True"
                      name="group1"
                      type="radio"
                      value="true"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[20] === 'true'}
                    />
                    <Form.Check
                      label="B. False"
                      name="group1"
                      type="radio"
                      value="false"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[20] === 'false'}
                    />
                    <Form.Check
                      label="C. Not Given"
                      name="group1"
                      type="radio"
                      value="notgiven"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[20] === 'notgiven'}
                    />
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col md={6} sm={6} xl={6}>
              <Row className="mb-2 mt-4">
                <Col md={1}>
                  <b>21 </b>
                </Col>
                <Col md={11}>
                  The researchers suspect the crows have a mental image of the padanus probe before
                  they create it.
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updatePostTestReadingAnswer({
                          ...getAnswers,
                          21: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. True"
                      name="group1"
                      type="radio"
                      value="true"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[21] === 'true'}
                    />
                    <Form.Check
                      label="B. False"
                      name="group1"
                      type="radio"
                      value="false"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[21] === 'false'}
                    />
                    <Form.Check
                      label="C. Not Given"
                      name="group1"
                      type="radio"
                      value="notgiven"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[21] === 'notgiven'}
                    />
                  </Form>
                </Col>
              </Row>

              <Row className="mb-2 mt-4">
                <Col md={1}>
                  <b>22 </b>
                </Col>
                <Col md={11}>
                  Research into how the padanus probe is made has helped to explain the toolmaking
                  skills of many other bird species.
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updatePostTestReadingAnswer({
                          ...getAnswers,
                          22: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. True"
                      name="group1"
                      type="radio"
                      value="true"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[22] === 'true'}
                    />
                    <Form.Check
                      label="B. False"
                      name="group1"
                      type="radio"
                      value="false"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[22] === 'false'}
                    />
                    <Form.Check
                      label="C. Not Given"
                      name="group1"
                      type="radio"
                      value="notgiven"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[22] === 'notgiven'}
                    />
                  </Form>
                </Col>
              </Row>

              <Row className="mb-2 mt-4">
                <Col md={1}>
                  <b>23 </b>
                </Col>
                <Col md={11}>
                  The researchers believe the ability to make the padanus probe is passed down to
                  the crows in their genes.
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updatePostTestReadingAnswer({
                          ...getAnswers,
                          23: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. True"
                      name="group1"
                      type="radio"
                      value="true"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[23] === 'true'}
                    />
                    <Form.Check
                      label="B. False"
                      name="group1"
                      type="radio"
                      value="false"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[23] === 'false'}
                    />
                    <Form.Check
                      label="C. Not Given"
                      name="group1"
                      type="radio"
                      value="notgiven"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[23] === 'notgiven'}
                    />
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
          <h5 className="mt-4">
            <b> Questions 24 to 26</b>
          </h5>
          <p>
            <i>
              Choose <b>THREE</b> letters, <b>A - G</b>
            </i>
          </p>
          <p>
            <i>Write the correct letters in boxes 24-26 on your answer sheet.</i>
          </p>
          <p>
            According to the information in the passage, which THREE of the following features are
            probably common to both New Caledonian crows and human beings?
          </p>
          <Form>
            <Form.Check
              label="A. keeping the same mate for life"
              name="group1"
              type="checkbox"
              value="a"
              checked={checkIfExists('a')}
              id={`inline-checkbox-1`}
              onChange={(e) => isChecked(e.target.value)}
            />
            <Form.Check
              label="B. having few natural predators"
              name="group1"
              type="checkbox"
              value="b"
              checked={checkIfExists('b')}
              id={`inline-checkbox-2`}
              onChange={(e) => isChecked(e.target.value)}
            />
            <Form.Check
              label="C. having a bias to the right when working"
              name="group1"
              type="checkbox"
              value="c"
              checked={checkIfExists('c')}
              id={`inline-checkbox-3`}
              onChange={(e) => isChecked(e.target.value)}
            />
            <Form.Check
              label="D. being able to process sequential tasks"
              name="group1"
              type="checkbox"
              value="d"
              checked={checkIfExists('d')}
              id={`inline-checkbox-4`}
              onChange={(e) => isChecked(e.target.value)}
            />
            <Form.Check
              label="E. living in extended family groups"
              name="group1"
              type="checkbox"
              value="e"
              checked={checkIfExists('e')}
              id={`inline-checkbox-5`}
              onChange={(e) => isChecked(e.target.value)}
            />
            <Form.Check
              label="F. eating a variety of foodstuffs"
              name="group1"
              type="checkbox"
              value="f"
              checked={checkIfExists('f')}
              id={`inline-checkbox-6`}
              onChange={(e) => isChecked(e.target.value)}
            />
            <Form.Check
              label="G. being able to adapt to diverse habitats"
              name="group1"
              type="checkbox"
              value="g"
              checked={checkIfExists('g')}
              id={`inline-checkbox-7`}
              onChange={(e) => isChecked(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SecondSectionReadingComponent;
