import { useIsMobile, useScrollToTop } from '../../../useIsMobile'
import PerodentLogo from '../../../assets/mockups/perodent/perodent-logo.png'
import DentalChart from '../../../assets/mockups/perodent/dental-chart.png'
import PieceForm from '../../../assets/mockups/perodent/Piece-form.png'
import './PerodentStyles.scss'
import ArrowIcon from '../../../assets/icons/arrowIcon'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'


const PerodentHero = ({readCaseStudy = false, container = false}) => {
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
                    <img src={PerodentLogo} alt='Perodent logo' style={{width: 44, height: 44}}/>
                    <div>Perodent</div>
                </div>
                <div className="hero-title sizing-override">
                    Streamlining periodontal charts. Finish twice as fast and for half the price.
                    <div className="horizontal-brand-line" style={{top: -12}}/>
                    
                    <div className="horizontal-brand-line" style={{bottom: -12}}/>
                </div>
                <div className="keywords">
                    <div className="horizontal-brand-line" style={{bottom: -12}}/>
                    <div className='chips-wrap'>
                        {['UX / UX', 'Interactive', 'Healthcare', 'Prototype', 'Benchmark'].map((chip) => {
                            return (
                                <div className="chip">{chip}</div>
                            )
                        })}
                    </div>
                    { readCaseStudy && <div className="read-case" onClick={() => navigate('/projects/Perodent')}>
                        Read case study
                        <ArrowIcon size={36} stroke='#000'/>
                    </div>}
                </div>
            </div>
            <div className={`hero-illustration dental-case ${inView ? 'in-view' : 'hide-in-view'}`}>
                <img src={DentalChart} width="auto" className='dental-chart'/>
                <img src={PieceForm} width="auto" className='piece-form'/>
            </div>
        </div>
    )
}

export default PerodentHero