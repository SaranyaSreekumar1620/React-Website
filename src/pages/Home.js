import React from 'react';
import Navbar from '../components/Navbar';
import GallerySlider from '../GallerySlider/GallerySlider';
import MenuSlider from '../MenuSlider/MenuSlider';
import Slider from '../Slider/Slider';
import StorySlide from '../StorySlide/StorySlide';
import Updates from '../Updates/Updates';
import WedService from '../WedService/WedService';
import Map from '../Map/Map';
import Footer from '../footerHome/Footer';

function Home() {
  return (
  <div>
    <Navbar />
    <Slider />
    <StorySlide />
    <MenuSlider />
    <Updates />
    <GallerySlider />
    <WedService />
    <Map />
    <Footer />
  </div>
  )
}

export default Home;




