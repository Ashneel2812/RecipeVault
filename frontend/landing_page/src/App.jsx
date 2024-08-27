import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import logo from './components/logo.png'; // Relative path to the image
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ViewRecipe} from "./components/viewRecipe";
import EditRecipe from "./components/editRecipe";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const handleLogoClick = () => {
    const currentUrl = window.location.href;

    const newUrl = currentUrl.replace(/\/view\/\d+/, '');

    window.location.href = newUrl;
  };

  return (
    <Router>
      <div>
      <img className="navbar-brand" src={logo} alt="logo" style={{width:"250px",height:"75px",paddingRight:"0px"}} onClick={handleLogoClick}/>
        
        <Routes>
          <Route path="/" element={
            <>
            <Navigation />
              <Header data={landingPageData.Header} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Gallery data={landingPageData.Gallery} />
              <Testimonials data={landingPageData.Testimonials} />
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
            </>
          } />
          <Route path="/view/:id" element={<ViewRecipe />} />
        </Routes>
      </div>
    </Router>
    

  );
};

export default App;
