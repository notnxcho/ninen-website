import LiquidStashHero from '../../pages/Projects/LiquidStash/LiquidStashHero'
import PerodentHero from '../../pages/Projects/Perodent/PerodentHero'
import PiacetHero from '../../pages/Projects/Piacet/PiacetHero'
import { useIsMobile } from '../../customHooks'
import './portfolioHomeSectionStyles.scss'

const PortfolioHomeSection = () => {
    const isMobile = useIsMobile()
    return (
        <div className="portfolio-section" id='our-work-target'>
            <div className="intro-banner">
                <div className="intro-banner-content container container-border">
                    <div className="title">How I've helped others</div>
                    <div className="subtitle">And how can I help you succeed</div>
                </div>
            </div>
            <div className="hero" style={{minHeight: isMobile ? '100vh' : '86vh'}}>
                <LiquidStashHero readCaseStudy={true} container={true}/>
            </div>
            <div className="hero" style={{minHeight: isMobile ? '100vh' : '86vh', background: '#FCFCFC'}}>
                <PerodentHero readCaseStudy={true} container={true}/>
            </div>
            <div className="hero" style={{minHeight: isMobile ? '100vh' : '86vh'}}>
                <PiacetHero readCaseStudy={true} container={true}/>
            </div>
        </div>
    )
}
export default PortfolioHomeSection