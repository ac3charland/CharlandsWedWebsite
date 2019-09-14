import './landing-image.scss'
import React from 'react'
import Countdown from '../Countdown/Countdown'

const cb = 'landing'

export const LandingImage = props => (
    <section class={`${cb}__section ${cb}__parallax`}>
        <Countdown />
        <div className={`${cb}__cutout`}/>
    </section>
)