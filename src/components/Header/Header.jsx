import React, {Component} from 'react'
import './header.scss'
const noHref = 'javascript:void(0);'

const cb = 'header'

export default class Header extends Component {
    render() {
        return (
            <div className={cb}>
                <h1>Charlands Wed</h1>
                <div className={`${cb}__links`}>
                    <div className={`${cb}__link-wrapper`}><a href={noHref} onClick={() => scrollToElement('#story')}>Our Story</a></div>
                    <div className={`${cb}__link-wrapper`}><a href={noHref} onClick={() => scrollToElement('#places')}>Places to Stay</a></div>
                </div>
            </div>
        )
    }
}

const scrollToElement = selector => {
    const story = document.querySelector(selector)
    if (story) {
        story.scrollIntoView({
            behavior: 'smooth'
        })
    }
}