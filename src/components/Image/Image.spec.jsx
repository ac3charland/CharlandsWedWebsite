import React from 'react'
import { shallow } from 'enzyme'
import Image from './Image'

const cb = 'landing'

describe('Image', () => {

    it('renders without crashing', () => {
        const component = shallow(<Image />)
        expect(component.find(`.${cb}__container`).length).toEqual(1)
    })

    it('has correct image src and alt text', () => {
        const component = shallow(<Image />)
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('background3.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('header-background')
    })
})