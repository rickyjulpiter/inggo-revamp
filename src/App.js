import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

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
  ROUTE_GENERATE_TEST_CODE,
  ROUTE_IELTS,
  ROUTE_OUR_TEAM,
  ROUTE_POST_TEST,
  ROUTE_PRE_TEST,
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
import PreTestContainer from './Screens/Exam/PreTest.container';
import GenerateTestCodeContainer from './Screens/Exam/GenerateTestCode.container';
import store from './Redux/store';
import PostTestContainer from './Screens/Exam/PostTest.container';

const App = () => {
  const handleLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <Provider store={store}>
      <NavtopComponent onChangeLang={handleLanguage} />
      <NavbarComponent onChangeLang={handleLanguage} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route path={ROUTE_ABOUT_US} element={<AboutUsContainer />} />
          <Route path={ROUTE_ENGLISH_COURSES} element={<EnglishCoursesContainer />} />
          <Route path={ROUTE_FREE_TRIAL} element={<FreeTrialContainer />} />

          <Route path={ROUTE_BUSINESS_ENGLISH} element={<BusinessEnglish />} />
          <Route path={ROUTE_ACADEMIC_WRITING} element={<AcademicWriting />} />
          <Route path={ROUTE_IELTS} element={<IELTS />} />
          <Route path={ROUTE_TOEFL} element={<TOEFL />} />
          <Route path={ROUTE_ENGLISH_CONVERSATION} element={<EnglishConversation />} />
          <Route path={ROUTE_GENERAL_ENGLISH} element={<GeneralEnglish />} />

          <Route path={ROUTE_TESTIMONIALS} element={<TestimonialsContainer />} />
          <Route path={ROUTE_TRANSLATION_SERVICE} element={<TranslationAndProofReading />} />
          <Route path={ROUTE_OUR_TEAM} element={<TeacherContainer />} />

          <Route path={ROUTE_PRE_TEST} element={<PreTestContainer />} />
          <Route path={ROUTE_POST_TEST} element={<PostTestContainer />} />
          <Route path={ROUTE_GENERATE_TEST_CODE} element={<GenerateTestCodeContainer />} />
        </Routes>
      </BrowserRouter>
      <NavbottomComponent />
    </Provider>
  );
};

export default App;
