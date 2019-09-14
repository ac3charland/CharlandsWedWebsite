import React from 'react'
import { shallow } from 'enzyme'
import ThingsToDo from './things-to-do'

const cb = 'things-to-do'

describe('ThingsToDo', () => {

    let props

    it('renders without crashing', () => {
        const component = shallow(<ThingsToDo {...props} />)
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('things0.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('')
        expect(component.find(`.${cb}__list a`).at(0).prop('href')).toEqual('https://www.packers.com/lambeau-field/')
        expect(component.find(`.${cb}__list a`).at(1).prop('href')).toEqual('https://www.packers.com/lambeau-field/')
        expect(component.find(`.${cb}__list a`).at(2).prop('href')).toEqual('https://greenbaywi.gov/445/Bay-Beach')
        expect(component.find(`.${cb}__list a`).at(3).prop('href')).toEqual('http://www.baybeachwildlife.com/')
        expect(component.find(`.${cb}__list a`).at(4).prop('href')).toEqual('https://nationalrrmuseum.org/')
        expect(component.find(`.${cb}__list a`).at(5).prop('href')).toEqual('https://heritagehillgb.org/')
    })
})