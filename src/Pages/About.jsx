import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading = "About." text = "Im a friendly Font-End Developer."/>
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
