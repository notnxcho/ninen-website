import ArrowIcon from '../../assets/icons/arrowIcon';
import StacksIcon from '../../assets/icons/stacksIcon';
import EarthIcon from '../../assets/icons/earthIcon';
import CircledCurrencyIcon from '../../assets/icons/circledCurrencyIcon';
import CtaBannerSection from '../../components/ctaBannerSection/ctaBannerSection';
import Navbar from '../../components/navbar/navbar'
import PerkCards from '../../components/perkCards/perkCards';
import TextCarousel from '../../components/textCarousel/textCarousel';
import ThreeDots from '../../components/threeDots/threeDots'
import PortfolioHomeSection from '../../components/portfolioHomeSection/portfolioHomeSection'
import './HomeStyles.scss'

import Spline from '@splinetool/react-spline';
import Footer from '../../components/footer/footer';
import { useInView } from 'react-intersection-observer';
import ContainerBannerWrap from '../../components/containerBannerWrap/containerBannerWrap';
import SplashLogo from '../../components/splashLogo/SplashLogo';
import { getStartedClick, scrollToSection } from '../../customHooks';
import Owner from '../../components/owner/owner';
import BentoGrid from '../../components/bentoGrid/BentoGrid';


const Home = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-40px 0px'
    })

    return (
        <div className='home'>
            <SplashLogo/>
            <div className="hero-wrap">
                <div className="spline-scene-wrapper">
                    {inView && <Spline scene="https://prod.spline.design/PhPbWm0UVZ5kXB0Y/scene.splinecode" />}
                </div>
                <div className="hero container container-border">
                    <Navbar/>
                    <div 
                        ref={ref}
                        className={`hero-content ${inView ? 'in-view' : 'hide-in-view'}`}
                    >
                        <ThreeDots/>
                        <div className="hero-title">
                            Creative developer and UX designer
                            <div className="horizontal-brand-line" style={{top: -12}}/>
                            <div className="horizontal-brand-line" style={{bottom: -12}}/>
                        </div>
                        <div className="hero-subtitle">
                            I can design, build and help you scale your apps. Solo or within your team.
                            <div className="horizontal-brand-line" style={{bottom: -12}}/>
                        </div>
                        <div className={`cta-wrap ${inView ? 'in-view' : 'hide-in-view'}`}>
                            <div className="horizontal-brand-line" style={{bottom: -12}}/>
                            <div className="button primary" onClick={getStartedClick}>
                                Get started 
                                <ArrowIcon/>
                            </div>
                            <div className="button secondary" onClick={() => scrollToSection('our-work-target')}>See my work</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-section" id='why-us-target'>
                <div className="info-section-content container container-border">
                    <div className="info-section-title-wrap">
                        <div className="title-block">I'm the right</div>
                        <TextCarousel 
                            texts={[
                                'technical partner',
                                'product designer',
                                'digital strategist',
                                'problem solver',
                            ]}
                        />
                        <div className="title-block">for your business</div>
                        <div className="horizontal-brand-line" style={{bottom: -12}}/>
                    </div>
                    <PerkCards/>
                    <BentoGrid/>
                </div>
            </div>
            <CtaBannerSection 
                displayText={'Are you ready for your next smart move?'}
                ctaText={'Work with me'}
            />
            <div className="info-section">
                <div className="info-section-content container container-border">
                    <div className="info-section-title-wrap">
                        <div className="title-block">I'm easy to work with</div>
                        <div className="horizontal-brand-line" style={{bottom: -12}}/>
                    </div>
                    <PerkCards items={[
                        {title: 'Hire flexible Dev & Design volume', subtitle: "You can dial me up or down, based on your needs. Always making right-sized investments for the stage you're at.", icon: <StacksIcon/> },
                        {title: 'Aligned with your timezone', subtitle: "Based in Montevideo, Uruguay, my timezone allows us to work within a small hour difference. -2 for EST and -4 for PST.", icon: <EarthIcon/> },
                        {title: 'Smart usage of your resources', subtitle: "I follow the Lean Startup framework to build products, reducing time to value and learning from real users.", icon: <CircledCurrencyIcon/> }
                    ]}/>
                </div>
            </div>
            <PortfolioHomeSection/>
            
            <ContainerBannerWrap/>
            <Footer/>
        </div>
    )
}

export default Home