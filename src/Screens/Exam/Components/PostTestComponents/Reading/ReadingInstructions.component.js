/* eslint-disable */
import React from 'react';

import { CardTest } from '../../../style';
import { LiStyled, ULStyled } from '../../../../Home/OurPrograms/ProgramDetail/ProgramDetail.styled';
import { SecondaryColor } from '../../../../../Assets/colorPalette';
import ButtonComponent from '../../../../../Components/Button/Button.component';

const ReadingInstructionsComponent = ({ start }) => {
  return (
    <div className="p-3">
      <CardTest>
        <h3>IELTS Academic Reading</h3>
        <h6>Time: 1 hour</h6>

        <br />
        <h5>INSTRUCTIONS TO CANDIDATES</h5>
        <h6>
          <ULStyled>
            <LiStyled>
              Answer <b>all</b> the questions.
            </LiStyled>
            <LiStyled>You can change your answers at any time during the test.</LiStyled>
          </ULStyled>
        </h6>

        <h5>INFORMATION FOR CANDIDATES</h5>
        <ULStyled>
          <LiStyled>There are 40 questions in this test.</LiStyled>
          <LiStyled>Each question carries one mark.</LiStyled>
          <LiStyled>
            The test clock will show you when there are 10 minutes and 5 minutes remaining.
          </LiStyled>
        </ULStyled>

        <div className="mb-3 mt-3 text-center">
          <ButtonComponent color={SecondaryColor} text="Start" handleClick={start} />
        </div>
      </CardTest>
    </div>
  );
};

export default ReadingInstructionsComponent;
