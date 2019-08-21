import './landing-image.scss'
import React from 'react'
import Countdown from '../Countdown/Countdown'


export const LandingImage = props => (
    <section class={`section parallax bg1 large`}>
        <Countdown />
        <div className={'cutout'}/>
    </section>
)