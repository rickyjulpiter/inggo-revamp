import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconStyled = styled.a.attrs((props: { color: string }) => props)`
  background-color: ${(props) => props?.color};
  color: #ffffff;
  border-radius: 50%;
  font-size: 40px;
  padding: 5px 15px;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

const IconContainer = ({ icon, color }) => {
  console.log(icon);
  return (
    <IconStyled color={color}>
      <i className={icon} />
    </IconStyled>
  );
};

IconContainer.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string
};

export default IconContainer;
