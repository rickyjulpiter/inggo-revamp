import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CardClients } from './OurClients.styled';
import { ClientEcody } from '../../../Assets/Images/client';

const OurClientsComponent = ({ images }) => {
  const Div = styled.div`
    border-radius: 8px;
    background-color: white;
    padding: 1vw;
    background-image: url(${images});
    min-height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `;
  return (
    <CardClients>
      <Div />
    </CardClients>
  );
};

OurClientsComponent.propTypes = {
  images: PropTypes.string
};

OurClientsComponent.defaultprops = {
  images: ClientEcody
};

export default OurClientsComponent;
