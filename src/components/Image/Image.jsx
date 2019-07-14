import React from 'react'
import './Image.scss'
import Countdown from '../Countdown/Countdown'

export default function Image(props) {
    return (
        <div>
            <img className='background-image' src='https://picsum.photos/id/767/1600/1000'/>
            <Countdown/>
            <div className='cutout'/>
        </div>
    )

}