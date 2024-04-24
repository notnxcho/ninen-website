import ArrowIcon from '../../assets/icons/arrowIcon';
import StacksIcon from '../../assets/icons/stacksIcon';
import EarthIcon from '../../assets/icons/earthIcon';
import CircledCurrencyIcon from '../../assets/icons/circledCurrencyIcon';
import CtaBannerSection from '../../components/ctaBannerSection/ctaBannerSection';
import Navbar from '../../components/navbar/navbar'
import PerkCards from '../../components/perkCards/perkCards';
import TextCarousel from '../../components/textCarousel/textCarousel';
import ThreeDots from '../../components/threeDots/threeDots'
import './HomeStyles.scss'

import Spline from '@splinetool/react-spline';


const Home = () => {
    return (
        <div className='home'>
            <div className="hero-wrap">
                <div className="spline-scene-wrapper">
                    <Spline scene="https://prod.spline.design/NiwX6yrUSd5DeChT/scene.splinecode" />
                </div>
                <div className="hero container">
                    <Navbar/>
                    <div className="hero-content">
                        <ThreeDots/>
                        <div className="hero-title">
                            Creative and superior software studio
                            <div className="horizontal-brand-line" style={{top: -12}}/>
                            <div className="horizontal-brand-line" style={{bottom: -12}}/>
                        </div>
                        <div className="hero-subtitle">
                            We can design, build and help you scale your apps.
                            <div className="horizontal-brand-line" style={{bottom: -12}}/>
                        </div>
                        <div className="cta-wrap">
                            <div className="horizontal-brand-line" style={{bottom: -12}}/>
                            <div className="button primary">
                                Get started 
                                <ArrowIcon/>
                            </div>
                            <div className="button secondary">See our work</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-section">
                <div className="info-section-content container">
                    <div className="info-section-title-wrap">
                        <div className="title-block">We're the right</div>
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
                </div>
            </div>
            <CtaBannerSection 
                displayText={'Are you ready for your next smart move?'}
                ctaText={'Work with us'}
            />
            <div className="info-section">
                <div className="info-section-content container">
                    <div className="info-section-title-wrap">
                        <div className="title-block">It’s easy to work with us</div>
                        <div className="horizontal-brand-line" style={{bottom: -12}}/>
                    </div>
                    <PerkCards items={[
                        {title: 'Hire flexible development volume', subtitle: "You can dial us up or down, based on your needs. Always making right-sized investments for the stage you're at.", icon: <StacksIcon/> },
                        {title: 'Aligned with your timezone', subtitle: "Based in Montevideo, Uruguay, our timezone allows us to work  with a small hour difference. -2 for EST and -4 for PST.", icon: <EarthIcon/> },
                        {title: 'Smart usage of your resources', subtitle: "We follow the Lean Startup framework to build products, reducing time to value and learning from real users.", icon: <CircledCurrencyIcon/> }
                    ]}/>
                </div>
            </div>
        </div>
    )
}

export default Home