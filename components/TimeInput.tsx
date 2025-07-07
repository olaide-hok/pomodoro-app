import {TimerFormState} from '@/hooks/useTimer';

interface FormInputInterface {
    timerForm: TimerFormState;
    handleTimerFormChange: (
        name: keyof TimerFormState,
        value: string | number
    ) => void;
}

type TimeField = 'pomodoro' | 'shortBreak' | 'longBreak';

const TimeInput = ({timerForm, handleTimerFormChange}: FormInputInterface) => {
    const handleDecrement = (id: TimeField, currentValue: number) => {
        console.log('decrement');
        if (currentValue > 1) {
            const newValue = currentValue - 1;
            handleTimerFormChange(id, newValue);
        }
    };

    const handleIncrement = (id: TimeField, currentValue: number) => {
        if (currentValue < 60) {
            const newValue = currentValue + 1;
            handleTimerFormChange(id, newValue);
        }
    };

    const handleDirectInput = (id: keyof TimerFormState, value: string) => {
        const numericValue = parseInt(value) || 1;
        const clampedValue = Math.min(Math.max(numericValue, 1), 60);
        handleTimerFormChange(id, clampedValue);
    };

    const timeInputs = [
        {id: 'pomodoro', name: 'pomodoro'},
        {id: 'shortBreak', name: 'short break'},
        {id: 'longBreak', name: 'long break'},
    ];

    return (
        <>
            {timeInputs.map((timeInput) => (
                <div className="clock-form flex" key={timeInput.id}>
                    <label htmlFor={timeInput.id} className="fs-12 fw-700">
                        {timeInput.name}
                    </label>
                    <div className="input-wrapper flex">
                        <input
                            className="fs-13 fw-700 lh-125 ls-5p"
                            type="text"
                            id={timeInput.id}
                            name={timeInput.name}
                            value={
                                timerForm[timeInput.id as keyof TimerFormState]
                            }
                            onChange={(e) =>
                                handleDirectInput(
                                    timeInput.id as keyof TimerFormState,
                                    e.target.value
                                )
                            }
                        />

                        <div className="button-wrapper flex">
                            <button
                                type="button"
                                aria-label={`Increase ${timeInput.name} time`}
                                className="arrow-up"
                                onClick={() =>
                                    handleIncrement(
                                        timeInput.id as TimeField,
                                        Number(
                                            timerForm[
                                                timeInput.id as keyof TimerFormState
                                            ]
                                        )
                                    )
                                }>
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
                            </button>

                            <button
                                type="button"
                                aria-label={`Decrease ${timeInput.name} time`}
                                className="arrow-down"
                                onClick={() =>
                                    handleDecrement(
                                        timeInput.id as TimeField,
                                        Number(
                                            timerForm[
                                                timeInput.id as keyof TimerFormState
                                            ]
                                        )
                                    )
                                }>
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
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TimeInput;
