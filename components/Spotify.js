import spotify from "../images/spotify.svg"

const Spotify = () => {
    return (
        <div className="links-container">
            <a href="https://open.spotify.com/artist/0AUAkp8jkyyeU5XZwXwPEo?si=oKyP4hrgTQe8Dk0rRlzLYQ&nd=1" target="_blank">
                <div className="social-bubble">
                    <img 
                    src={spotify}
                    />
                </div>
            </a>
        </div>
    )
}

export default Spotify