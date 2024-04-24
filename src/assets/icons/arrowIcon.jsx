const ArrowIcon = ({
    stroke = '#ffffff',
    size = 24,
    direction = 'right'
}) => {
    const parsePropsToStyle = () => {
        switch (direction) {
            case 'right':
                return ({transform: 'rotateZ(0deg)', width: size, height: 24})
            case 'bottom':
                return ({transform: 'rotateZ(90deg)', width: size, height: 24})
            case 'left':
                return ({transform: 'rotateZ(180deg)', width: size, height: 24})
            case 'top':
                return ({transform: 'rotateZ(270deg)', width: size, height: 24})
            default:
                return (null)
        }
    }
    return (
        <div style={parsePropsToStyle()}>
            <svg width={size} height="24" viewBox={`0 0 ${size} 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
                {size === 24 && <path d="M6 12.5H18.5M18.5 12.5L12.5 6.5M18.5 12.5L12.5 18.5" stroke={stroke} stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>}
                {size === 36 && <path d="M6 12H30.5M30.5 12L24.5 6M30.5 12L24.5 18" stroke={stroke} stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>}
            </svg>
        </div>
    )
}
export default ArrowIcon