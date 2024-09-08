const Button = ({ onClick, text, type, id }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={`Button ${type}`}
            id={id}
        >
            {text}
        </button>
    )
}

export default Button;