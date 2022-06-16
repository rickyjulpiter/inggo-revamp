import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryColor } from '../../Assets/colorPalette';

const ButtonStyled = styled.a.attrs((props: { color: string }) => props)`
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
  text-align: center;

  &:hover {
    color: #484848;
    background-color: #ffffff;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    padding: 9px 11px;
  }
`;

const ButtonComponent = ({ text, color, actionhref, handleClick, target }) => {
  return (
    <ButtonStyled color={color} href={actionhref} onClick={handleClick} target={target}>
      {text}
    </ButtonStyled>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  actionhref: PropTypes.string,
  handleClick: PropTypes.func,
  target: PropTypes.string
};

ButtonComponent.defaultProps = {
  handleClick: () => console.log('clicked'),
  color: PrimaryColor,
  text: 'Submit',
  actionhref: '#',
  target: ''
};

export default ButtonComponent;
