import './Story.scss'
import React from 'react'
import image from '../../images/story1.jpg'
import Fade from 'react-reveal/Fade';

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
                        <p>Lorem ipsum dolor amet gochujang flannel selfies beard distillery meditation drinking vinegar. Intelligentsia man braid mumblecore activated charcoal portland ethical, bespoke blue bottle quinoa banh mi narwhal cray. Coloring book aesthetic semiotics, forage umami kogi truffaut biodiesel tacos blog next level XOXO hashtag. Art party kogi try-hard 90's authentic. Actually yuccie aesthetic blue bottle forage pabst occupy tattooed poke glossier echo park.</p>
                        <p>Selvage actually bicycle rights vexillologist. Four loko green juice dreamcatcher crucifix +1, tbh offal. Kitsch butcher meh occupy taxidermy crucifix aesthetic tumeric cornhole flexitarian. Ennui hella tumeric flannel, tumblr pok pok glossier retro polaroid. Letterpress tumeric paleo lumbersexual XOXO. Meh trust fund vice fashion axe occupy.</p>
                        <p>Shoreditch cronut selfies, pok pok hot chicken four dollar toast vinyl kombucha pop-up. Bicycle rights etsy retro, PBR&B venmo cred tacos kombucha post-ironic typewriter distillery iceland. Cloud bread keffiyeh keytar small batch, YOLO prism next level leggings iPhone. Ugh lyft asymmetrical freegan franzen godard coloring book man bun 3 wolf moon post-ironic man braid 90's. Microdosing humblebrag chillwave adaptogen fixie schlitz ennui marfa. Fashion axe pitchfork beard butcher, deep v coloring book freegan microdosing bitters raw denim literally etsy fam.</p>
                        <p>Pork belly viral you probably haven't heard of them organic, taiyaki DIY af affogato banh mi. Cred next level tbh typewriter blue bottle man braid crucifix la croix narwhal organic, you probably haven't heard of them pug gluten-free pinterest pabst. IPhone viral asymmetrical, snackwave slow-carb bespoke bushwick. Venmo jean shorts try-hard shoreditch, poke vexillologist iceland bitters celiac.</p>
                        <p>Leggings succulents cardigan, sartorial taxidermy cloud bread jean shorts gluten-free knausgaard humblebrag pabst hella tousled hot chicken copper mug. Raw denim trust fund cloud bread tattooed enamel pin photo booth. Tousled stumptown neutra celiac helvetica freegan. Lomo fanny pack fingerstache semiotics flannel pug. Thundercats deep v tofu, four dollar toast mixtape bicycle rights 3 wolf moon bushwick paleo. Lomo heirloom sartorial mixtape af, celiac austin viral mustache bitters. Kombucha fingerstache tacos godard fashion axe iceland, man bun readymade synth authentic gastropub art party meditation pabst.</p>
                    </div>
                </Fade>
                <Fade>
                    <div className={`${cb}__image-wrapper`}>
                        <img className={`${cb}__image`} src={image} alt='alex-and-emily-by-ferris-wheel' />
                    </div>
                </Fade>
            </div>

        </div>
    )
}