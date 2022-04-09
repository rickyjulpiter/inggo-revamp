import styled from 'styled-components';
import { Card, Container } from 'react-bootstrap';
import { PrimaryColor } from '../../Assets/colorPalette';

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
  background-color: rgb(230, 239, 252);
  border-radius: 20px;
  padding: 1rem;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 1024px) {
    min-height: 10vw;
  }
`;
