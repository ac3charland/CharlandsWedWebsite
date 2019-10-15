import React from 'react'
import { shallow } from 'enzyme'
import ThingsToDo from './things-to-do'

const cb = 'things-to-do'

describe('ThingsToDo', () => {

    let props

    it('renders without crashing', () => {
        const component = shallow(<ThingsToDo {...props} />)
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('https://drive.google.com/uc?id=19efL4uFUz9D9-CIrq45P9c8NMK2RhCQ3')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('')
        expect(component.find(`.${cb}__list a`).at(0).prop('href')).toEqual('https://www.packers.com/lambeau-field/')
        expect(component.find(`.${cb}__list a`).at(1).prop('href')).toEqual('https://www.packers.com/lambeau-field/')
        expect(component.find(`.${cb}__list a`).at(2).prop('href')).toEqual('https://greenbaywi.gov/445/Bay-Beach')
        expect(component.find(`.${cb}__list a`).at(3).prop('href')).toEqual('http://www.baybeachwildlife.com/')
        expect(component.find(`.${cb}__list a`).at(4).prop('href')).toEqual('https://nationalrrmuseum.org/')
        expect(component.find(`.${cb}__list a`).at(5).prop('href')).toEqual('https://heritagehillgb.org/')
    })
})