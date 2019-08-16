import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import Story from './components/Story/Story'
import PlacesToStay from './components/PlacesToStay/PlacesToStay';
import BasicInfo from './components/basic-info/basic-info';
import Divider from './components/divider/divider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Image/>
      <div className='body'>
        <BasicInfo/>
        <Divider/>
        <Story/>
        <Divider/>
        <PlacesToStay/>
      </div>
    </div>
  );
}

export default App;
