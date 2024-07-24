import { useIsMobile, useScrollToTop } from '../../../customHooks'
import PiacetLogo from '../../../assets/mockups/piacet/piacet-logo.png'

import DistBannerText from '../../../assets/mockups/liquidStash/dist-banner-text.png'
import DistBannerCta from '../../../assets/mockups/liquidStash/dist-banner-cta.png'

import './PiacetStyles.scss'
import ArrowIcon from '../../../assets/icons/arrowIcon'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import PiacetCredentialsCarousel from './PiacetCredentialCarousel'


const PiacetHero = ({readCaseStudy = false, container = false}) => {
    const isMobile = useIsMobile()
    const navigate = useNavigate()
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-120px 0px'
    })
    useScrollToTop()
    return (
        <div className={`hero-sections ${container && 'container container-border'} ${isMobile && 'mobile-layout'}`}>
            <div className={`hero-content project-hero ${inView ? 'in-view' : 'hide-in-view'}`} ref={ref}>
                <div className="product-logo-label">
                    <img src={PiacetLogo} alt='Perodent logo' style={{width: 32, height: 32}}/>
                    <div style={{color: '#31AFE4'}}>PIACET</div>
                </div>
                <div className="hero-title sizing-override">
                    Manage and share professional credentials, never miss an expired credential again.
                    <div className="horizontal-brand-line" style={{top: -12}}/>
                    
                    <div className="horizontal-brand-line" style={{bottom: -12}}/>
                </div>
                <div className="keywords">
                    <div className="horizontal-brand-line" style={{bottom: -12}}/>
                    <div className='chips-wrap'>
                        {['UX / UX', 'Interactive', 'Healthcare', 'Prototype', 'Scalability'].map((chip) => {
                            return (
                                <div className="chip">{chip}</div>
                            )
                        })}
                    </div>
                    { readCaseStudy && <div className="read-case" onClick={() => navigate('/projects/piacet')}>
                        Read case study
                        <ArrowIcon size={36} stroke='#000'/>
                    </div>}
                </div>
            </div>
            <div className={`hero-illustration piacet-case ${inView ? 'in-view' : 'hide-in-view'}`}>
                <PiacetCredentialsCarousel/>
            </div>
        </div>
    )
}

export default PiacetHero