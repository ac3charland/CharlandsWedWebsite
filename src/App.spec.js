import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './components/Header/Header';
import Image from './components/Image/Image';

it('renders without crashing', () => {
  const component = shallow(<App/>)
  expect(component.find(Header).length).toEqual(1)
  expect(component.find(Image).length).toEqual(1)
});
