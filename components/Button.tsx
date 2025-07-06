const Button = ({title}: {title: string}) => {
    return (
        <button className="clock-btn fs-16 text-white fw-700" type="button">
            {title}
        </button>
    );
};

export default Button;
