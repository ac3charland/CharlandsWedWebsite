import React from 'react'
import { shallow } from 'enzyme'
import Registry from './registry'

const cb = 'registry'

describe('Registry', () => {

    it('renders without crashing', () => {
        const component = shallow(<Registry />)
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('has correct urls for buttons', () => {
        const component = shallow(<Registry />)
        expect(component.find(`.${cb}__button`).at(0).prop('href')).toEqual('https://www.amazon.com/wedding/emily-borley-alex-charland-green-bay-june-2020/registry/P21FS7LZF90V')
        expect(component.find(`.${cb}__button`).at(1).prop('href')).toEqual('https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548581110?eventType=Wedding')
        // expect(component.find(`.${cb}__button`).at(2).prop('href')).toEqual('https://info.ikea-usa.com/giftregistry/en-us/registry/6eabb05f-20bf-454e-a43f-e65c3d7117fe')
    })
})