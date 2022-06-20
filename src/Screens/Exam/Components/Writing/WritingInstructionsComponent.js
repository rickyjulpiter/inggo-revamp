/* eslint-disable */
import React from 'react';

import { CardTest } from '../../style';
import { LiStyled, ULStyled } from '../../../Home/OurPrograms/ProgramDetail/ProgramDetail.styled';
import { SecondaryColor } from '../../../../Assets/colorPalette';
import ButtonComponent from '../../../../Components/Button/Button.component';

const WritingInstructionsComponent = ({ start }) => {
  return (
    <div className="p-3">
      <CardTest>
        <h3>IELTS Academic Writing</h3>
        <h6>Time: 1 hour</h6>

        <br />
        <h5>INSTRUCTIONS TO CANDIDATES</h5>
        <h6>
          <ULStyled>
            <LiStyled>
              Answer <b>both</b> parts.
            </LiStyled>
            <LiStyled>You can change your answers at any time during the test.</LiStyled>
          </ULStyled>
        </h6>

        <h5>INFORMATION FOR CANDIDATES</h5>
        <ULStyled>
          <LiStyled>There are two parts in this test.</LiStyled>
          <LiStyled>Part 2 contributes twice as much as Part 1 to the writing score.</LiStyled>
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

export default WritingInstructionsComponent;
