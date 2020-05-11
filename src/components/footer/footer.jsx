import './footer.scss'
import React from 'react'

const cb = 'footer'

export default function Footer(props) {
    return (
        <div className={cb}>
            <div className={`${cb}__footer-text`}>
                Website &copy; 2020 Alex Charland
            </div>
        </div>
    )
}