import styled from 'styled-components';

export const ContainerBottomStyled = styled.div`
  background-color: #434343;
  padding: 1vw;
`;

export const LinkStyled = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  margin-left: 1vw;
  margin-right: 1vw;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const Brand = styled.h1`
  font-size: 18px;
  color: #ffffff;
  margin-left: 2vw;

  @media (max-width: 400px) {
    font-size: 14px;
    margin-top: 5px;
  }
`;
