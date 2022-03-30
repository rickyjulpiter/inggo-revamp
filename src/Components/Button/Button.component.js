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

  &:hover {
    color: #484848;
    background-color: #ffffff;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    padding: 11px 22px;
  }
`;

const ButtonComponent = ({ text, color, actionhref, handleClick }) => {
  return (
    <ButtonStyled color={color} href={actionhref} onClick={handleClick}>
      {text}
    </ButtonStyled>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  actionhref: PropTypes.string,
  handleClick: PropTypes.func
};

ButtonComponent.defaultProps = {
  handleClick: () => console.log('clicked'),
  color: PrimaryColor,
  text: 'Submit',
  actionhref: '#'
};

export default ButtonComponent;
