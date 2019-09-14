import './faq.scss'
import React from 'react'

const cb = 'faq'

export const FAQ = props => (
    <div className={cb}>
        <div className={`${cb}__flex`}>
            <div className={`${cb}__left`}>
                <h2>Itinerary</h2>
                <div className={`${cb}__itinerary`}>
                    <ul className={`${cb}__day-list`}>
                        <h3>Saturday</h3>
                        <li><strong>3:00</strong> - Ceremony in the Crystal Ballroom, Hotel Northland. Cocktail Hour and Hors D'oeuvres immediately following in the Crystal Ballroom Foyer.</li>
                        <li><strong>5:00</strong> - Buffet dinner in the Crystal Ballroom, Emerald Room, and Balcony. Toasts, Performances, and Dancing to follow</li>
                    </ul>
                    <ul className={`${cb}__day-list`}>
                        <h3>Sunday</h3>
                        <li><strong>11:00</strong> - Brunch and gift opening at the father of the bride's house, 910 Dewclaw Street, Green Bay, WI.</li>
                    </ul>
                </div>
            </div>
            <div className={`${cb}__right`}>
                <h2>FAQ</h2>
            </div>
        </div>
    </div>
)