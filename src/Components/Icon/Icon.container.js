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

const IconContainer = ({ icon, color, href = '' }) => {
  return (
    <IconStyled color={color} href={href} target="_blank">
      <i className={icon} />
    </IconStyled>
  );
};

IconContainer.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string
};

export default IconContainer;
