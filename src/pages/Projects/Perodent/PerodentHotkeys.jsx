import NavigationBox from '../../../assets/mockups/perodent/keyboard-navigation-box.png'
import ChartingBox from '../../../assets/mockups/perodent/keyboard-charting-box.png'
import CollapsedBox from '../../../assets/mockups/perodent/keyboard-collapsed-box.png'
import CorrectionsBox from '../../../assets/mockups/perodent/keyboard-corrections-box.png'
import './PerodentStyles.scss'
import { useState } from 'react'
import CloseIcon from '../../../assets/icons/closeIcon'
import GridAddIcon from '../../../assets/icons/gridAddIcon'

const PerodentHotkeys = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div className="hotkeys-container">
            <div className="top-row">
                <div className={`kb-box ${!collapsed ? 'show' : 'hide'}`}>
                    <img src={ChartingBox} height={86}/>
                </div>
            </div>
            <div className="bot-row">
                <div className={`kb-box ${!collapsed ? 'show' : 'hide'}`}>
                    <img src={NavigationBox} height={86}/>
                </div>
                <div className={`kb-box ${!collapsed ? 'show' : 'hide'}`}>
                    <img src={CorrectionsBox} height={86}/>
                </div>
                <div className={`kb-box ${collapsed ? 'show' : 'hide'}`}>
                    <img src={CollapsedBox} height={50}/>
                </div>
                <div className={`kb-collapse ${collapsed && 'animate-pulse'}`} onClick={() => setCollapsed(!collapsed)}>
                    <div className='icon-box'>
                        {collapsed ? <GridAddIcon stroke={'#283044'}/> : <CloseIcon stroke={'#283044'}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerodentHotkeys