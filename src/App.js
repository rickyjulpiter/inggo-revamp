import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarComponent from './Components/Navbar/Navbar.component';
import HomeContainer from './Screens/Home/Home.container';
import { ROUTE_ABOUT_US } from './Assets/utils';
import AboutUsContainer from './Screens/AboutUs/AboutUs.container';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route path={ROUTE_ABOUT_US} element={<AboutUsContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
