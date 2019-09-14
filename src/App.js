import React from 'react';
import './App.scss';
import Header from './components/header/header'
import Story from './components/story/story'
import PlacesToStay from './components/places-to-stay/places-to-stay';
import BasicInfo from './components/basic-info/basic-info';
import { ParallaxDivider } from './components/parallax-divider/parallax-divider';
import { LandingImage } from './components/landing-image/landing-image';
import { FAQ } from './components/faq/faq';
import ThingsToDo from './components/things-to-do/things-to-do';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingImage/>
      <BasicInfo/>
      <ParallaxDivider image='bg5' />
      <Story/>
      <ParallaxDivider image='bg4' />
      <PlacesToStay/>
      <ParallaxDivider image='bg3' />
      <ThingsToDo/>
    </div>
  );
}

export default App;
