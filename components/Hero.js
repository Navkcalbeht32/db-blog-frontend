import heroImage from "../images/hero-image.png"
import Fade from 'react-reveal/Fade';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                <div>
                    <div className="hero-text">
                        <h1 className="name"><span>Danny </span><span className="lastname">Balentine</span></h1>
                        <Fade bottom delay={500} duration={1000}>
                        <h1 className="subtitle">Producer</h1>
                        </Fade>
                        
                    </div>
                    
                    <img className="hero-image" src={heroImage} />
                </div>
                
            </div>
        </div>
    )
}

export default Hero