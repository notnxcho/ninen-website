import CostBadge from '../../../assets/mockups/perodent/cost-badge.png'
import OnePersonBadge from '../../../assets/mockups/perodent/one-person-badge.png'
import SessionBadge from '../../../assets/mockups/perodent/session-badge.png'
import TimeBadge from '../../../assets/mockups/perodent/time-badge.png'
import './PerodentStyles.scss'

const PerodentBadges = () => {
    return (
        <div className="badges-wrapper">
            <div className="badge"><img src={TimeBadge}/></div>
            <div className="badge"><img src={SessionBadge}/></div>
            <div className="badge"><img src={OnePersonBadge}/></div>
            <div className="badge"><img src={CostBadge}/></div>
        </div>
    )
}

export default PerodentBadges