import styled from 'styled-components';
import { PrimaryColor, WhiteColor } from '../../Assets/colorPalette';
import BannerHomeTransparent from '../../Assets/Images/bannerhome-transparent.png';

export const ContainerStyled = styled.div`
  //background-image: url(${BannerHomeTransparent});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: right 0 top 0;
  margin-bottom: 2vw;
  background-color: ${PrimaryColor};

  @media (max-width: 768px) {
    background-image: none;
  }

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

export const Title = styled.h1`
  font-weight: 700;
  color: ${PrimaryColor};
  margin-bottom: 1rem;
  text-align: center;
  color: ${WhiteColor};
`;

export const Paragraph = styled.p`
  line-height: 28px !important;
  text-align: justify;
  color: ${WhiteColor};
  padding: 3vw;
  margin-bottom: 5vh;
`;
