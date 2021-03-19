import Image from 'next/image'

const HeroImages = () => {
    return (
        <div className="hero-images">
            <Image
            src="/public/hero-image.png"
            alt="Picture of the author"
            width={500}
            height={500}
            />
        </div>
    )
}

export default HeroImages