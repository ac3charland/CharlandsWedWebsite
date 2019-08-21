import './parallax-divider.scss'
import React from 'react'

export const ParallaxDivider = props => (
    <section className={`section parallax ${props.image ? props.image : 'bg1'} ${props.size ? props.size : ''}`}></section>
)