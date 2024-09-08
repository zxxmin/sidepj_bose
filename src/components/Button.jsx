const Button = ({ onClick, text, type }) => {
    return <button type='button' onClick={onClick} className={`Button ${type}`}>
        {text}
    </button>
}

export default Button;