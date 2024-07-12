import LiquidStashHero from '../../pages/Projects/LiquidStash/LiquidStashHero'
import PerodentHero from '../../pages/Projects/Perodent/PerodentHero'
import PiacetHero from '../../pages/Projects/Piacet/PiacetHero'
import { useIsMobile } from '../../customHooks'
import './portfolioHomeSectionStyles.scss'

const PortfolioHomeSection = () => {
    const isMobile = useIsMobile()
    return (
        <div className="portfolio-section" id='our-work-target'>
            <div className="hero" style={{minHeight: isMobile ? '100vh' : '80vh'}}>
                <PiacetHero readCaseStudy={true} container={true}/>
            </div>
            <div className="hero" style={{minHeight: isMobile ? '100vh' : '80vh', background: '#FCFCFC'}}>
                <PerodentHero readCaseStudy={true} container={true}/>
            </div>
            <div className="hero" style={{minHeight: isMobile ? '100vh' : '80vh'}}>
                <LiquidStashHero readCaseStudy={true} container={true}/>
            </div>
        </div>
    )
}
export default PortfolioHomeSection