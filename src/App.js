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
import RSVPForm from './components/rsvp-form/rsvp-form';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingImage/>
      <BasicInfo/>
      <ParallaxDivider image='bg5' />
      <RSVPForm/>
      <ParallaxDivider image='bg4' />
      <Registry/>
      <ParallaxDivider image='bg3' />
      <Story/>
      <ParallaxDivider image='bg2' />
      <PlacesToStay/>
      <ParallaxDivider image='bg1' />
      <ThingsToDo/>
      <Footer/>
    </div>
  );
}

export default App;
