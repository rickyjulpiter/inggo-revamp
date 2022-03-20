import React from 'react';
import { CardClients, ImgStyled } from './OurClients.styled';
import { ClientEcody } from '../../../Assets/Images/client';

const OurClientsComponent = () => {
  return (
    <CardClients>
      <ImgStyled src={ClientEcody} className="img-fluid" alt="client-logo" />
    </CardClients>
  );
};

export default OurClientsComponent;
