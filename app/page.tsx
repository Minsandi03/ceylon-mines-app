import React from 'react'
import Footer from './sections/footer';
import Features from './sections/features';
import Mission from './sections/mission';
import Team from './sections/team';
import HeroSection from './sections/hero';
import Stats from './sections/stats';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Stats />
      <Mission />
      <Features />
      <Team />
      <Footer />    
    </>
  );
};

export default Home;