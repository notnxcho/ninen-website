import './ctaBannerSectionStyles.scss'

const CtaBannerSection = ({displayText, ctaText}) => {
    return (
        <div className='banner-section-container container'>
            <div className='banner-text'>{displayText}</div>
            <div className='banner-cta'>{ctaText}</div>
        </div>
    )
}

export default CtaBannerSection