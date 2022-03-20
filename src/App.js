import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarComponent from './Components/Navbar/Navbar.component';
import HomeContainer from './Screens/Home/Home.container';
import { ROUTE_ABOUT_US, ROUTE_ENGLISH_COURSES } from './Assets/utils';
import AboutUsContainer from './Screens/AboutUs/AboutUs.container';
import i18n from './Assets/Translations/i18n';
import EnglishCoursesContainer from './Screens/Home/OurPrograms/EnglishCourses/EnglishCourses.container';
import NavtopComponent from './Components/Navtop/Navtop.component';

const App = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <NavtopComponent onChangeLang={handleLanguage} />
      <NavbarComponent onChangeLang={handleLanguage} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeContainer lang={language} />} />
          <Route path={ROUTE_ABOUT_US} element={<AboutUsContainer lang={language} />} />{' '}
          <Route
            path={ROUTE_ENGLISH_COURSES}
            element={<EnglishCoursesContainer lang={language} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
