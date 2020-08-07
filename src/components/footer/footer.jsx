import './footer.scss'
import React from 'react'
import {portfolioUrl} from '../../utils/constants'

const cb = 'footer'

export default function Footer(props) {
    return (
        <div className={cb}>
            <div className={`${cb}__footer-text`}>
                Website &copy; 2020 <a href={portfolioUrl}>Alex Charland</a>
            </div>
        </div>
    )
}