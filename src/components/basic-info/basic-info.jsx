import './basic-info.scss'
import React from 'react'
import Fade from 'react-reveal/Fade';

const cb = 'basic-info'

export default function BasicInfo(props) {
    return (
        <div className={cb}>
            <Fade bottom>
                <h2>The wedding of Alex Charland and Emily Borley will be held at:</h2>
            </Fade>
            <Fade bottom cascade>
                <div className={`${cb}__info-group`}>
                    <h3>Hotel Northland</h3>
                    <h4>304 N Adams St, Green Bay, WI 54301</h4>
                </div>
            </Fade>
            <Fade bottom cascade>
                <div className={`${cb}__info-group`}>
                    <h3>Date TBD</h3>
                    {/* <h4>At 3:00 PM</h4> */}
                </div>
            </Fade>
            <Fade bottom cascade>
                <div className={`${cb}__info-group`}>
                    <h3>Dinner & reception to follow at Hotel Northland</h3>
                    <h4>Musicians are encouraged to bring their instruments and voices to the jam session at the reception</h4>
                </div>
            </Fade>
        </div>
    )
}