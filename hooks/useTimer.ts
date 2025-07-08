import {useState} from 'react';

export interface TimerFormState {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
    selectedFont: string;
    selectedColor: string;
}

export type TimeField = 'pomodoro' | 'shortBreak' | 'longBreak';

export function useTimer() {
    const [selectedFont, setSelectedFont] = useState('kumbh-sans');

    const [timerForm, setTimerForm] = useState<TimerFormState>({
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
        selectedFont: 'kumbh-sans',
        selectedColor: 'red-400',
    });

    const handleTimerFormChange = (
        name: keyof TimerFormState,
        value: string | number
    ): void => {
        setTimerForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return {
        selectedFont,
        setSelectedFont,
        timerForm,
        setTimerForm,
        handleTimerFormChange,
    };
}
