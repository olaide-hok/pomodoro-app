import {useState} from 'react';

interface FormInputInterface {
    label: string;
}
const TimeInput = ({label}: FormInputInterface) => {
    const [time, setTime] = useState(25);

    const handleDecrement = () => {
        console.log('decrement');
        if (time > 1) {
            setTime(time - 1);
        }
    };

    const handleIncrement = () => {
        console.log('increment');
        if (time < 60) {
            setTime(time + 1);
        }
    };

    return (
        <div className="clock-form flex">
            <label htmlFor="pomodoro" className="fs-12 fw-700">
                {label}
            </label>

            <div className="input-wrapper flex">
                <input
                    className="fs-14 fw-700"
                    type="text"
                    id="pomodoro"
                    name="pomodoro"
                    value={time}
                    onChange={(e) => setTime(parseInt(e.target.value))}
                />

                <div className="button-wrapper flex">
                    {/* Arrow up */}
                    <div className="arrow-up" onClick={handleIncrement}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="7">
                            <path
                                fill="none"
                                stroke="#1E213F"
                                strokeOpacity=".25"
                                strokeWidth="2"
                                d="M1 1l6 4 6-4"
                            />
                        </svg>
                    </div>

                    {/* Arrow down */}
                    <div className="arrow-down" onClick={handleDecrement}>
                        <svg
                            name="arrow"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="7">
                            <path
                                fill="none"
                                stroke="#1E213F"
                                strokeOpacity=".25"
                                strokeWidth="2"
                                d="M1 6l6-4 6 4"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeInput;
