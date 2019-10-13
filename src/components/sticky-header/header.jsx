import React, { Component } from 'react'
import './header.scss'
const noHref = 'javascript:void(0);'

const cb = 'header'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu() {
        console.log('toggling menu!')
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        const menuCSS = this.state.menuOpen ? 'open' : 'closed'
        const backgroundCSS = this.state.menuOpen ? 'show-background' : 'none'
        const menuIcon = this.state.menuOpen ? 'fa-times' : 'fa-bars'

        return (
            <div className={`${cb} ${backgroundCSS}`}>
                <h1>Charlands Wed</h1>
                <div className={`${cb}__links ${menuCSS}`}>
                    <a href="javascript:void(0);" className={`icon ${menuCSS}`} onClick={() => this.toggleMenu()}><i className={`fa ${menuIcon}`}></i></a>
                    <div className={`${cb}__link-wrapper ${menuCSS}`}><a className={`${cb}__underline`} href={noHref} onClick={() => scrollToElement('#story')}>Our Story</a></div>
                    <div className={`${cb}__link-wrapper ${menuCSS}`}><a className={`${cb}__underline`} href={noHref} onClick={() => scrollToElement('#places')}>Places to Stay</a></div>
                    <div className={`${cb}__link-wrapper ${menuCSS}`}><a className={`${cb}__underline`} href={noHref} onClick={() => scrollToElement('#things')}>Things to Do</a></div>
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