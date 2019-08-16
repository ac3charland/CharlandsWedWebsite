import './divider.scss'
import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Divider(props) {
    return (
        <Fade>
            <div className='divider' />
        </Fade>
    )
}