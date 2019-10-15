import React from 'react'
import { shallow } from 'enzyme'
import Story from './story'

const cb = 'story'

describe('Story', () => {

    it('renders without crashing', () => {
        const component = shallow(<Story />)
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('has correct image src and alt text', () => {
        const component = shallow(<Story />)
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('https://drive.google.com/uc?id=1wANaHlWHhLu0CMNDUYN3o4hSAAk0Yaw6')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('Caterpillar and engagement ring resting on flower')
    })
})