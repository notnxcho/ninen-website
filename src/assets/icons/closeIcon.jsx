const CloseIcon = ({stroke = '#000'}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.51465" y="19.0711" width="22" height="2" rx="1" transform="rotate(-45 3.51465 19.0711)" fill={stroke}/>
            <rect x="4.92896" y="3.51471" width="22" height="2" rx="1" transform="rotate(45 4.92896 3.51471)" fill={stroke}/>
        </svg>

    )
}
export default CloseIcon