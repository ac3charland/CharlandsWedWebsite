import './parallax-divider.scss'
import React from 'react'

const cb ='divider'

export const ParallaxDivider = props => (
    <section className={`${cb}__section ${cb}__parallax ${props.image ? props.image : 'bg1'}`}></section>
)