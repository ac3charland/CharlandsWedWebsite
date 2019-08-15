import React from 'react'
import { shallow } from 'enzyme'
import PlacesToStay from './PlacesToStay'

const cb = 'places-to-stay'

describe('PlacesToStay', () => {

    it('renders without crashing', () => {
        const component = shallow(<PlacesToStay />)
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('has correct image src and alt text', () => {
        const component = shallow(<PlacesToStay />)
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('places-to-stay0.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('places-to-stay-image')
    })
})