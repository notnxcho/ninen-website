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
                                <div className="title">{cred.title}</div>
                                <div className="category" style={{color: cred.category.color}}>{cred.category.label}</div>
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="item">
                                <div className="label">Created</div>
                                <div className="value">{cred.created}</div>
                            </div>
                            <div className="item">
                                <div className="label">Expiry</div>
                                <div className="value">{cred.expiry}</div>
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="item">
                                <div className="label">ID Number</div>
                                <div className="value">{cred.id}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PiacetCredentialsCarousel