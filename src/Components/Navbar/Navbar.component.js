import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  ROUTE_ABOUT_US,
  ROUTE_ACADEMIC_WRITING,
  ROUTE_BUSINESS_ENGLISH,
  ROUTE_ENGLISH_CONVERSATION,
  ROUTE_GENERAL_ENGLISH,
  ROUTE_HOME,
  ROUTE_IELTS,
  ROUTE_TESTIMONIALS,
  ROUTE_TOEFL,
  ROUTE_TRANSLATION_SERVICE
} from '../../Assets/utils';
import {
  Logo,
  NavbarStyled,
  NavDropdownStyled,
  NavDropdownStyledResponsive,
  NavLinkStyled,
  NavResponsive
} from './Navbar.styled';
import LogoImage from '../../Assets/Images/logo.png';

const NavbarComponent = ({ onChangeLang }) => {
  const { t } = useTranslation();
  return (
    <NavbarStyled collapseOnSelect variant="light" expand="xl">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand href={ROUTE_HOME}>
        <Logo alt="Logo" src={LogoImage} className="d-inline-block align-top" />
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#phone" className="responsive-hidden">
            <i className="bi-telephone" /> (+62) 857-7290-0593
          </Nav.Link>
          <Nav.Link href="#email" className="responsive-hidden">
            <i className="bi-envelope" /> info@inggo.co
          </Nav.Link>
        </Nav>
        <NavResponsive>
          <NavLinkStyled href={ROUTE_HOME}>{t('menuHome')}</NavLinkStyled>
          <NavDropdownStyled title={t('menuAboutUs')} id="collasible-nav-dropdown">
            <NavDropdown.Item href={ROUTE_ABOUT_US}>{t('about')} INGGO</NavDropdown.Item>
            <NavDropdown.Item href={ROUTE_TESTIMONIALS}>{t('testimonials')}</NavDropdown.Item>
          </NavDropdownStyled>
          {/*<NavLinkStyled href={ROUTE_OUR_TEAM}>{t('menuOurTeam')}</NavLinkStyled>*/}
          <NavDropdownStyled title={t('menuOurPrograms')} id="collasible-nav-dropdown">
            <NavDropdown.Item href={ROUTE_BUSINESS_ENGLISH}>
              {t('businessEnglish')}
            </NavDropdown.Item>
            <NavDropdown.Item href={ROUTE_ACADEMIC_WRITING}>
              {t('academicWriting')}
            </NavDropdown.Item>
            <NavDropdown.Item href={ROUTE_IELTS}>IELTS</NavDropdown.Item>
            <NavDropdown.Item href={ROUTE_TOEFL}>TOEFL</NavDropdown.Item>
            <NavDropdown.Item href={ROUTE_ENGLISH_CONVERSATION}>
              {t('englishConversation')}
            </NavDropdown.Item>
            <NavDropdown.Item href={ROUTE_GENERAL_ENGLISH}>{t('generalEnglish')}</NavDropdown.Item>
            <NavDropdown.Item href={ROUTE_TRANSLATION_SERVICE}>
              <span dangerouslySetInnerHTML={{ __html: t('translationServices') }} />
            </NavDropdown.Item>
          </NavDropdownStyled>
          <NavDropdownStyledResponsive title={t('menuLanguages')} id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={() => onChangeLang('en')}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={() => onChangeLang('id')}>Indonesia</NavDropdown.Item>
          </NavDropdownStyledResponsive>
          <NavLinkStyled href="https://bit.ly/inggo-recruitment" target="_blank">
            {t('beOurTeacher')}
          </NavLinkStyled>
        </NavResponsive>
      </Navbar.Collapse>
    </NavbarStyled>
  );
};

NavbarComponent.propTypes = {
  onChangeLang: PropTypes.func
};

export default NavbarComponent;
