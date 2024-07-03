import { useIsMobile, useScrollToTop } from '../../../useIsMobile'
import LiquidLogo from '../../../assets/mockups/liquidStash/liquid logo.png'
import Waterfall from '../../../assets/mockups/liquidStash/waterfall.png'
import DistChart from '../../../assets/mockups/liquidStash/dist-chart.png'
import DistBannerText from '../../../assets/mockups/liquidStash/dist-banner-text.png'
import DistBannerCta from '../../../assets/mockups/liquidStash/dist-banner-cta.png'
import './LiquidStashStyles.scss'
import ArrowIcon from '../../../assets/icons/arrowIcon'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'


const LiquidStash = ({readCaseStudy = false, container = false}) => {
    const isMobile = useIsMobile()
    const navigate = useNavigate()
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-120px 0px'
    })
    useScrollToTop();
    return (
        <div className={`hero-sections ${container && 'container container-border'} ${isMobile && 'mobile-layout'}`}>
            <div className={`hero-content project-hero ${inView ? 'in-view' : 'hide-in-view'}`} ref={ref}>
                <div className="product-logo-label">
                    <img src={LiquidLogo} alt='liquid logo'/>
                    <div>Liquid<span style={{color: '#07B88F'}}>Stash</span></div>
                </div>
                <div className="hero-title sizing-override">
                    AI-Powered capital decisions for ultra-high volume Trust Funds
                    {/* Helping Ultra-high volume financial institutions take capital decisions through AI */}
                    <div className="horizontal-brand-line" style={{top: -12}}/>
                    
                    <div className="horizontal-brand-line" style={{bottom: -12}}/>
                </div>
                <div className="keywords">
                    <div className="horizontal-brand-line" style={{bottom: -12}}/>
                    <div className='chips-wrap'>
                        {['UX / UX', 'Machine Learning', 'Fintech', 'Prototype'].map((chip) => {
                            return (
                                <div className="chip">{chip}</div>
                            )
                        })}
                    </div>
                    { readCaseStudy && <div className="read-case" onClick={() => navigate('/projects/LiquidStash')}>
                        Read case study
                        <ArrowIcon size={36} stroke='#000'/>
                    </div>}
                </div>
            </div>
            <div className={`hero-illustration liquid-case ${inView ? 'in-view' : 'hide-in-view'}`}>
                <img src={Waterfall} width="auto" className='waterfall' alt='waterfall distribution widget'/>
                <img src={DistChart} width="auto" className='dist-chart' alt='waterfall distribution widget'/>
                <div className="dist-banner-container">
                    <img src={DistBannerText} className='dist-banner-text'/>
                    <img src={DistBannerCta} className='dist-banner-cta'/>
                    <div className="shade"/>
                </div>
            </div>
        </div>
    )
}

export default LiquidStash