'use client';

import SettingsBtn from '@/components/SettingsBtn';
import SettingsModal from '@/components/SettingsModal';
import Timer from '@/components/Timer';
import TimerTabs from '@/components/TimerTabs';
import {useTimer} from '@/hooks/useTimer';
import {useState} from 'react';

const TimerDetails = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const {timerForm, handleTimerFormChange} = useTimer();

    return (
        <>
            <div className="timer-details-wrapper">
                <div className="timer-tabs-title flex">
                    <h1
                        className={`title ff-${timerForm.selectedFont} text-blue-100 fw-700`}>
                        pomodoro
                    </h1>
                    <TimerTabs
                        font={timerForm.selectedFont}
                        bgColor={timerForm.selectedColor}
                    />
                </div>
                <Timer timerForm={timerForm} />

                <SettingsBtn openSettings={() => setIsSettingsOpen(true)} />
            </div>
            {isSettingsOpen && (
                <SettingsModal
                    closeModal={() => setIsSettingsOpen(false)}
                    timerForm={timerForm}
                    handleTimerFormChange={handleTimerFormChange}
                />
            )}
        </>
    );
};

export default TimerDetails;
