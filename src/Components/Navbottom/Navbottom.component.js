import React from 'react';

import { Brand, ContainerBottomStyled, LinkStyled } from './Navbottom.styled';

const NavbottomComponent = () => {
  return (
    <ContainerBottomStyled>
      <div className="d-flex justify-content-between">
        <div>
          <Brand>inggo.co</Brand>
        </div>
        <div>
          <LinkStyled>
            <i className="bi bi-instagram" />
          </LinkStyled>
          <LinkStyled>
            <i className="bi-telephone" /> (+62) 857-7290-0593
          </LinkStyled>
          <LinkStyled>
            <i className="bi-envelope" /> info@inggo.co
          </LinkStyled>
        </div>
      </div>
    </ContainerBottomStyled>
  );
};

export default NavbottomComponent;
