import styled from 'styled-components';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BlackColor, WhiteColor } from '../../Assets/colorPalette';

export const NavbarStyled = styled(Navbar)`
  padding: 1vw;
  background-color: ${WhiteColor};
`;

export const NavLinkStyled = styled(Nav.Link)`
  color: ${BlackColor} !important;
  font-size: 15px;
  line-height: 20px;
  display: inline-block;
  letter-spacing: 1.3px;
  font-weight: 500;
`;

export const NavDropdownStyled = styled(NavDropdown)`
  color: ${BlackColor} !important;
  font-size: 15px;
  line-height: 20px;
  display: inline-block;
  letter-spacing: 1.3px;
  font-weight: 500;
`;

export const NavDropdownStyledResponsive = styled(NavDropdown)`
  color: ${BlackColor} !important;
  font-size: 15px;
  line-height: 20px;
  display: inline-block;
  letter-spacing: 1.3px;
  font-weight: 500;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavResponsive = styled(Nav)`
  padding-right: 4vw;
`;

export const Logo = styled.img`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  line-height: inherit;
  white-space: nowrap;
  width: 171px;
  height: 100%;
`;
