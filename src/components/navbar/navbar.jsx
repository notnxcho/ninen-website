import './navbar.scss'
import Logo from '../../assets/notnxcho-logo.png'
import { useState } from 'react'
import {getStartedClick, scrollToSection, useIsMobile} from '../../customHooks.jsx'
import HambIcon from '../../assets/icons/hambIcon.jsx'
import CloseIcon from '../../assets/icons/closeIcon.jsx'
import { useNavigate } from 'react-router-dom'

const Navbar = ({displayLink = true}) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const isMobile = useIsMobile()
    const navigate = useNavigate()

    return (
        <div className={`${mobileMenu && 'open-menu-styles' }`}>
            {/* <div className={`navbar-container ${mobileMenu && 'container-width open-menu-nav-container'}`}> */}
            <div className={mobileMenu ? 'container-width open-menu-nav-container' : 'navbar-container'}>
                <img src={Logo} height={isMobile ? 58 : 72} alt='ninen logo' onClick={() => navigate('/')} style={{cursor: 'pointer', pointerEvents: 'all'}}/>
                { !!displayLink && (isMobile ? 
                    <div className="navbar-menu-icon" onClick={() => setMobileMenu(!mobileMenu)}>
                        {mobileMenu ? <CloseIcon/> : <HambIcon/>}
                    </div>
                    :
                    <div className="navbar-links">
                        <div className="link" onClick={() => scrollToSection('why-us-target')}>Why me</div>
                        <div className="link" onClick={() => scrollToSection('our-work-target')}>My work</div>
                        <div className="link" onClick={getStartedClick}>Contact</div>
                    </div>)
                }
            </div>
            { !!displayLink &&
                <div className={`menu-overlay ${!mobileMenu && 'menu-overlay-hidden'}`}>
                    <div className='mobile-menu-container'>
                        <div className="menu-option" onClick={() => {setMobileMenu(false); scrollToSection('why-us-target')}}><div className='container-width'>Why me</div></div>
                        <div className="menu-option" onClick={() => {setMobileMenu(false); scrollToSection('our-work-target')}}><div className='container-width'>My work</div></div>
                        <div className="menu-option" onClick={() => {setMobileMenu(false); getStartedClick()}}><div className='container-width'>Contact</div></div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar