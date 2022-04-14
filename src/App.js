import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarComponent from './Components/Navbar/Navbar.component';
import HomeContainer from './Screens/Home/Home.container';
import {
  ROUTE_ABOUT_US,
  ROUTE_ACADEMIC_WRITING,
  ROUTE_BUSINESS_ENGLISH,
  ROUTE_ENGLISH_COURSES,
  ROUTE_FREE_TRIAL,
  ROUTE_IELTS,
  ROUTE_TESTIMONIALS
} from './Assets/utils';
import AboutUsContainer from './Screens/AboutUs/AboutUs.container';
import i18n from './Assets/Translations/i18n';
import EnglishCoursesContainer from './Screens/Home/OurPrograms/EnglishCourses/EnglishCourses.container';
import NavtopComponent from './Components/Navtop/Navtop.component';
import NavbottomComponent from './Components/Navbottom/Navbottom.component';
import FreeTrialContainer from './Screens/FreeTrial/FreeTrial.container';
import TestimonialsContainer from './Screens/Testimonials/Testimonials.container';
import BusinessEnglish from './Screens/Home/OurPrograms/Programs/BusinessEnglish';
import AcademicWriting from './Screens/Home/OurPrograms/Programs/AcademicWriting';
import IELTS from './Screens/Home/OurPrograms/Programs/Ielts';

const App = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguage = async (lang) => {
    setLanguage(lang);
    await i18n.changeLanguage(lang);
  };
  return (
    <>
      <NavtopComponent onChangeLang={handleLanguage} />
      <NavbarComponent onChangeLang={handleLanguage} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeContainer lang={language} />} />
          <Route path={ROUTE_ABOUT_US} element={<AboutUsContainer lang={language} />} />
          <Route
            path={ROUTE_ENGLISH_COURSES}
            element={<EnglishCoursesContainer lang={language} />}
          />
          <Route path={ROUTE_FREE_TRIAL} element={<FreeTrialContainer lang={language} />} />

          <Route path={ROUTE_BUSINESS_ENGLISH} element={<BusinessEnglish lang={language} />} />
          <Route path={ROUTE_ACADEMIC_WRITING} element={<AcademicWriting lang={language} />} />
          <Route path={ROUTE_IELTS} element={<IELTS lang={language} />} />

          <Route path={ROUTE_TESTIMONIALS} element={<TestimonialsContainer lang={language} />} />
        </Routes>
      </BrowserRouter>
      <NavbottomComponent />
    </>
  );
};

export default App;
