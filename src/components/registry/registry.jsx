import './registry.scss'
import React from 'react'
import Fade from 'react-reveal';
import { amazonRegistryUrl, bbbRegistryUrl, ikeaRegistryUrl } from '../../utils/constants';

const cb = 'registry'

export default function Registry(props) {
    return (
        <div id='registry' className={cb}>
            <Fade bottom>
                <h2>Registry</h2>
            </Fade>
            <Fade bottom>
                <div className={`${cb}__button-flex`}>
                    <a className={`${cb}__button`} target='_blank' href={amazonRegistryUrl}><div className={`${cb}__button-content`}>Amazon<span className='sr-only'>External link: opens a new tab</span></div></a>
                    <a className={`${cb}__button`} target='_blank' href={bbbRegistryUrl}><div className={`${cb}__button-content`}>Bed Bath & Beyond<span className='sr-only'>External link: opens a new tab</span></div></a>
                    <a className={`${cb}__button`} target='_blank' href={ikeaRegistryUrl}><div className={`${cb}__button-content`}>Ikea<span className='sr-only'>External link: opens a new tab</span></div></a>
                </div>
            </Fade>

        </div>
    )
}