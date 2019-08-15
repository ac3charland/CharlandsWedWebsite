import React, {Component} from 'react'
import './Countdown.scss'
import moment from 'moment'

export default class Countdown extends Component {

    weddingDate = moment('2020-06-06 15:00:00')

    constructor(props) {
        super(props)

        const now = moment()
        const difference = moment.duration(this.weddingDate.diff(now))
        this.state = { 
            days: this.weddingDate.diff(now, 'days'),
            hours: difference.hours(),
            minutes: difference.minutes(),
            seconds: difference.seconds()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.calculateTimeUntilWedding(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    calculateTimeUntilWedding() {
        const now = moment()
        const difference = moment.duration(this.weddingDate.diff(now))
        this.setState({
            days: this.weddingDate.diff(now, 'days'),
            hours: difference.hours(),
            minutes: difference.minutes(),
            seconds: difference.seconds()
        });
    }

    render() {
        return (
            <div className='countdown'>
                <div className='countdown__flex'>
                    <div className='countdown__column days'>
                        <h3>{this.state.days}</h3>
                        <h4>DAYS</h4>
                    </div>
                    <div className='countdown__column days'>
                        <h3>{this.state.hours}</h3>
                        <h4>HOURS</h4>
                    </div>
                    <div className='countdown__column days'>
                        <h3>{this.state.minutes}</h3>
                        <h4>MINUTES</h4>
                    </div>
                    <div className='countdown__column days'>
                        <h3>{this.state.seconds}</h3>
                        <h4>SECONDS</h4>
                    </div>
                </div>
            </div>
        )
    }
}