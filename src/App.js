import React from 'react';
import './App.scss';
import Header from './components/sticky-header/header'
import Story from './components/our-story/story'
import PlacesToStay from './components/places-to-stay/places-to-stay';
import BasicInfo from './components/basic-info/basic-info';
import { ParallaxDivider } from './components/parallax-divider/parallax-divider';
import { LandingImage } from './components/landing-image/landing-image';
import { FAQ } from './components/faq/faq';
import ThingsToDo from './components/things-to-do/things-to-do';
import Footer from './components/footer/footer';
import Registry from './components/registry/registry';
import Disclaimer from './components/disclaimer/disclaimer';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingImage/>
      <Disclaimer/>
      <BasicInfo/>
      <ParallaxDivider image='bg5' />
      <Registry/>
      <ParallaxDivider image='bg4' />
      <Story/>
      <ParallaxDivider image='bg3' />
      <PlacesToStay/>
      <ParallaxDivider image='bg2' />
      <ThingsToDo/>
      <Footer/>
    </div>
  );
}

export default App;
