import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarComponent from './Components/Navbar/Navbar.component';
import HomeContainer from './Screens/Home/Home.container';
import {
  ROUTE_ABOUT_US,
  ROUTE_ACADEMIC_WRITING,
  ROUTE_BUSINESS_ENGLISH,
  ROUTE_ENGLISH_CONVERSATION,
  ROUTE_ENGLISH_COURSES,
  ROUTE_FREE_TRIAL,
  ROUTE_GENERAL_ENGLISH,
  ROUTE_IELTS,
  ROUTE_OUR_TEAM,
  ROUTE_TESTIMONIALS,
  ROUTE_TOEFL,
  ROUTE_TRANSLATION_SERVICE
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
import IELTS from './Screens/Home/OurPrograms/Programs/IELTS';
import TOEFL from './Screens/Home/OurPrograms/Programs/TOEFL';
import EnglishConversation from './Screens/Home/OurPrograms/Programs/EnglishConversation';
import GeneralEnglish from './Screens/Home/OurPrograms/Programs/GeneralEnglish';
import TranslationAndProofReading from './Screens/Home/OurPrograms/Programs/TranslationAndProofReading';
import TeacherContainer from './Screens/Teacher/Teacher.container';

const App = () => {
  const [language, setLanguage] = useState('id');

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
          <Route path={ROUTE_TOEFL} element={<TOEFL lang={language} />} />
          <Route
            path={ROUTE_ENGLISH_CONVERSATION}
            element={<EnglishConversation lang={language} />}
          />
          <Route path={ROUTE_GENERAL_ENGLISH} element={<GeneralEnglish lang={language} />} />

          <Route path={ROUTE_TESTIMONIALS} element={<TestimonialsContainer lang={language} />} />
          <Route
            path={ROUTE_TRANSLATION_SERVICE}
            element={<TranslationAndProofReading lang={language} />}
          />
          <Route path={ROUTE_OUR_TEAM} element={<TeacherContainer lang={language} />} />
        </Routes>
      </BrowserRouter>
      <NavbottomComponent />
    </>
  );
};

export default App;
