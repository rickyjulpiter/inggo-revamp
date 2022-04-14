import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CardClients, ImgStyled } from './OurClients.styled';
import { ClientEcody } from '../../../Assets/Images/client';

const Div = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 1vw;
`;

const OurClientsComponent = ({ images }) => {
  return (
    <CardClients>
      <Div>
        <ImgStyled src={images} className="img-fluid" alt="client-logo" />
      </Div>
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
