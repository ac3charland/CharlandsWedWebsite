import './PlacesToStay.scss'
import React from 'react'
import image from '../../images/places-to-stay0.jpg'

const cb = 'places-to-stay'

export default function PlacesToStay(props) {
    return (
        <div className={cb}>
            <h2>Places to Stay</h2>
            <div className={`${cb}__flex`}>
                <div className={`${cb}__image-wrapper`}>
                    <img className={`${cb}__image`} src={image} alt='places-to-stay-image' />
                </div>
                <div className={`${cb}__text`}>
                    <p>Selvage actually bicycle rights vexillologist. Four loko green juice dreamcatcher crucifix +1, tbh offal. Kitsch butcher meh occupy taxidermy crucifix aesthetic tumeric cornhole flexitarian. Ennui hella tumeric flannel, tumblr pok pok glossier retro polaroid. Letterpress tumeric paleo lumbersexual XOXO. Meh trust fund vice fashion axe occupy.</p>
                    <ul>
                        <li>
                            <a href='#'>Hotel Northland</a>: Lorem ipsum dolor amet gochujang flannel selfies beard distillery meditation drinking vinegar. Intelligentsia man braid mumblecore activated charcoal portland ethical, bespoke blue bottle quinoa banh mi narwhal cray. Coloring book aesthetic semiotics, forage umami kogi truffaut biodiesel tacos blog next level XOXO hashtag. Art party kogi try-hard 90's authentic. Actually yuccie aesthetic blue bottle forage pabst occupy tattooed poke glossier echo park.
                        </li>
                        <li>
                            <a href='#'>Hotel Northland</a>: Lorem ipsum dolor amet gochujang flannel selfies beard distillery meditation drinking vinegar. Intelligentsia man braid mumblecore activated charcoal portland ethical, bespoke blue bottle quinoa banh mi narwhal cray. Coloring book aesthetic semiotics, forage umami kogi truffaut biodiesel tacos blog next level XOXO hashtag. Art party kogi try-hard 90's authentic. Actually yuccie aesthetic blue bottle forage pabst occupy tattooed poke glossier echo park.
                        </li>
                        <li>
                            <a href='#'>Hotel Northland</a>: Lorem ipsum dolor amet gochujang flannel selfies beard distillery meditation drinking vinegar. Intelligentsia man braid mumblecore activated charcoal portland ethical, bespoke blue bottle quinoa banh mi narwhal cray. Coloring book aesthetic semiotics, forage umami kogi truffaut biodiesel tacos blog next level XOXO hashtag. Art party kogi try-hard 90's authentic. Actually yuccie aesthetic blue bottle forage pabst occupy tattooed poke glossier echo park.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}