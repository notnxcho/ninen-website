import ArrowIcon from '../../assets/icons/arrowIcon'
import { getStartedClick } from '../../customHooks'
import './ctaBannerSectionStyles.scss'

const CtaBannerSection = ({displayText, ctaText}) => {
    return (
        <div className='banner-section-box'>
            <div className='banner-section-container container-width container-border'>
                <div className='banner-text'>{displayText}</div>
                <div className='banner-cta' onClick={getStartedClick}>
                    {ctaText}
                    <ArrowIcon size={36} stroke='#000'/>
                </div>
            </div>
        </div>
    )
}

export default CtaBannerSection