import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './components/header/header';
import { LandingImage } from './components/landing-image/landing-image';
import BasicInfo from './components/basic-info/basic-info';
import Story from './components/story/story';
import { ParallaxDivider } from './components/parallax-divider/parallax-divider';
import PlacesToStay from './components/places-to-stay/places-to-stay';
import ThingsToDo from './components/things-to-do/things-to-do';

it('renders without crashing', () => {
  const component = shallow(<App/>)
  expect(component.find(Header).length).toEqual(1)
  expect(component.find(LandingImage).length).toEqual(1)
  expect(component.find(BasicInfo).length).toEqual(1)
  expect(component.find(Story).length).toEqual(1)
  expect(component.find(PlacesToStay).length).toEqual(1)
  expect(component.find(ThingsToDo).length).toEqual(1)
  expect(component.find(ParallaxDivider).length).toEqual(3)
  expect(component.find(ParallaxDivider).at(0).prop('image')).toEqual('bg5')
  expect(component.find(ParallaxDivider).at(1).prop('image')).toEqual('bg4')
  expect(component.find(ParallaxDivider).at(2).prop('image')).toEqual('bg3')
});
