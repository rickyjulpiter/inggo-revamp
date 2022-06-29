/* eslint-disable */
import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

import SectionTitle from '../../../SectionTitle';
import { updatePostTestReadingAnswer } from '../../../../../../Redux/handleAnswer';

const FirstSectionReadingComponent = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <SectionTitle title="READING PASSAGE 1" />
      <p>
        You should spend about 20 minutes on <b> Questions 1-13</b>, which are based on Reading
        Passage 1 on pages 3 and 4.
      </p>

      <Row>
        <Col md={6}>
          <h5 className="text-center mt-5">
            <b>Seaweeds of New Zealand</b>
          </h5>

          <Row className="mt-3">
            <Col md={1}>
              <b>A</b>
            </Col>
            <Col className="text-justify">
              Seaweed is a particularly wholesome food, which absorbs and concentrates traces of a
              wide variety of minerals necessary to the body’s health. Many elements may occur in
              seaweed – aluminium, barium, calcium, chlorine, copper, iodine and iron, to name but a
              few – traces normally produced by erosion and carried to the seaweed beds by river and
              sea currents. Seaweeds are also rich in vitamins; indeed, Inuits obtain a high
              proportion of their bodily requirements of vitamin C from seaweeds they eat. The
              health benefits of seaweed have long been recognised. For instance, there is
              remarkably low incidence of goitre among Japanese, and also among New Zealand’s
              indigenous Maori people, who have always eaten seaweeds, and this may well be
              attributed to the high iodine content of this food. Research into historical Maori
              eating custom shows that jellies were made using seaweeds, nuts, fuchsia and tutu
              berries, cape gooseberries, and many other fruits both native to New Zealand and sown
              there from seeds brought by settlers and explorers. As with any plant life, some
              seaweeds are more palatable than others, but in a survival situation, most seaweeds
              could be chewed to provide a certain sustenance.
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={1}>
              <b>B</b>
            </Col>
            <Col className="text-justify">
              New Zealand lays claims to approximately 700 species of seaweed, some of which have no
              representation outside the country. Of several species grown worldwide, New Zealand
              also has particularly large share. For example, it is estimated that New Zealand has
              some 30 species Gigartina, a close relative of carrageen of Irish moss. These are
              often referred to as the New Zealand carrageens. The substance called agar which can
              be extracted from these species gives them commercial application in the production of
              seameal, from which seameal custard (a food product) is made, and in the canning,
              paint and leather industries. Agar is also used in the manufacture of cough mixture,
              cosmetics, confectionery and toothpastes. In fact, during World War II, New Zealand
              Gigartina were sent to Australia to be used in toothpaste.
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={1}>
              <b>C</b>
            </Col>
            <Col className="text-justify">
              New Zealand has many of the commercially profitable red seaweeds, several species of
              which are a source of agar (Pterocladia, Gelidium, Chondrus, Gigartina). Despite this,
              these seaweeds were not much utilised until several decades ago. Although distribution
              of the Gigartina is confined to certain areas according to species, it is only on the
              east coast of the North Island that its occurrence is rare. And even then, the east
              coast, and the area around Hokianga, have a considerable supply of the two species of
              Pterocladia from which agar is also made. New Zealand used to import the Northern
              Hemisphere Irish moss (Chondrus crispus) from England and ready-made agar from Japan.
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={1}>
              <b>D</b>
            </Col>
            <Col className="text-justify">
              Seaweeds are divided into three classes determined by colour – red, brown and green –
              and each tends to live in a specific position. However, except for the unmistakable
              sea lettuce (Ulva), few are totally one colour; and especially when dry, some species
              can change colour significantly – a brown one may turn quite black, or a red one
              appear black, brown, pink or purple. Identification is nevertheless facilitated by the
              fact that the factors which determine where a seaweed will grow are quite precise, and
              they tend therefore to occur in very well-defined zones. Although there are
              exceptions, the green seaweeds are mainly shallow-water algae; the browns belong to
              medium depths; and the reds are plants of deeper water, furthest from the shore. Those
              shallow-water species able to resist long periods of exposure to sun and air are
              usually found on the upper shore, while those less able to withstand such exposure
              occur nearer to, or below, the low-water mark. Radiation from the sun, the temperature
              level, and the length of time immersed also play a part in the zoning of seaweeds.
              Flat rock surfaces near mid-level tides are the most usual habitat of sea-bombs,
              Venus’ necklace, and most brown seaweeds. This is also the home of the purple laver or
              Maori karengo, which looks rather like a reddish-purple lettuce. Deep-water rocks on
              open coasts, exposed only at very low tide, are usually the site of bull-kelp,
              strapweeds and similar tough specimens. Kelp, or bladder kelp, has stems that rise to
              the surface from massive bases or ‘holdfasts’, the leafy branches and long ribbons of
              leaves surging with the swells beyond the line of shallow coastal breakers or covering
              vast areas of calmer coastal water.
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={1}>
              <b>E</b>
            </Col>
            <Col className="text-justify">
              Propagation of seaweeds occurs by seed-like spores, or by fertilisation of egg cells.
              None have roots in the usual sense; few have leaves; and none have flowers, fruits or
              seeds. The plants absorb their nourishment through their leafy fronds when they are
              surrounded by water; the holdfast of seaweeds is purely an attaching organ, not an
              absorbing one.
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={1}>
              <b>F</b>
            </Col>
            <Col className="text-justify">
              Some of the large seaweeds stay on the surface of the water by means of air-filled
              floats; others, such as bull-kelp, have large cells filled with air. Some which spend
              a good part of the time exposed to the air, often reduce dehydration either by having
              swollen stems that contain water, or they may (like Venus’ necklace) have swollen
              nodules, or they may have a distinctive shape like a sea-bomb. Others, like the sea
              cactus, are filled with slimy fluid or have a coating of mucilage on the surface. In
              some of the larger kelps, this coating is not only to keep the plant moist, but also
              to protect it from the violent action of waves.
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <h5 className="mt-4">
            <b> Questions 1-6</b>
          </h5>
          <p>
            Reading Passage 1 has six paragraphs, <b>A-F</b>.
          </p>
          <p>
            <i>Choose the correct heading for each paragraph from the list of the headings below</i>
          </p>
          <p>
            <i>
              Write the correct number, <b>i-ix</b>, in boxes 1-6 on your answer sheet
            </i>
          </p>
          <div style={{ border: '1px solid black' }}>
            <Table borderless>
              <tbody>
                <tr>
                  <td colSpan={2} className="text-center">
                    <b>List of Headings</b>
                  </td>
                </tr>
                <tr>
                  <td>i.</td>
                  <td>The appearance and location of the different seaweeds</td>
                </tr>
                <tr>
                  <td>ii.</td>
                  <td>The nutritional value of seaweeds</td>
                </tr>
                <tr>
                  <td>iii.</td>
                  <td>How seaweeds reproduce and grow</td>
                </tr>
                <tr>
                  <td>iv.</td>
                  <td>How to make agar from seaweeds</td>
                </tr>
                <tr>
                  <td>v.</td>
                  <td>The under-use of native seaweeds</td>
                </tr>
                <tr>
                  <td>vi.</td>
                  <td>Seaweed species at risk of extinction</td>
                </tr>
                <tr>
                  <td>vii.</td>
                  <td>Recipes for how to cook seaweeds</td>
                </tr>
                <tr>
                  <td>viii.</td>
                  <td>The range of seaweed products</td>
                </tr>
                <tr>
                  <td>ix.</td>
                  <td>Why seaweeds don’t sink or dry out</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Row className="mb-2 mt-3">
            <Col md={1}>
              <b>1 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[1]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      1: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>Paragraph A</Col>
          </Row>
          <Row className="mb-2">
            <Col md={1}>
              <b>2 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[2]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      2: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>Paragraph B</Col>
          </Row>
          <Row className="mb-2">
            <Col md={1}>
              <b>3 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[3]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      3: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>Paragraph C</Col>
          </Row>
          <Row className="mb-2">
            <Col md={1}>
              <b>4 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[4]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      4: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>Paragraph D</Col>
          </Row>
          <Row className="mb-2">
            <Col md={1}>
              <b>5 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[5]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      5: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>Paragraph E</Col>
          </Row>
          <Row className="mb-2">
            <Col md={1}>
              <b>6 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[6]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      6: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>Paragraph F</Col>
          </Row>

          <h5 className="mt-4">
            <b> Questions 7-10</b>
          </h5>
          <p>
            <i>Complete the flow-chart below.</i>
          </p>
          <p>
            <i>
              Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each answer
            </i>
          </p>
          <p>
            <i>Write your answers in boxes 7-10 on your answer sheet</i>
          </p>
          <Table borderless>
            <tbody>
              <tr>
                <td colSpan={3} className="text-center" style={{ border: '1px solid green' }}>
                  Gigartina seaweed <br />
                  (other name: <b>7</b>{' '}
                  <input
                    style={{ border: 'none', width: '30%' }}
                    value={getAnswers[7]}
                    onChange={(event) => {
                      dispatch(
                        updatePostTestReadingAnswer({
                          ...getAnswers,
                          7: event.target.value
                        })
                      );
                    }}
                  />
                  )
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="text-center">
                  <i className="bi bi-arrow-down-short" style={{ fontSize: 30 }}></i>
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="text-center" style={{ border: '1px solid green' }}>
                  produces
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="text-center">
                  <i className="bi bi-arrow-down-short" style={{ fontSize: 30 }}></i>
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="text-center" style={{ border: '1px solid green' }}>
                  <b>8 </b>
                  <input
                    style={{ border: 'none', width: '30%' }}
                    value={getAnswers[8]}
                    onChange={(event) => {
                      dispatch(
                        updatePostTestReadingAnswer({
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
                  <i className="bi bi-arrow-down-left" style={{ fontSize: 30 }}></i>
                </td>
                <td></td>
                <td className="text-center">
                  <i className="bi bi-arrow-down-right" style={{ fontSize: 30 }}></i>
                </td>
              </tr>
              <tr>
                <td className="text-center">is used to make</td>
                <td></td>
                <td className="text-center">is used to make</td>
              </tr>
              <tr>
                <td className="text-center">
                  <i className="bi bi-arrow-down-short" style={{ fontSize: 30 }}></i>
                </td>
                <td></td>
                <td className="text-center">
                  <i className="bi bi-arrow-down-short" style={{ fontSize: 30 }}></i>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <b>9</b>{' '}
                  <input
                    style={{ border: 'none', width: '30%' }}
                    value={getAnswers[9]}
                    onChange={(event) => {
                      dispatch(
                        updatePostTestReadingAnswer({
                          ...getAnswers,
                          9: event.target.value
                        })
                      );
                    }}
                  />{' '}
                  medicines, such
                </td>
                <td></td>

                <td className="text-center">
                  as <b>10 </b>{' '}
                  <input
                    style={{ border: 'none', width: '30%' }}
                    value={getAnswers[10]}
                    onChange={(event) => {
                      dispatch(
                        updatePostTestReadingAnswer({
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
                <td></td>
                <td className="text-center">
                  <i className="bi bi-arrow-down-short" style={{ fontSize: 30 }}></i>
                </td>
              </tr>
              <tr>
                <td className="text-center">is used to make a type of custard</td>
                <td></td>
                <td className="text-center">
                  - cosmetics <br />
                  - sweets <br />- toothpastes
                </td>
              </tr>
            </tbody>
          </Table>
          <h5 className="mt-4">
            <b> Questions 11-13</b>
          </h5>
          <p>
            <i>Classify the following characteristics as belonging to</i>
          </p>
          <div style={{ marginLeft: '20px' }}>
            <p>
              <b>A</b> brown seaweed
            </p>
            <p>
              <b>B</b> green seaweed
            </p>
            <p>
              <b>C</b> red seaweed
            </p>
          </div>
          <p>
            Write the correct letter <b>A, B</b> or <b>C</b>, in boxes 11-13 on your answer sheet
          </p>
          <Row className="mb-2">
            <Col md={1}>
              <b>11 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[11]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      11: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>can survive the heat and dryness at the high-water mark</Col>
          </Row>
          <Row className="mb-2">
            <Col md={1}>
              <b>12 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[12]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      12: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>grow far out in open sea</Col>
          </Row>
          <Row className="mb-2">
            <Col md={1}>
              <b>13 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[13]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      13: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>share their site with karengo seaweed</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FirstSectionReadingComponent;
