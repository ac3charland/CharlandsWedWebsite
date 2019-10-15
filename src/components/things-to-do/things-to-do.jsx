import './things-to-do.scss'
import React from 'react'
import Fade from 'react-reveal/Fade'
import {things0} from '../../utils/constants'

const cb = 'things-to-do'

export default function ThingsToDo(props) {
    return (
        <div id='things' className={cb}>
            <Fade bottom>
                <h2>Things to Do</h2>
            </Fade>
            <div className={`${cb}__flex`}>
                <div className={`${cb}__text`}>
                    <Fade bottom cascade>
                        <ul className={`${cb}__list`}>
                            <li><a href='https://www.packers.com/lambeau-field/'>Lambeau Field</a>: Located in Ashwaubenon, the newly renovated Stadium District has lots to offer. Hinterland Brewery, Lodge Kohler, the Heritage Trail, the Packer Pro Shop, and Hall of Fame, is just a short list of the many things to see, all within walking distance of each other. If you’re looking for a tour, visit the <a href='https://www.packers.com/lambeau-field/'>website</a> to make a reservation.</li>
                            <li><a href='https://greenbaywi.gov/445/Bay-Beach'>Bay Beach Amusement Park</a>: Positioned at the mouth of Green Bay where the Fox River and Bay meet, this place is as picturesque as it is family friendly. This is also a fantastic place if you’re looking for fun on a budget - there is no admission fee, parking is free, and tickets for the rides are 25 cents apiece. All rides are between 2 and 4 tickets per rider, and there are rides appropriate for all ages.</li>
                            <li><a href='http://www.baybeachwildlife.com/'>Bay Beach Wildlife Sanctuary</a> is located walking distance form Bay Beach Amusement Park. It’s completely free and provides miles of walking trails and educational nature centers that are completely free! At the main building, you can purchase bags of corn for $1.00 each and feed the ducks and geese that call this place home.</li>
                            <li><a href='https://nationalrrmuseum.org/'>The National Railroad Museum</a>: Located along the Fox River on the West Side of town, the grounds are filled exhibits and old trains that can easily be explored for hours. There’s a discovery depot for children, and regular train rides are offered during the summer and fall months. Ticket prices range from Free to $10. Open all year round to all ages.</li>
                            <li><a href='https://heritagehillgb.org/'>Heritage Hill State Park</a>: A 56-acre living history museum with historical reenactors that will guide you through the various landmarks of the park. Ticket prices range from $8.00-$10.00, and the park is open June 4th - September 1st.</li>
                        </ul>
                    </Fade>
                </div>
                <Fade>
                    <div>
                        <div className={`${cb}__image-wrapper`}>
                            <img className={`${cb}__image`} src={things0} alt='' />
                        </div>
                        <div className={`${cb}__image-caption`}>
                            <p>Lambeau Field</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}