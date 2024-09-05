import { scrollToSection } from '../../customHooks'
import './BentoGridStyles.scss'

const BentoGrid = () => {
    return (
        <div className="bento-grid">
            <div className="card large primary">
                <div className='title'>Versatile in Business Lifecycle Stages</div>
                <p>Proficient in working with diverse teams, whether it's designing from scratch, scaling, or enhancing established products. I have tailored methods for each stage of a business lifecycle, ensuring design solutions align with business goals.</p>
                <div className='cta' onClick={() => scrollToSection('our-work-target')}>Check out my work</div>
                <div className="bg-highlight"/>
                <div className="bg-highlight second-highlight"/>
            </div>
            <div className="card">
                <div className='title'>Design & Dev in one single package</div>
                <p>Vast experience in frontend development, ensuring effective communication with developers and seamless design handoff.</p>
            </div>
            <div className="card center-display">
                <div className='title'>5<span>+</span></div>
                <p>years of experience working in digital products</p>
            </div>
            <div className="card large secondary">
                <div className="info">
                    <div className='title'>Prototype-Driven Process</div>
                    <p>My work is prototype-heavy, offering time-effective validation of design solutions for both end-users and stakeholders.</p>
                    <p className="highlight">If an image is worth 1,000 words, prototypes are worth at least a few meetings.</p>
                </div>
                <div className="prototype-widget">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
            </div>
        </div>
    )
}

export default BentoGrid