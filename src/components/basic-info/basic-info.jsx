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
                    <h3>Saturday, October 30th, 2021</h3>
                    <h4>At 3:00 PM</h4>
                </div>
            </Fade>
            <Fade bottom cascade>
                <div className={`${cb}__info-group`}>
                    <h3>Dinner & reception to follow at Hotel Northland</h3>
                    <h3 className={`${cb}__welcome-heading`}>Welcome Party & COSTUME PARTY!</h3>
                    <h4>Friday, October 29, 2021 &nbsp; - &nbsp; The Alley at Hotel Northland</h4>
                    <h4>It's Halloween weekend! Wear your best costume and join the Bride, Groom and their families for some drinks, games, and toasts.</h4>
                </div>
            </Fade>
        </div>
    )
}