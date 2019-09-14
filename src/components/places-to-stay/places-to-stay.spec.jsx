import React from 'react'
import { shallow } from 'enzyme'
import PlacesToStay from './places-to-stay'

const cb = 'places-to-stay'

describe('PlacesToStay', () => {

    let props

    it('renders without crashing', () => {
        const component = shallow(<PlacesToStay {...props} />)
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('places-to-stay0.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('')
        expect(component.find(`.${cb}__list a`).at(0).prop('href')).toEqual('https://www.marriott.com/hotels/travel/grbak-hotel-northland-autograph-collection/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2')
        expect(component.find(`.${cb}__list a`).at(1).prop('href')).toEqual('https://hamptoninn3.hilton.com/en/hotels/wisconsin/hampton-inn-green-bay-downtown-GRBHXHX/index.html?SEO_id=GMB-HP-GRBHXHX')
        expect(component.find(`.${cb}__list a`).at(2).prop('href')).toEqual('https://www.hyatt.com/en-US/hotel/wisconsin/hyatt-regency-green-bay/grbrg?src=corp_lclb_gmb_seo_nam_grbrg')
    })
})