import NavItem from "./NavItem"
import Home from '../images/home.svg'
import Projects from '../images/projects.svg'
import Links from '../images/link.svg'
import Link from 'next/link'
import React, { useState } from 'react'
import PopUp from "./PopUp"


const MobileNav = () => {
    const [open, setOpen] = useState(false);



    return (
        <div className="mobile-nav">
            <div className="mobile-nav-wrapper">
                <Link href='/' as={`/`}>
                    <a>
                        <NavItem selected title="Home" icon={Home} />
                    </a>
                </Link>
                <Link href='/projects' as={`/projects`}>
                    <a>
                        <NavItem title="Projects" icon={Projects} />
                    </a>
                    
                </Link>
                <a className="contact-btn" onClick={() => setOpen(!open)} >
                    <NavItem title="Links" icon={Links} />

                    {open && <PopUp />}
                </a>
                
            </div>
        </div>
    )
}

export default MobileNav