import './places-to-stay.scss'
import React from 'react'
import Fade from 'react-reveal/Fade'
import {placesToStay0} from '../../utils/constants'

const cb = 'places-to-stay'

export default function PlacesToStay(props) {
    return (
        <div id='places' className={cb}>
            <Fade bottom>
                <h2>Places to Stay</h2>
            </Fade>
            <div className={`${cb}__flex`}>
                <Fade>
                    <div>
                        <div className={`${cb}__image-wrapper`}>
                            <img className={`${cb}__image`} src={placesToStay0} alt='' />
                        </div>
                        <div className={`${cb}__image-caption`}>
                            <p>Hotel Northland in downtown Green Bay</p>
                        </div>
                    </div>
                </Fade>
                <div className={`${cb}__text`}>
                    <Fade bottom>
                        <p>There are a number of hotel options near the venue to fit a variety of budgets, including the wedding venue.</p>
                        {/* <p className={`${cb}__emphasized`}><strong>Note: We recommend you book early!</strong> There is a convention during the wedding weekend at the KI Convention Center in Downtown Green Bay which will reduce the availability of rooms.</p> */}
                        <p>Some options include:</p>
                    </Fade>
                    <Fade bottom cascade>
                        <ul className={`${cb}__list`}>
                            <li><a href='https://www.marriott.com/hotels/travel/grbak-hotel-northland-autograph-collection/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2'>Hotel Northland</a>: This will be home base for all things wedding! Ceremony, reception, AND dinner will be held in the Crystal Ballroom on the second floor. A room block has been set aside and will be filled on a first-come, first-served basis. Established in 1924, the Northland was recently acquired by Marriott and was restored and reopened in 2019 after a long closure. We highly recommend booking your room here! </li>
                            <li><a href='https://hamptoninn3.hilton.com/en/hotels/wisconsin/hampton-inn-green-bay-downtown-GRBHXHX/index.html?SEO_id=GMB-HP-GRBHXHX'>Hampton Inn Green Bay Downtown</a>: Attached to the west side of the KI Convention Center, this hotel sits along the Fox River and is walking distance from Hotel Northland.</li>
                            <li><a href='https://www.hyatt.com/en-US/hotel/wisconsin/hyatt-regency-green-bay/grbrg?src=corp_lclb_gmb_seo_nam_grbrg'>Hyatt Regency Green Bay</a>: Also attached to the east side of the KI Convention Center, this hotel also sits walking distance from Hotel Northland.</li>
                        </ul>
                    </Fade>
                </div>
            </div>
        </div>
    )
}