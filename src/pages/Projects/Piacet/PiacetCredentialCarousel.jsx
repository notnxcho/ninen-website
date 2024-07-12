import './PiacetStyles.scss'

const credentialTypes = {
    specialty: {label: 'Specialty', color: '#418DFF'},
    educational: {label: 'Educational', color: '#F6B027'},
    clinical: {label: 'Clinical', color: '#00BC90'},
    lifeSup: {label: 'Life Support', color: '#CC0018'},
    covid: {label: 'Covid', color: '#00B6CD'},
    other: {label: 'Other', color: '#9870F1'}
}

const PiacetCredentialsCarousel = () => {
    const credentials = [
        {
            title: 'Cardiology Technician',
            category: credentialTypes.specialty,
            expiry: '6 Jun 2027',
            created: '28 Feb 2023',
            id: '0785761235-56'
        },
    ]

    return (
        <div className="credentials-wrapper">
            {credentials.map((cred, index) => {
                return (
                    <div className="credential-container">
                        <div className="header">
                            <div className="wrap">
                                <div className={`title hide-shimmer`}>
                                    {cred.title}
                                    <div className="shimmer-box" style={{transitionDelay: '4s'}}/>
                                </div>
                                <div className={`category hide-shimmer`} style={{color: cred.category.color}}>
                                    {cred.category.label}
                                    <div className="shimmer-box" style={{transitionDelay: '4.4s'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="item">
                                <div className={`label hide-shimmer`}>
                                    Created
                                    <div className="shimmer-box" style={{transitionDelay: '4.8s'}}/>
                                </div>
                                <div className={`value hide-shimmer`}>
                                    {cred.created}
                                    <div className="shimmer-box" style={{transitionDelay: '5.4s'}}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className={`label hide-shimmer`}>
                                    Expiry
                                    <div className="shimmer-box" style={{transitionDelay: '5.8s'}}/>
                                </div>
                                <div className={`value hide-shimmer`}>
                                    {cred.expiry}
                                    <div className="shimmer-box" style={{transitionDelay: '6.4s'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="item">
                                <div className={`label hide-shimmer`}>
                                    ID Number
                                    <div className="shimmer-box" style={{transitionDelay: '7s'}}/>
                                </div>
                                <div className={`value hide-shimmer`}>
                                    {cred.id}
                                    <div className="shimmer-box" style={{transitionDelay: '7.4s'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PiacetCredentialsCarousel