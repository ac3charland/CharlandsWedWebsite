import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Story from './components/Story/Story'
import PlacesToStay from './components/PlacesToStay/PlacesToStay';
import BasicInfo from './components/basic-info/basic-info';
import Divider from './components/divider/divider';
import { ParallaxDivider } from './components/parallax-divider/parallax-divider';
import Cutout from './components/cutout/cutout';
import { LandingImage } from './components/landing-image/landing-image';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingImage/>
      <BasicInfo />
      <ParallaxDivider image='bg4' />
      <Story />
      <ParallaxDivider image='bg3' />
      <PlacesToStay />
    </div>
  );
}

export default App;
