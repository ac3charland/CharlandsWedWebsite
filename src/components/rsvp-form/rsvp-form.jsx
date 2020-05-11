import React, { Component } from 'react'
import './rsvp-form.scss'
import { writeRSVPData } from '../../api'
import RSVPAutoSuggestField from './rsvp-auto-suggest-field'

const cb = 'rsvp-form'

export default class RSVPForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    setParentState = state => {
        this.setState(state)
    }

    onCheck = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        let allSelected = true
        const invitees = this.state.invitees.map((invitee, idx) => {
            if (name == idx) {
                invitee.isAttending = value
            }
            if (!invitee.isAttending) {
                allSelected = false
            }
            return invitee
        })

        this.setState({ invitees, allSelected })
    }

    selectAll = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const invitees = this.state.invitees.map(invitee => {
            invitee.isAttending = value
            return invitee
        })
        this.setState({ invitees, allSelected: value })
    }

    onSubmit = event => {
        event.preventDefault()
        const attendingInvitees = this.state.invitees && this.state.invitees.filter(invitee => invitee.isAttending)
        const numberAttending = attendingInvitees.length
        const names = attendingInvitees.length > 0 ? attendingInvitees.map(invitee => invitee.name).join(', ') : 'None'
        const index = this.state.inviteesIndex

        writeRSVPData(index, numberAttending, names)
    }

    render() {
        const { invitees, allSelected } = this.state

        return (
            <div className={cb}>
                <div className={`${cb}__heading`}>
                    <h2>R. S. V. P.</h2>
                    <p>process.env.REACT_APP_CLIENT_ID: {process.env.REACT_APP_CLIENT_ID}</p>
                    <p>process.env.REACT_APP_CLIENT_SECRET: {process.env.REACT_APP_CLIENT_SECRET}</p>
                    <p>process.env.REACT_APP_REDIRECT_URI: {process.env.REACT_APP_REDIRECT_URI}</p>
                </div>
                <div className={`${cb}__form-wrapper`}>
                    <form onSubmit={this.onSubmit}>
                        <RSVPAutoSuggestField setParentState={this.setParentState} />
                        {invitees && (
                            <fieldset className={`${cb}__checkboxes`}>
                                <legend>Please select who will be attending.</legend>
                                <div className={`${cb}__checkbox-wrapper`}>
                                    {invitees.map((invitee, idx) => {
                                        return (
                                            <span key={idx} className={`${cb}__checkbox`}>
                                                <input name={idx} checked={invitee.isAttending} type='checkbox' onChange={this.onCheck} /><span className={`${cb}__checkbox-label`}>{invitee.name}</span>
                                            </span>
                                        )
                                    })}
                                    {invitees.length > 1 && (
                                        <span className={`${cb}__checkbox`}>
                                            <input checked={allSelected} type='checkbox' onChange={this.selectAll} /><span className={`${cb}__checkbox-label`}>Select All</span>
                                        </span>
                                    )}
                                </div>
                            </fieldset>
                        )}
                        {invitees && (
                            <input className={`${cb}__submit`} type='submit' value='Submit' />
                        )}
                    </form>
                </div>
            </div>
        )
    }
}