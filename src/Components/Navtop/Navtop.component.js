import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { LAPTOP_SIZE } from '../../Assets/utils';
import { PrimaryColor } from '../../Assets/colorPalette';

const ContainerStyled = styled.div`
  background-color: ${PrimaryColor};
  padding: 0.5vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  margin-left: 1vw;
  margin-right: 1vw;
  cursor: pointer;

  &:hover {
    color: white;
  }

  @media (max-width: ${LAPTOP_SIZE}) {
    font-size: 13px !important;
  }
`;

const NavtopComponent = ({ onChangeLang }) => {
  return (
    <ContainerStyled>
      <div className="d-flex justify-content-between">
        <div>
          <LinkStyled href="https://api.whatsapp.com/send?phone=6285772900593" target="_blank">
            <i className="bi-telephone" /> (+62) 857-7290-0593
          </LinkStyled>
          <LinkStyled href="mailto:info@inggo.co" target="_blank">
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
