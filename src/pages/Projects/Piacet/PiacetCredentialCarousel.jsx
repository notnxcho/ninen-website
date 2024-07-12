import { useEffect, useState } from 'react'
import './PiacetStyles.scss'

const credentialTypes = {
    specialty: {label: 'Specialty', color: '#418DFF'},
    educational: {label: 'Educational', color: '#F6B027'},
    clinical: {label: 'Clinical', color: '#00BC90'},
    lifeSup: {label: 'Life Support', color: '#CC0018'},
    covid: {label: 'Covid', color: '#00B6CD'},
    other: {label: 'Other', color: '#9870F1'}
}
const initialCreds = [
    {
        title: 'Cardiology Technician',
        category: credentialTypes.specialty,
        expiry: '6 Jun 2027',
        created: '28 Feb 2023',
        id: '0785761235-56'
    },
    {
        title: 'Cardiology Technician 2',
        category: credentialTypes.covid,
        expiry: '6 Jun 2027',
        created: '28 Feb 2023',
        id: '9167494-81'
    },
    {
        title: 'Cardiology Technician 3',
        category: credentialTypes.educational,
        expiry: '6 Jun 2027',
        created: '28 Feb 2023',
        id: '8949421-11'
    },
    {
        title: 'Cardiology Technician 4',
        category: credentialTypes.other,
        expiry: '6 Jun 2027',
        created: '28 Feb 2023',
        id: '00173461-92'
    },
    {
        title: 'Cardiology Technician 5',
        category: credentialTypes.clinical,
        expiry: '6 Jun 2027',
        created: '28 Feb 2023',
        id: '7910281-04'
    },
    {
        title: 'Cardiology Technician 6',
        category: credentialTypes.clinical,
        expiry: '6 Jun 2027',
        created: '28 Feb 2023',
        id: '99472166-39'
    },
]

const PiacetCredentialsCarousel = () => {
    const [credentials, setCredentials] = useState(initialCreds)

    useEffect(() => {
        const interval = setInterval(() => {
            let newCreds = [...credentials]
            const lastCred = newCreds.pop()
            newCreds.unshift(lastCred)
            setCredentials(newCreds)
          }, 5500)
      
          return () => clearInterval(interval)
    }, [credentials])

    return (
        <div className="credentials-wrapper">
            {credentials.map((cred, index) => {
                return (
                    <div key={index + cred.id} className="credential-container" style={{ top: `${index * 80}px`, zIndex: 100 - index, transform: `scale(${1 - index/60})`}}>
                        <div className="header">
                            <div className="wrap">
                                <div className={`title hide-shimmer`}>
                                    {cred.title}
                                    <div className="shimmer-box" style={{animationDelay: '1.0s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                                <div className={`category hide-shimmer`} style={{color: cred.category.color}}>
                                    {cred.category.label}
                                    <div className="shimmer-box" style={{animationDelay: '1.4s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="item">
                                <div className={`label hide-shimmer`}>
                                    Created
                                    <div className="shimmer-box" style={{animationDelay: '1.8s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                                <div className={`value hide-shimmer`}>
                                    {cred.created}
                                    <div className="shimmer-box" style={{animationDelay: '2.4s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className={`label hide-shimmer`}>
                                    Expiry
                                    <div className="shimmer-box" style={{animationDelay: '2.8s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                                <div className={`value hide-shimmer`}>
                                    {cred.expiry}
                                    <div className="shimmer-box" style={{animationDelay: '3.4s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="item">
                                <div className={`label hide-shimmer`}>
                                    ID Number
                                    <div className="shimmer-box" style={{animationDelay: '4.0s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                                <div className={`value hide-shimmer`}>
                                    {cred.id}
                                    <div className="shimmer-box" style={{animationDelay: '4.4s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
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