import React from 'react'
import './disclaimer.scss'

const cb = 'disclaimer'

export default function Disclaimer(props) {
    return (
        <div className={cb}>
            <div className={`${cb}__content`}>
                <h2 className={`${cb}__heading`}>Our wedding has been postponed indefinitely.</h2>
                <p>Due to continuing concerns around COVID-19, we have decided to postpone our wedding until the pandemic is under control and it is safe to have an indoor wedding.</p>
                <p>When we have our wedding, we want to be able to hug you. We want to introduce you to people from different parts of our lives. We want you to experience tears and laughter and joy.</p>
                <p>What we don't want are masks, social distancing, and above all, the specter of infection.</p>
                <p>Therefore, we are going to wait until we all can enjoy what is currently an impossible luxury: <strong>a normal wedding</strong>.</p>
                <p>Thank you for your patience and understanding.</p>
            </div>
            
        </div>
    )
}