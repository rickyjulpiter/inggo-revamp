import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, WhiteColor } from '../../Assets/colorPalette';
import BannerHomeTransparent from '../../Assets/Images/bannerhome-transparent.png';

export const ContainerStyled = styled.div`
  min-height: 40vw;
  // background-image: url(${BannerHomeTransparent});
  // background-repeat: no-repeat;
  // background-size: 60%;
  // background-position: right 0 top 0;

  &:hover {
    .t_four {
      top: 90px;
    }

    .t_two {
      right: 180px;
      bottom: 185px;
    }

    .t_first {
      left: 50px;
      top: 275px;
    }
  }
`;

export const Title = styled.h2`
  color: ${PrimaryColor};
  font-weight: bolder;
  text-align: center;
`;

export const SecondTitle = styled.h4`
  color: ${PrimaryColor};
  font-weight: bolder;
`;

export const Paragraph = styled.p`
text-align: justify`;

export const CardStyled = styled.div`
  border: none;
  border-radius: 8px;
  padding: 5vw;
`;

export const ProgramCard = styled.div`
  align-items: center;
  text-align: center;
  background-color: ${SecondaryColor};
  color: ${WhiteColor};
  border-radius: 20px;
  padding: 1rem 0.1rem;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid ${SecondaryColor};

  &:hover {
    color: ${SecondaryColor};
    background-color: ${WhiteColor};
    border: 1px solid ${SecondaryColor};
  }

  @media (max-width: 1024px) {
    min-height: 10vw;
  }
`;
