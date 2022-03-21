import styled from 'styled-components';
import BannerHomeTransparent from '../../Assets/Images/bannerhome-transparent.png';
import { WhiteColor } from '../../Assets/colorPalette';

export const WelcomeHeading = styled.h1`
  color: #34364a;
  font-weight: 700;
  font-size: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const WelcomeDescription = styled.p`
  margin-top: 2vw;
  font-size: 18px;
  color: #34364a;
  line-height: 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 28px;
  }
`;

export const WelcomeImage = styled.img`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const WelcomeSection = styled.div`
  min-height: 100%;
`;

export const WelcomeContainer = styled.div`
  background-image: url(${BannerHomeTransparent});
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }

  @media (max-width: 450px) {
    min-height: 100vw;

    .p_absoulte {
      display: none;
    }
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

export const ButtonPrimaryComponent = styled.a.attrs((props: { color: string }) => props)`
  text-decoration: none;
  background: ${(props) => props?.color};
  color: #fff;
  transition: all 0.4s;
  font-size: 16px;
  padding: 11px 42px;
  border-radius: 100px;
  font-weight: 500;
  margin-right: 5px;
  border: 1px solid ${(props) => props.color};
  cursor: pointer;

  &:hover {
    background: ${WhiteColor};
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 38px;
  }
`;

export const CustomMarginToParent = styled.div`
  margin-top: 3rem !important;
  margin-right: 4rem;
  margin-left: 4rem;

  @media (max-width: 768px) {
    margin-top: 0.2rem !important;
  }

  @media (max-width: 450px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const FloatingImage = styled.img`
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  transform: translate3d(-2.17813px, 0px, 0px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;
