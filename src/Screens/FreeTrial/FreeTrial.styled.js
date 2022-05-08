import styled from 'styled-components';
import { Card, Container } from 'react-bootstrap';
import { PrimaryColor, SecondaryColor, WhiteColor } from '../../Assets/colorPalette';

export const ContainerStyled = styled(Container)`
  margin-top: 5vw;
  margin-bottom: 5vw;
  min-height: 30.5vw;

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
`;

export const SecondTitle = styled.h4`
  color: ${PrimaryColor};
  font-weight: bolder;
`;

export const CardStyled = styled(Card)`
  border: none;
  border-radius: 8px;
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
