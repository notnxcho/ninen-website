import './navbar.scss'
import Logo from '../../assets/LOGO.png'
import { useState } from 'react'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    const isMobile = true
    return (
        <div className={`navbar-container ${mobileMenu && 'open-menu-styles' }`}>
            <img src={Logo} height={65} alt='ninen logo'/>
            { isMobile ? 
                <div className="navbar-menu-icon" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <div>close</div> : <div>| |</div>}
                </div>
                :
                <div className="navbar-links">
                    <div className="link">Why us</div>
                    <div className="link">Our work</div>
                    <div className="link">Contact</div>
                </div>
            }
            { mobileMenu && 
                <div className="menu-overlay">
                    <div className='mobile-menu-container'>
                        <div className="menu-option">Why us</div>
                        <div className="menu-option">Our work</div>
                        <div className="menu-option">Contact</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar