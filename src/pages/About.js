import React from 'react';
import Navbar from '../components/Navbar';
import Story from '../StoryAbout/Story';
import Map from '../Map/Map';
import Footer from '../footerHome/Footer';


function About() {
  return (
<div className="About">
  <Navbar />
  <Story />
  <Map />
  <Footer />
  </div>
  )
};

export default About;
