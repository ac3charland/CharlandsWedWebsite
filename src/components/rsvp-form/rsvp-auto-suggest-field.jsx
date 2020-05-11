import React, { Component } from 'react'
import { getSheetData } from '../../api'
import AutoSuggest from 'react-autosuggest'
import './rsvp-auto-suggest-field.scss'

export default class RSVPAutoSuggestField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            invitationValue: '',
            invitationSuggestions: [],
            allSelected: false,
            sheetInvitees: [],
        }
    }

    getSheetValues = () => {
        getSheetData().then(data => {
            const invites = (data && data.valueRanges && data.valueRanges[0] && data.valueRanges[0].values) ? data.valueRanges[0].values.map(value => ({ name: value[0] })) : []
            this.setState({
                sheetInvitees: invites
            })
        })
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            invitationSuggestions: this.getSuggestions(value)
        })
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            invitationSuggestions: []
        })
    }

    invitationOnChange = (event, { newValue }) => {
        this.props.setParentState({
            invitees: undefined,
            inviteesIndex: undefined,
            allSelected: false
        })
        this.setState({
            invitationValue: newValue
        })
    }

    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        const invitees = parseNames(suggestionValue).map(invitee => (
            { name: invitee, isAttending: false }
        ))
        const inviteesIndex = this.state.sheetInvitees.map(invitee => invitee.name).indexOf(suggestionValue) + 1
        this.props.setParentState({ invitees, inviteesIndex })
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase()
        const inputLength = inputValue.length

        return inputLength === 0 ? [] : this.state.sheetInvitees.filter(option =>
            (option.name || '').toLowerCase().includes(inputValue)
        )
    }

    componentDidMount() {
        this.getSheetValues()
    }

    render() {
        const { invitationSuggestions, invitationValue } = this.state
        const autosuggestInputProps = {
            placeholder: 'Begin typing your name',
            value: invitationValue,
            onChange: this.invitationOnChange
        }

        return (
            <AutoSuggest
                suggestions={invitationSuggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={autosuggestInputProps}
                onSuggestionSelected={this.onSuggestionSelected}
            />
        )
    }
}

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
)

const getSuggestionValue = suggestion => suggestion.name

const parseNames = names => {
    if (names) {
        return names.split(/,\ &|,|&/).map((name, idx, arr) => {
            if (!name.trim().includes(' ') && name.trim().toLowerCase() !== 'guest') {
                const lastName = arr[arr.length - 1].trim().split(' ')[1]
                return `${name} ${lastName}`.trim()
            }
            return name.trim()
        })
    }
    return []
}