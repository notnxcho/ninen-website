import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/notnxcho-logo-dark.png'
import {useIsMobile} from '../../customHooks.jsx'
import './footerStyles.scss'

const Footer = () => {
    const navigate = useNavigate()
    const isMobile = useIsMobile()
    const content = [
        {label: 'Useful links', items: 
            [
                {text: 'Contact', link: 'https://calendar.app.google/3bx5aig5DgwJhSWh6', external: true},
                {text: 'Dribbble', link: 'https://dribbble.com/notnxcho', external: true},
                {text: 'Linkedin', link: 'https://www.linkedin.com/in/nacho-lorenzo-434a6018b/', external: true},
            ]
        },
        {label: 'Projects', items: 
            [
                {text: 'Piacet', link: '/projects/Piacet', external: false},
                {text: 'Perodent', link: '/projects/Perodent', external: false},
                {text: 'LiquidStash', link: '/projects/LiquidStash', external: false},
            ]
        },
    ]
    const handleLinkClick = (item) => {
        if (item.external) {
            window.open(item.link, '_blank', 'nooppener,noreferrer')
        } else {
            navigate(item.link)
        }
    }
    return (
        <div className='footer-box'>
            <div className="footer-container container-width container-border">
                <div className="footer-header">
                    <img src={Logo} height={isMobile ? 58 : 72} alt='ninen logo'/>
                </div>
                <div className="footer-content-wrap">
                    {content.map((col) => {
                        return (
                            <div className="content-column">
                                <div className="label">{col.label}</div>
                                {col.items.map((item) => {
                                    return (
                                        <div className="item" onClick={() => handleLinkClick(item)}>{item.text}</div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Footer