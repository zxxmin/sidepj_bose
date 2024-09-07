const ImgLayout = ({type, imgSrc, title, text}) => {
    return (
        <div className="fnc-area">
            {type === 'Left'
                ? (
                    <>
                    <div className="l-area">
                        <img src={`${imgSrc}`} alt={`${title} 이미지`} />
                    </div>
                    <div className="r-area">
                        <strong>
                            {title}
                        </strong>
                        <p>
                            {text}
                        </p>
                    </div>
                    </>
                )
                : type === 'Right'
                    ? (
                        <>
                        <div className="r-area">
                            <strong>
                                {title}
                            </strong>
                            <p>
                                {text}
                            </p>
                        </div>
                        <div className="l-area">
                            <img src={`${imgSrc}`} alt={`${title} 이미지`} />
                        </div>
                        </>
                    ) : null
            }
            
        </div>
    )
}

export default ImgLayout;