import Heading from '../components/Heading'
import Filled from '../images/work-filled.svg'
import Outlined from '../images/work-outlined.svg'
import Star from '../images/star.svg'
import Danny from '../images/danny-guitar.png'
import Fade from 'react-reveal/Fade';
import Soundbetter from '../images/soundbetter.png'

const Work = () => {
    return (
        <div>
            <div className="section">
                <Heading imageF={Filled} imageO={Outlined} />
            </div>
            <div>
                <Fade delay={200} duration={1800}>
                    <div className="work-card">
                        <div className="work-card-image-container">
                                <img src={Danny} />
                        </div>
                        <div className="work-card-quote">
                            <img className="work-card-title" src={Soundbetter} />
                            <h4 className="quote">Danny is a wonderful producer who helps make all of this possible and has a very creative musical ear; he has definitely made this whole process feel like a breeze" <br/></h4>
                            <em className="reviewer">- barbara teresa</em>
                            <div className="star-container">
                                <img src={Star} className="star" />
                                <img src={Star} className="star" />
                                <img src={Star} className="star" />
                                <img src={Star} className="star" />
                                <img src={Star} className="star" />
                            </div>
                            <a href="https://soundbetter.com/profiles/177160-danny-balentine" target="_blank">
                                <div className="btn-outline dark">Hire Me</div>
                            </a>
                            
                        </div>
                        
                    </div>
                </Fade>
            </div>
            
        </div>
    )
}

export default Work