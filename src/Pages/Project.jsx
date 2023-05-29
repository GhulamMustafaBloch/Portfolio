import React from 'react';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import NavBar from '../Components/NavBar';
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work';

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading = "Projects." text = "Some of my most recent works"/>
      <Work/>
      <PricingCard />
      <Footer />
    </div>
  );
}

export default Project;
