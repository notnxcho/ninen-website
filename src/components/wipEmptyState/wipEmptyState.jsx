import './wipEmptyState.scss'
import WipEmptyStateIllustration from '../../assets/wip-empty-state.png'

const WipEmptyState = () => {
    return (
        <div className="wip-empty-state">
            <img src={WipEmptyStateIllustration} alt="Work in progress" width={340} />
            <div className="wip-empty-state-content">
                <div className="title">Work in progress</div>
                <div className="description">This case study is still under construction</div>
            </div>
        </div>
    )
}

export default WipEmptyState