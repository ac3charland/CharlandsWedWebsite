import React, { Component } from 'react'
import './rsvp-form.scss'

const cb = 'rsvp-form'

export default class RSVPForm extends Component {

    render() {

        return (
            <div className={cb}>
                <div className={`${cb}__heading`}>
                    <h2>R. S. V. P.</h2>
                </div>
                <div className={`${cb}__form-wrapper`}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1apNZ7KFA6gMtLUuJ2kQkAEhJiUKVqN-cPZanHqnqlJ9JCw/viewform?embedded=true" frameBorder="0">Loading…</iframe>
                </div>
            </div>
        )
    }
}