/* eslint-disable */

import SectionTitle from '../../SectionTitle';
import { Col, Row, Table } from 'react-bootstrap';
import React from 'react';
import { updateAnswer, updateReadingAnswer } from '../../../../../Redux/handleAnswer';

const FirstSectionReadingComponent = ({ dispatch, getAnswers }) => {
  return (
    <>
      <SectionTitle title="READING PASSAGE 1" />

      <p>
        You should spend about 20 minutes on <b> Questions 1-13</b>, which are based on Reading
        Passage 1 on pages 2 and 3.
      </p>

      <h5 className="text-center mt-5">
        <b>Spider silk cuts weight of bridges</b>
      </h5>

      <h6 className="text-center">
        <b>
          A strong, light bio-material made by genes from spiders could transform construction and
          industry
        </b>
      </h6>

      <Row className="mt-3">
        <Col md={1}>
          <b>A</b>
        </Col>
        <Col className="text-justify">
          Scientists have succeeded in copying the silk-producing genes of the Golden Orb- Weaver
          spider and are using them to create a synthetic material which they believe is the model
          for a new generation of advanced bio-materials. The new material, biosilk, which has been
          spun for the first time by researchers at DuPont, has an enormous range of potential uses
          in construction and manufacturing.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={1}>
          <b>B</b>
        </Col>
        <Col className="text-justify">
          The attraction of the silk spun by the spider is a combination of great strength and
          enormous elasticity, which man-made fibres have been unable to replicate. On an
          equal-weight basis, spider silk is far stronger than steel and it is estimated that if a
          single strand could be made about 10 m in diameter, it would be strong enough to stop a
          jumbo jet in flight. A third important factor is that it is extremely light. Army
          scientists are already looking at the possibilities of using it for lightweight,
          bullet-proof vests and parachutes.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={1}>
          <b>C</b>
        </Col>
        <Col className="text-justify">
          For some time, biochemists have been trying to synthesise the drag-line silk of the Golden
          Orb-Weaver. The drag-line silk, which forms the radial arms of the web, is stronger than
          the other parts of the web and some biochemists believe a synthetic version could prove to
          be as important a material as nylon, which has been around for 50 years, since the
          discoveries of Wallace Carothers and his team ushered in the age of polymers.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={1}>
          <b>D</b>
        </Col>
        <Col className="text-justify">
          To recreate the material, scientists, including Randolph Lewis at the University of
          Wyoming, first examined the silk-producing gland of the spider. ‘We took out the glands
          that produce the silk and looked at the coding for the protein material they make, which
          is spun into a web. We then went looking for clones with the right DNA,’ he says.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={1}>
          <b>E</b>
        </Col>
        <Col className="text-justify">
          At DuPont, researchers have used both yeast and bacteria as hosts to grow the raw
          material, which they have spun into fibres. Robert Dorsch, DuPont's director of
          biochemical development, says the globules of protein, comparable with marbles in an egg,
          are harvested and processed. ‘We break open the bacteria, separate out the globules of
          protein and use them as the raw starting material. With yeast, the gene system can be
          designed so that the material excretes the protein outside the yeast for better access,’
          he says.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={1}>
          <b>F</b>
        </Col>
        <Col className="text-justify">
          ‘The bacteria and the yeast produce the same protein, equivalent to that which the spider
          uses in the drag lines of the web. The spider mixes the protein into a water-based
          solution and then spins it into a solid fibre in one go. Since we are not as clever as the
          spider and we are not using such sophisticated organisms, we substituted man-made
          approaches and dissolved the protein in chemicals solvents, which are then spun to push
          the material through small holes to form the solid fibre.’
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={1}>
          <b>G</b>
        </Col>
        <Col className="text-justify">
          Researchers at DuPont say they envisage many possible uses for a new biosilk material.
          They say the earthquake-resistant suspension bridges hung from cables of synthetic spider
          silk fibres may become a reality. Stronger ropes, safer seat belts, shoe soles that do not
          wear out so quickly and tough new clothing are among the other applications. Biochemists
          such as Lewis see the potential range of uses of biosilk as almost limitless. ‘It is very
          strong and retains elasticity; there are no man-made materials that can mimic both these
          properties. It is also a biological material with all the advantages that has over
          petrochemicals,’ he says.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={1}>
          <b>H</b>
        </Col>
        <Col className="text-justify">
          At DuPont’s laboratories, Dorsch is excited by the prospect of new super-strong materials
          but he warns they are many years away. ‘We are at an early stage but theoretical
          predictions are that we will wind up with a very strong, tough material, with an ability
          to absorb shock, which is stronger and tougher than the man-made materials that are
          conventionally available to us,’ he says.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={1}>
          <b>I</b>
        </Col>
        <Col className="text-justify">
          The spider is not the only creature that has aroused the interest of material scientist.
          They have also become envious of the natural adhesive secreted by the see mussel. It
          produces a protein adhesive to attach itself to rocks. It is tedious and expensive to
          extract the protein from the mussel, so researchers have already produced a synthetic gene
          for use in surrogate bacteria.
        </Col>
      </Row>
      <div>
        <h5 className="mt-4">
          <b> Questions 1-5</b>
        </h5>
        <p>
          Reading Passage 1 has nine paragraphs, <b> A-I</b> <br />
          Which paragraph contains the following information? <br />
          Write the correct letter, <b> A-I</b>, in boxes 1-5 on your answer sheet.
        </p>

        <Row className="mb-2">
          <Col md={1}>
            <b>1 </b>
          </Col>
          <Col md={2}>
            <input
              style={{ border: 'none' }}
              value={getAnswers[1]}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    1: event.target.value
                  })
                );
              }}
            />
          </Col>
          <Col>
            a comparison of the ways two materials are used to replace silk-producing glands
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={1}>
            <b>2 </b>
          </Col>
          <Col md={2}>
            <input
              style={{ border: 'none' }}
              value={getAnswers[2]}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    2: event.target.value
                  })
                );
              }}
            />
          </Col>
          <Col>predictions regarding the availability of the synthetic silk</Col>
        </Row>

        <Row className="mb-2">
          <Col md={1}>
            <b>3 </b>
          </Col>
          <Col md={2}>
            <input
              style={{ border: 'none' }}
              value={getAnswers[3]}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    3: event.target.value
                  })
                );
              }}
            />
          </Col>
          <Col>ongoing research into other synthetic materials</Col>
        </Row>

        <Row className="mb-2">
          <Col md={1}>
            <b>4 </b>
          </Col>
          <Col md={2}>
            <input
              value={getAnswers[4]}
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    4: event.target.value
                  })
                );
              }}
            />
          </Col>
          <Col>the research into the part of the spider that manufactures silk</Col>
        </Row>

        <Row className="mb-2">
          <Col md={1}>
            <b>5 </b>
          </Col>
          <Col md={2}>
            <input
              value={getAnswers[5]}
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    5: event.target.value
                  })
                );
              }}
            />
          </Col>
          <Col>the possible application of the silk in civil engineering</Col>
        </Row>
      </div>
      <div>
        <h5 className="mt-4">
          <b> Questions 6-10</b>
        </h5>
        <p>
          Complete the flow-chart below. <br />
          Choose <b> NO MORE THAN TWO WORDS</b> from the passage for each answer.
          <br />
          Write your answers in boxes 6-10 on your answer sheet.
        </p>

        <Row>
          <Col md={6} className="mx-auto">
            <Table borderless>
              <tbody>
                <tr>
                  <td className="text-center">
                    Synthetic gene grown <br />
                    in <b>6</b>{' '}
                    <input
                      value={getAnswers[6]}
                      style={{ border: 'none' }}
                      onChange={(event) => {
                        dispatch(
                          updateReadingAnswer({
                            ...getAnswers,
                            6: event.target.value
                          })
                        );
                      }}
                    />{' '}
                    or <b>7</b>{' '}
                    <input
                      value={getAnswers[7]}
                      style={{ border: 'none' }}
                      onChange={(event) => {
                        dispatch(
                          updateReadingAnswer({
                            ...getAnswers,
                            7: event.target.value
                          })
                        );
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <i className="bi bi-arrow-down-short" style={{ fontSize: 30 }}></i>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    globules of <b>8</b>{' '}
                    <input
                      style={{ border: 'none' }}
                      value={getAnswers[8]}
                      onChange={(event) => {
                        dispatch(
                          updateReadingAnswer({
                            ...getAnswers,
                            8: event.target.value
                          })
                        );
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <i className="bi bi-arrow-down-short" style={{ fontSize: 30 }}></i>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    dissolved in of <b>9</b>{' '}
                    <input
                      value={getAnswers[9]}
                      style={{ border: 'none' }}
                      onChange={(event) => {
                        dispatch(
                          updateReadingAnswer({
                            ...getAnswers,
                            9: event.target.value
                          })
                        );
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <i className="bi bi-arrow-down-short" style={{ fontSize: 30 }}></i>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    passed through <b>10</b>{' '}
                    <input
                      value={getAnswers[10]}
                      style={{ border: 'none' }}
                      onChange={(event) => {
                        dispatch(
                          updateReadingAnswer({
                            ...getAnswers,
                            10: event.target.value
                          })
                        );
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <i className="bi bi-arrow-down-short" style={{ fontSize: 30 }}></i>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">to produce a solid fibre</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
      <div>
        <h5 className="mt-4">
          <b> Questions 11-13</b>
        </h5>
        <p>
          Do the following statements agree with the information given in Reading Passage 1? <br />
          In boxes 11-13 on your answer sheet, write
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

        <Row className="mb-2 mt-4">
          <Col md={1}>
            <b>11 </b>
          </Col>
          <Col md={2}>
            <input
              style={{ border: 'none' }}
              value={getAnswers[11]}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    11: event.target.value
                  })
                );
              }}
            />
          </Col>
          <Col>Biosilk has already replaced nylon in parachute manufacture.</Col>
        </Row>
        <Row className="mb-2">
          <Col md={1}>
            <b>12 </b>
          </Col>
          <Col md={2}>
            <input
              value={getAnswers[12]}
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    12: event.target.value
                  })
                );
              }}
            />
          </Col>
          <Col>The spider produces silk of varying strengths.</Col>
        </Row>
        <Row className="mb-2">
          <Col md={1}>
            <b>13 </b>
          </Col>
          <Col md={2}>
            <input
              value={getAnswers[13]}
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    13: event.target.value
                  })
                );
              }}
            />
          </Col>
          <Col>Lewis and Dorsch co-operated in the synthetic production of silk.</Col>
        </Row>
      </div>
    </>
  );
};

export default FirstSectionReadingComponent;
