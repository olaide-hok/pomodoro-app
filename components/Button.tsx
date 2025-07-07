const Button = ({title, fn}: {title: string; fn: () => void}) => {
    return (
        <button
            className="clock-btn fs-16 text-white fw-700"
            onClick={fn}
            type="button">
            {title}
        </button>
    );
};

export default Button;
