import './navbar.scss'
import Logo from '../../assets/LOGO.png'
import { useState } from 'react'
import useIsMobile from '../../useIsMobile.tsx'
import HambIcon from '../../assets/icons/hambIcon.jsx'
import CloseIcon from '../../assets/icons/closeIcon.jsx'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const isMobile = useIsMobile()

    return (
        <div className={`${mobileMenu && 'open-menu-styles' }`}>
            {/* <div className={`navbar-container ${mobileMenu && 'container-width open-menu-nav-container'}`}> */}
            <div className={mobileMenu ? 'container-width open-menu-nav-container' : 'navbar-container'}>
                <img src={Logo} height={isMobile ? 52 : 65} alt='ninen logo'/>
                { isMobile ? 
                    <div className="navbar-menu-icon" onClick={() => setMobileMenu(!mobileMenu)}>
                        {mobileMenu ? <CloseIcon/> : <HambIcon/>}
                    </div>
                    :
                    <div className="navbar-links">
                        <div className="link">Why us</div>
                        <div className="link">Our work</div>
                        <div className="link">Contact</div>
                    </div>
                }
            </div>
            <div className={`menu-overlay ${!mobileMenu && 'menu-overlay-hidden'}`}>
                <div className='mobile-menu-container'>
                    <div className="menu-option"><div className='container-width'>Why us</div></div>
                    <div className="menu-option"><div className='container-width'>Our Work</div></div>
                    <div className="menu-option"><div className='container-width'>Contact</div></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar