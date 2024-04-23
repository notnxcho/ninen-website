import './navbar.scss'
import Logo from '../../assets/LOGO.png'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src={Logo} height={65} alt='ninen logo'/>
            <div className="navbar-links">
                <div className="link">Why us</div>
                <div className="link">Our work</div>
                <div className="link">Contact</div>
            </div>
        </div>
    )
}

export default Navbar