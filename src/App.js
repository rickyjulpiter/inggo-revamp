import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarComponent from './Components/Navbar/Navbar.component';
import HomeContainer from './Screens/Home/Home.container';
import { ROUTE_ABOUT_US } from './Assets/utils';
import AboutUsContainer from './Screens/AboutUs/AboutUs.container';
import i18n from './Assets/Translations/i18n';

const App = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <NavbarComponent onChangeLang={handleLanguage} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeContainer lang={language} />} />
          <Route path={ROUTE_ABOUT_US} element={<AboutUsContainer lang={language} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
