import { useInView } from 'react-intersection-observer'
import './containerBannerWrapStyles.scss'

const ContainerBannerWrap = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-80px 0px'
    })
    return (
        <div className="contained-banner-wrap container container-border">
            <div ref={ref} className={`contained-banner-box container-width ${inView ? 'in-view' : 'hide-in-view'}`}>
                <div className="label">We're the right fit</div>
                <div className="title">Get started today</div>
                <div className="subtitle">Whether you want to start building a product or grow your team, Ninen offers Design and Development services tailored to your needs.</div>
            </div>
        </div>
    )
}

export default ContainerBannerWrap