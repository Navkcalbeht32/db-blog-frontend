import Link from 'next/link'

const SocialLink = ({icon, link}) => {
    return (
            <a href={link} target="_blank">
                <img 
                className="social-link"
                src={icon}
                />
            </a>
    )
}

export default SocialLink