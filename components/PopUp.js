import SocialLink from '../components/SocialLink'
import LinkedIn from '../images/linkedin.svg'
import Instagram from '../images/instagram.svg'
import Email from '../images/email.svg'

const PopUp = () => {
    return (
        <div className="popup">
            <div className="popup-wrapper">
                <SocialLink icon={LinkedIn} link="" />
                <SocialLink icon={Instagram} link="https://www.instagram.com/danbdanb_music/" />
                <SocialLink icon={Email} link="" />
            </div>
        </div>
    )
}

export default PopUp