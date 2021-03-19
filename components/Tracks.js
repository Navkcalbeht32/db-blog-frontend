import Heading from '../components/Heading'
import Filled from '../images/featured-filled.svg'
import Outlined from '../images/featured-outlined.svg'
import Fade from 'react-reveal/Fade';

const Tracks = () => {
    return (
        <>
        <div className="section">
            <Heading imageF={Filled} imageO={Outlined} />
        </div>
        <div className="tracks">
            <div className="tracks-wrapper">
                <Fade bottom delay={500} duration={1000}>
                    <div className="track">
                    <iframe src="https://open.spotify.com/embed/track/6360zqBWM2p2cxWqPigK8V" width="300" height="380" frameborder="0" allowtransparency="true" className="track-card" allow="encrypted-media"></iframe>
                    </div>
                </Fade>
                <Fade bottom delay={600} duration={1000}>
                    <div className="track">
                        <iframe src="https://open.spotify.com/embed/track/0tQMQIlP6AF3o0810Ei4sx" width="300" height="380" frameborder="0" allowtransparency="true" className="track-card" allow="encrypted-media"></iframe>
                    </div>
                </Fade>
               
                
            </div>
            
        </div>
        </>
    )
    
}

export default Tracks