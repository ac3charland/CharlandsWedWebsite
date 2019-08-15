import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import Story from './components/Story/Story'
import PlacesToStay from './components/PlacesToStay/PlacesToStay';

function App() {
  return (
    <div className="App">
      <Header/>
      <Image/>
      <div className='body'>
        <Story />
        <div className='divider'/>
        <PlacesToStay />
      </div>
    </div>
  );
}

export default App;
