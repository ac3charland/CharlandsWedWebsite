import React from 'react'
import './Image.scss'
import Countdown from '../Countdown/Countdown'
import backgroundImage from '../../images/background1.jpg'

const cb = 'landing'

export default function Image(props) {
    return (
        <div className={`${cb}__container`}>
            <img className={`${cb}__image`} src={backgroundImage} alt='header-background'/>
            <Countdown/>
            <div className={`${cb}__cutout`}/>
        </div>
    )

}