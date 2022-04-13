import React from 'react';
import PropTypes from 'prop-types';

import { CardClients, ImgStyled } from './OurClients.styled';
import { ClientEcody } from '../../../Assets/Images/client';

const OurClientsComponent = ({ images }) => {
  return (
    <CardClients>
      <div style={{ backgroundColor: 'white', minHeight: '20vw' }}>
        <ImgStyled src={images} className="img-fluid" alt="client-logo" />
      </div>
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
