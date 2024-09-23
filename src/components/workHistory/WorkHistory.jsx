import ArrowIcon from '../../assets/icons/arrowIcon'
import { getStartedClick } from '../../customHooks'
import './WorkHistoryStyles.scss'

const WorkHistory = () => {

    const items = [
        {
            size: {x: 4, y: 2},
            timeframe: 'Jun 2019 - Mar 2021',
            title: 'Frontend Dev & Design Freelancer',
            company: '10+ clients',
            description: []
        },
        {
            size: {x: 4, y: 5},
            timeframe: 'Sep 2021 - Nov 2023',
            title: 'Ssr. UX Engineer',
            company: 'CodigoDelSur',
            description: [
                { 
                    header: 'Real Estate focused Investment Fund manager', 
                    content: 'Visualization tools design and prototipying, complex workflows, scalable and responsive design system.'
                },
                { 
                    header: 'Collaborative Editing and Workflow Streaming Ecosystem', 
                    content: 'iPad app, iPhone app, TV app and several web frontends tailored for power users working in industry-leading companies'
                },
            
            ]
        },
        {
            size: {x: 4, y: 3},
            timeframe: 'Mar 2021 - Sep 2021',
            title: 'Frontend Developer',
            company: 'Vexels',
            description: [{
                header: null,
                content: 'Worked in the vexels.com website doing frontend tasks, mainly revolving around SEO, improving performance indicators, micro-interactions, animations and other CSS related tasks. Also worked on a powerful text graphic engine that runs fully on the browser visual API.'
            }]
        },
        {
            size: {x: 5, y: 4},
            timeframe: 'Oct 2023 - Aug 2024',
            title: 'Senior Product Designer',
            company: 'SquadUp Labs',
            description: [
                {
                    header: null, 
                    content: 'SquadUp is a Boston based boutique software factory where most of the clients start as small startups. This establishes the challenge to focus on finding and executing the 20% that will represent the 80% of the product, delivering value from the fist minute, and often, designing for product market-fit. Shaping founders ideas into prototypes and iterating over it while building consitent, scalable UI components.'
                }
            ]
        },
        {
            size: {x: 3, y: 4},
            timeframe: 'Available for hire',
            title: 'Want your company to be here?',
            company: 'You can be the next one',
            description: [],
            cta: 'Schedule a call',
        }

    ]
    return (
        <div className='work-history-gradient-box'>
            <div className="title-block">
                <div className="title">Where I've been</div>
                <div className="subtitle">and what I've done</div>
            </div>
            <div className='bento-grid container'>
                { items.map((item, index) => (  
                    <div className="card" key={index + item.company}  style={{gridColumn: `span ${item.size.x}`, gridRow: `span ${item.size.y}`}}>
                        <div className="timeframe">{item.timeframe}</div>
                        <div className="title">{item.title}</div>
                        <div className="company">{item.company}</div>
                        {!!item.description.length && <div className="description-box">
                            {item.description.map((description, index) => (
                                <div className="description-item" key={index}>
                                    {description.header && <div className="header">{description.header}</div>}
                                    <div className="content">{description.content}</div>
                                </div>
                            ))}
                        </div>}
                        {item.cta && <div className="cta" onClick={getStartedClick}>{item.cta}<ArrowIcon size={24} stroke='#fff'/></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkHistory
