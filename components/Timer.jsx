'use client';

import {useState, useEffect} from 'react';

const Timer = () => {
    const [time, setTime] = useState(17 * 60 + 59); // Initial time in seconds (17:59)
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const toggleTimer = () => setIsActive(!isActive);

    return (
        <div className="timer-container">
            <div className="timer-circle">
                <svg>
                    <circle cx="180" cy="180" r="170" />
                    <circle
                        cx="180"
                        cy="180"
                        r="170"
                        style={{
                            strokeDasharray: 1130.96,
                            strokeDashoffset:
                                1130.96 * (1 - time / (18 * 60)) || 0,
                        }}
                    />
                </svg>
                <div className="timer-display flex">
                    <span className="ff-kumbh-sans fw-700 lh-125 ls-5n">
                        {minutes.toString().padStart(2, '0')}:
                        {seconds.toString().padStart(2, '0')}
                    </span>
                    <button
                        className="timer-btn fs-16 lh-125 ls-15 fw-700 uppercase"
                        onClick={toggleTimer}>
                        {isActive ? 'pause' : 'start'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
