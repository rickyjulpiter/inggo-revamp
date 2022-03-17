import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import { PrimaryColor, SecondaryColor, WhiteColor } from '../../Assets/colorPalette';
import BannerHomeTransparent from '../../Assets/Images/bannerhome-transparent.png';

const WelcomeHeading = styled.h1`
  color: #34364a;
  font-weight: 700;
  font-size: 40px;
`;

const WelcomeDescription = styled.p`
  margin-top: 2vw;
  font-size: 18px;
  color: #34364a;
  line-height: 32px;
`;

const WelcomeImage = styled.img`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const WelcomeSection = styled.div`
  min-height: 100%;
`;

const WelcomeContainer = styled.div`
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
const ButtonPrimaryComponent = styled.button.attrs((props: { color: string }) => props)`
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
`;

const HomeContainer = () => {
  return (
    <WelcomeContainer>
      <Container>
        <WelcomeSection>
          <Row className="mt-5">
            <Col xl={6} md={6} sm={12}>
              <div className="mt-5">
                <WelcomeHeading>
                  Lorem ipsum odor amet, consectetuer adipiscing elit.
                </WelcomeHeading>
                <WelcomeDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                  vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                </WelcomeDescription>
                <div className="mt-5">
                  <ButtonPrimaryComponent color={PrimaryColor}>Free Trial</ButtonPrimaryComponent>
                  <ButtonPrimaryComponent color={SecondaryColor}>Contact Us</ButtonPrimaryComponent>
                </div>
              </div>
            </Col>
            <Col xl={6} md={6} sm={0}>
              <WelcomeImage
                src="https://buildwithangga.com/storage/assets/slider/Tsgl3Kt8ZWZ4CPy18A53LZruMZW7KgIMmjXMg3JA.png"
                className="img-fluid"
                alt="image"
              />
            </Col>
          </Row>
        </WelcomeSection>
      </Container>
    </WelcomeContainer>
  );
};

export default HomeContainer;
