import styled from 'styled-components';
import { PrimaryColor } from '../../Assets/colorPalette';
import BannerHomeTransparent from '../../Assets/Images/bannerhome-transparent.png';

export const ContainerStyled = styled.div`
  padding: 2vw 6vw 8vw 6vw;
  background-image: url(${BannerHomeTransparent});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: right 0 top 0;
  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
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

export const Title = styled.h2`
  font-weight: 700;
  color: ${PrimaryColor};
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  line-height: 24px !important;
  text-align: justify;
  margin-bottom: 1rem;
`;
