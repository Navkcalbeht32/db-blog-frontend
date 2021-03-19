import Fade from 'react-reveal/Fade';

const Heading = ({imageF, imageO}) => {

    return (
        <div className="heading">
            <Fade delay={500}>
            <img 
            src={imageF}
            className="heading-solid"
            />
            </Fade>
            
            <Fade bottom duration={3000}>
                <img 
                src={imageO}
                className="heading-outlined"
                />
            </Fade>
            
        </div>
    )
}

export default Heading