import HeartIcon from '../../assets/icons/heartIcon'
import QuillIcon from '../../assets/icons/quillIcon'
import VennIcon from '../../assets/icons/vennIcon'
import './perkCardStyles.scss'

const PerkCards = ({
    items = [
        { title: 'Passionate for our craft', subtitle: 'Our holistic approach to software combines the inflections of art and science in our projects. Achieving impactful and beautiful solutions', icon: <HeartIcon/>},
        { title: 'Holistic & collaborative build strategy', subtitle: 'Interdisciplinary skills combined in the same product development workflow to achieve results that set products apart.', icon: <VennIcon/>},
        { title: 'Unmatched attention to detail', subtitle: 'Every pixel must be perfect, every decision has a purpose and nothing will be left to randomness.', icon: <QuillIcon/>},
    ]
}) => {

    return (
        <div className='cards-grid-container'>
            <div className="horizontal-brand-line" style={{top: -12}}/>
            <div className="horizontal-brand-line" style={{bottom: -12}}/>
            <div className="vertical-brand-line" style={{right: 74}}/>
            <div className="vertical-brand-line" style={{left: 74}}/>

            {items.map( item => (
                <div className="grid-item">
                    <div className="item-icon-box">{item.icon}</div>
                    <div className="item-title">{item.title}</div>
                    <div className="item-subtitle">{item.subtitle}</div>
                </div> 
            ))}
            
        </div>
    )
}
export default PerkCards