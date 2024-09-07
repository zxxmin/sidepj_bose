const InfoBose = ({title, text, cls}) => {

    return (
        <div>
            <div className={cls}><span>아이콘</span></div>
            <strong>{title}</strong>
            <p>{text}</p>
        </div>
    )
}

export default InfoBose;