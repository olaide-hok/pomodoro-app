'use client';

import {TimerFormState} from '@/hooks/useTimer';
import {useState, useEffect} from 'react';

const Timer = ({timerForm}: {timerForm: TimerFormState}) => {
    const [time, setTime] = useState<number>(timerForm.pomodoro * 60); // Initial time in seconds (17:59)
    const [isActive, setIsActive] = useState<boolean>(false);
    const [size, setSize] = useState<number>(410); // Base size for desktop (410px)

    // Update size based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setSize(300); // Mobile
            } else if (window.innerWidth <= 768) {
                setSize(350); // Tablet
            } else {
                setSize(410); // Desktop
            }
        };

        handleResize(); // Set initial size
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (!isActive && time !== 0 && interval) {
            clearInterval(interval); // Safe to call if interval is not null
        }
        return () => {
            if (interval) {
                clearInterval(interval); // Cleanup on unmount or dependency change
            }
        };
    }, [isActive, time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const toggleTimer = () => setIsActive(!isActive);

    const radius = size * 0.45; // 45% of size for r
    const circumference = 2 * Math.PI * radius;
    const totalTimeInSeconds = timerForm.pomodoro * 60; // Total time in seconds
    const dashOffset = circumference * (1 - time / totalTimeInSeconds) || 0;

    const bgColorHSLValue = {
        'red-400': 'hsl(var(--clr-red-400))',
        'cyan-300': 'hsl(var(--clr-cyan-300))',
        'purple-400': 'hsl(var(--clr-purple-400))',
    };

    const strokeColor =
        bgColorHSLValue[
            timerForm.selectedColor as keyof typeof bgColorHSLValue
        ];

    const fontFamily = `ff-${timerForm.selectedFont}`;

    // const timers = [{id: 'pomodoro'}, {id: 'shortBreak'}, {id: 'longBreak'}];

    return (
        <div className="timer-container">
            <div className="timer-circle" style={{width: size, height: size}}>
                <svg viewBox={`0 0 ${size} ${size}`}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={size / 20}
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={size / 20}
                        strokeLinecap="round"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: dashOffset,
                            transition: 'stroke-dashoffset 1s linear',
                            stroke: strokeColor,
                        }}
                    />
                </svg>
                <div className="timer-display flex">
                    <span className={`${fontFamily} fw-700 lh-125 ls-5n`}>
                        {minutes.toString().padStart(2, '0')}:
                        {seconds.toString().padStart(2, '0')}
                    </span>
                    <button
                        type="button"
                        className={`timer-btn ${fontFamily} fw-700 uppercase`}
                        onClick={toggleTimer}>
                        {isActive ? 'pause' : 'start'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
