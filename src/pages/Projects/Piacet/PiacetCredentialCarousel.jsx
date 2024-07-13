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
        title: 'Echocardiography Spec.',
        category: credentialTypes.specialty,
        expiry: '10 Dec 2023',
        created: '12 Mar 2022',
        id: '0785761235-56'
    },
    {
        title: 'COVID-19 Test',
        category: credentialTypes.covid,
        expiry: '15 Nov 2022',
        created: '5 Jul 2021',
        id: '9167494-81'
    },
    {
        title: 'Cardiology Expert',
        category: credentialTypes.educational,
        expiry: '22 Jan 2024',
        created: '18 Oct 2020',
        id: '8949421-11'
    },
    {
        title: 'PALS Certification',
        category: credentialTypes.other,
        expiry: '7 Mar 2022',
        created: '2 Feb 2019',
        id: '80173461-92'
    },
    {
        title: 'Life Support Provider',
        category: credentialTypes.lifeSup,
        expiry: '30 Jul 2021',
        created: '25 May 2018',
        id: '7910281-04'
    },
    {
        title: 'Pediatric Nursing',
        category: credentialTypes.clinical,
        expiry: '18 Sep 2020',
        created: '31 Aug 2017',
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
                    <div 
                        key={index + cred.id} 
                        className="credential-container" 
                        style={{ 
                            top: `${(index * 60 - (index**2)*3)}px`, 
                            zIndex: 100 - index,
                            transform: `scale(${1 - index/30})`,
                            // filter: `blur(${index/3}px)`,
                        }}
                    >
                        <div className="header">
                            <div className="wrap">
                                <div className={`title`}>
                                    {cred.title}
                                    <div className={`shimmer-box ${index && 'remain-hidden'}`} style={{animationDelay: '1.0s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                                <div className={`category`} style={{color: cred.category.color}}>
                                    {cred.category.label}
                                    <div className={`shimmer-box ${index && 'remain-hidden'}`} style={{animationDelay: '1.4s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="item">
                                <div className={`label`}>
                                    Created
                                    <div className={`shimmer-box ${index && 'remain-hidden'}`} style={{animationDelay: '1.8s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                                <div className={`value`}>
                                    {cred.created}
                                    <div className={`shimmer-box ${index && 'remain-hidden'}`} style={{animationDelay: '2.4s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className={`label`}>
                                    Expiry
                                    <div className={`shimmer-box ${index && 'remain-hidden'}`} style={{animationDelay: '2.8s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                                <div className={`value`}>
                                    {cred.expiry}
                                    <div className={`shimmer-box ${index && 'remain-hidden'}`} style={{animationDelay: '3.4s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="item">
                                <div className={`label`}>
                                    ID Number
                                    <div className={`shimmer-box ${index && 'remain-hidden'}`} style={{animationDelay: '4.0s'}}>
                                        <div className="shimmer-element"/>
                                    </div>
                                </div>
                                <div className={`value`}>
                                    {cred.id}
                                    <div className={`shimmer-box ${index && 'remain-hidden'}`} style={{animationDelay: '4.4s'}}>
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