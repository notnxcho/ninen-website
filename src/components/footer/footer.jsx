import Logo from '../../assets/LOGO-dark.png'
import {useIsMobile} from '../../useIsMobile.jsx'
import './footerStyles.scss'

const Footer = () => {
    const isMobile = useIsMobile()
    const content = [
        {label: 'Useful links', items: 
            [
                {text: 'Contact', link: ''},
                {text: 'Dribbble', link: ''},
                {text: 'Linkedin', link: ''},
            ]
        },
        {label: 'Projects', items: 
            [
                {text: 'Dental', link: ''},
                {text: 'LiquidStash', link: ''},
            ]
        },
    ]
    return (
        <div className='footer-box'>
            <div className="footer-container container-width container-border">
                <div className="footer-header">
                    <img src={Logo} height={isMobile ? 52 : 65} alt='ninen logo'/>
                </div>
                <div className="footer-content-wrap">
                    {content.map((col) => {
                        return (
                            <div className="content-column">
                                <div className="label">{col.label}</div>
                                {col.items.map((item) => {
                                    return (
                                        <div className="item">{item.text}</div>
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