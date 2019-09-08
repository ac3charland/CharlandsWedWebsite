import React from 'react'
import { shallow } from 'enzyme'
import Header from './header'

const cb = 'header'

describe('header', () => {

    let props

    it('renders without crashing', () => {
        const component = shallow(<Header {...props} />)
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__link-wrapper a`).at(0).prop('onClick')).toBeTruthy()
        expect(component.find(`.${cb}__link-wrapper a`).at(1).prop('onClick')).toBeTruthy()
        expect(component.find(`.${cb}__link-wrapper a`).at(0).prop('href')).toEqual('javascript:void(0);')
        expect(component.find(`.${cb}__link-wrapper a`).at(1).prop('href')).toEqual('javascript:void(0);')
    })
})