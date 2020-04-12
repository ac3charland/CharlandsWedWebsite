import React from 'react'
import './disclaimer.scss'

const cb = 'disclaimer'

export default function Disclaimer(props) {
    return (
        <div className={cb}>
            <div className={`${cb}__content`}>
                <h2 className={`${cb}__heading`}>Our wedding has been postponed.</h2>
                <p>Due to concerns around COVID-19, Emily and Alex have decided to postpone their wedding to <span className={`${cb}__unbreakable`}>September 5th, 2020</span>.</p>
                <p>More information and formal invitiations to follow.</p>
            </div>
            
        </div>
    )
}