import './story.scss'
import React from 'react'
import image from '../../images/story1.jpg'
import Fade from 'react-reveal';
import {story1} from '../../utils/constants'

const cb = 'story'

export default function Story(props) {
    return (
        <div id='story' className={cb}>
            <Fade bottom>
                <h2>Our Story</h2>
            </Fade>
            <div className={`${cb}__flex`}>
                <Fade bottom cascade>
                    <div className={`${cb}__text`}>
                        <p>Emily and Alex met at the School of Music at the University of Wisconsin - Madison, in fall of 2012. At the time, Alex was a Clarinet Performance major, and Emily a Music Education major in the clarinet studio. The two got to know each other musically and personally, as Emily slowly discovered Alex’s background in composing and Jazz, and Alex discovered Emily’s passion to teach. Their initial hangouts that fall included creating playlists for each other, in which they’d trade their favorite jazz (Alex) and classical (Emily) tracks. It didn’t take long before, on December 14th, Alex had Emily listen to two final tracks: “Misty” by Ella Fitzgerald, and “Just Kiss Me” by Harry Conick, Jr. The rest, as they say, was history.</p>
                        <p>Emily and Alex continued to listen to music together, and as the years went on, Alex began a collection of compositions, one for every year of his and Emily’s relationship together. On December 14th of each year, he’d play the recording of his anniversary composition. In January of 2018, Alex began a year-long project, in which he reworked each of these compositions, and along with help from several of his and Emily’s friends and family, compiled these pieces into the ultimate musical love letter. The album, All of Me to You, was released on the couple’s 6 year anniversary - December 14, 2018. That night, Alex played the album for Emily in their home, and proposed during his track, Alex’s Interlude.</p>
                    </div>
                </Fade>
                <Fade>
                    <div className={`${cb}__image-wrapper`}>
                        <img className={`${cb}__image`} src={story1} alt='Caterpillar and engagement ring resting on flower' />
                    </div>
                </Fade>
            </div>

        </div>
    )
}