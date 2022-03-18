import styled from 'styled-components';
import BannerHomeTransparent from '../../Assets/Images/bannerhome-transparent.png';
import { WhiteColor } from '../../Assets/colorPalette';

export const WelcomeHeading = styled.h1`
  color: #34364a;
  font-weight: 700;
  font-size: 40px;
`;

export const WelcomeDescription = styled.p`
  margin-top: 2vw;
  font-size: 18px;
  color: #34364a;
  line-height: 32px;
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
`;

export const ButtonPrimaryComponent = styled.button.attrs((props: { color: string }) => props)`
  background: ${(props) => props?.color};
  color: #fff;
  border: 0;
  transition: all 0.4s;
  font-size: 16px;
  padding: 11px 42px;
  border-radius: 100px;
  font-weight: 500;
  margin-right: 5px;

  &:hover {
    background: ${WhiteColor};
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
    font-weight: bolder;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 38px;
  }
`;
