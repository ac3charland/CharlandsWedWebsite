import React from 'react'
import { shallow } from 'enzyme'
import Story from './Story'

const cb = 'story'

describe('Story', () => {

    it('renders without crashing', () => {
        const component = shallow(<Story />)
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('has correct image src and alt text', () => {
        const component = shallow(<Story />)
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('story0.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('alex-and-emily-by-ferris-wheel')
    })
})