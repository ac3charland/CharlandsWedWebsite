import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const component = shallow(<App/>)
  expect(component.find('h1').text()).toEqual('blah')
});
