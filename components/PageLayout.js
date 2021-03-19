import Footer from "./Footer"
import MobileNav from "./MobileNav"
import Spotify from "./Spotify"


const PageLayout = ({className, children}) => {
    return (
        <>
        <Spotify />
        <div className={`page-layout ${className}`}>
            {children}
        </div>
        <MobileNav />
        </>
    )
}

export default PageLayout