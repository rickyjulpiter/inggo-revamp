import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../Assets/colorPalette';
import PropTypes from 'prop-types';

const ContainerStyled = styled.div`
  background-color: #efefef;
  padding: 0.5vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: #818181;
  font-size: 12px;
  margin-left: 1vw;
  margin-right: 1vw;
  cursor: pointer;

  &:hover {
    color: ${PrimaryColor};
    font-weight: bold;
  }
`;

const NavtopComponent = ({ onChangeLang }) => {
  return (
    <ContainerStyled>
      <div className="d-flex justify-content-between">
        <div>
          <LinkStyled>
            <i className="bi-telephone" /> (+62) 857-7290-0593
          </LinkStyled>
          <LinkStyled>
            <i className="bi-envelope" /> info@inggo.co
          </LinkStyled>
        </div>
        <div>
          <LinkStyled onClick={() => onChangeLang('en')}>English</LinkStyled>
          <LinkStyled onClick={() => onChangeLang('id')}>Indonesia</LinkStyled>
        </div>
      </div>
    </ContainerStyled>
  );
};

NavtopComponent.propTypes = {
  onChangeLang: PropTypes.func
};

export default NavtopComponent;
