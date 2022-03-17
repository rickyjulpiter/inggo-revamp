import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

import {
  ROUTE_ABOUT_US,
  ROUTE_ACADEMIC_WRITING,
  ROUTE_BUSINESS_ENGLISH,
  ROUTE_GENERAL_ENGLISH,
  ROUTE_HOME,
  ROUTE_IELTS,
  ROUTE_OUR_TEAM,
  ROUTE_TOEFL
} from '../../Assets/utils';
import { Logo, NavbarStyled, NavDropdownStyled, NavLinkStyled } from './Navbar.styled';
import LogoImage from '../../Assets/Images/logo.png';

const NavbarComponent = ({ onChangeLang }) => {
  return (
    <Container>
      <NavbarStyled collapseOnSelect variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home">
            <Logo
              alt="Logo"
              src={LogoImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#phone">
                <i className="bi-telephone" /> (+62) 857-7290-0593
              </Nav.Link>
              <Nav.Link href="#email">
                <i className="bi-envelope" /> info@inggo.co
              </Nav.Link>
            </Nav>
            <Nav>
              <NavLinkStyled href={ROUTE_HOME}>Home</NavLinkStyled>
              <NavLinkStyled href={ROUTE_ABOUT_US}>About Us</NavLinkStyled>
              <NavLinkStyled href={ROUTE_OUR_TEAM}>Our Team</NavLinkStyled>
              <NavDropdownStyled title="Our Programs" id="collasible-nav-dropdown">
                <NavDropdown.Item href={ROUTE_BUSINESS_ENGLISH}>Business English</NavDropdown.Item>
                <NavDropdown.Item href={ROUTE_ACADEMIC_WRITING}>Academic Writing</NavDropdown.Item>
                <NavDropdown.Item href={ROUTE_IELTS}>IELTS</NavDropdown.Item>
                <NavDropdown.Item href={ROUTE_TOEFL}>TOEFL</NavDropdown.Item>
                <NavDropdown.Item href={ROUTE_GENERAL_ENGLISH}>General English</NavDropdown.Item>
              </NavDropdownStyled>
              <NavDropdownStyled title="Languages" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => onChangeLang('en')}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => onChangeLang('id')}>Indonesia</NavDropdown.Item>
              </NavDropdownStyled>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavbarStyled>
    </Container>
  );
};

NavbarComponent.propTypes = {
  onChangeLang: PropTypes.func
};

export default NavbarComponent;
