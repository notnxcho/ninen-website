import LiquidStash from '../../pages/Projects/LiquidStash/LiquidStash'
import Perodent from '../../pages/Projects/Perodent/Perodent'
import { useIsMobile } from '../../useIsMobile'
import './portfolioHomeSectionStyles.scss'

const PortfolioHomeSection = () => {
    const isMobile = useIsMobile()
    return (
        <div className="portfolio-section">
            <div className="hero" style={{minHeight: isMobile ? '100vh' : '80vh'}}>
                <LiquidStash readCaseStudy={true} container={true}/>
            </div>
            <div className="hero" style={{minHeight: isMobile ? '100vh' : '80vh', background: '#FCFCFC'}}>
                <Perodent readCaseStudy={true} container={true}/>
            </div>
        </div>
    )
}
export default PortfolioHomeSection