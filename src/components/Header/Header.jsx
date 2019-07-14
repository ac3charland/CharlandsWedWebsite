import React, {Component} from 'react'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Charlands Wed</h1>
                <div className='header__links'>
                    <a>RSVP</a>
                    <a>Registry</a>
                    <a>Our Story</a>
                    <a>Places to Stay</a>
                    <a>Things to Do and See</a>
                </div>
            </div>
        )
    }
}