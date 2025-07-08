'use client';

import SettingsBtn from '@/components/SettingsBtn';
import SettingsModal from '@/components/SettingsModal';
import Timer from '@/components/Timer';
import TimerTabs from '@/components/TimerTabs';
import {TimeField, useTimer} from '@/hooks/useTimer';
import {useState} from 'react';

const TimerDetails = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const {timerForm, handleTimerFormChange} = useTimer();

    const [activeTab, setActiveTab] = useState('pomodoro');

    const timers = [{id: 'pomodoro'}, {id: 'shortBreak'}, {id: 'longBreak'}];

    return (
        <>
            <div className="timer-details-wrapper">
                <div className="timer-tabs-title flex">
                    <h1
                        className={`title ff-${timerForm.selectedFont} text-blue-100 fw-700`}>
                        pomodoro
                    </h1>
                    <TimerTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        font={timerForm.selectedFont}
                        bgColor={timerForm.selectedColor}
                    />
                </div>

                <div className="timers-wrapper">
                    {timers.map((timer) => (
                        <Timer
                            key={timer.id}
                            initialTime={timerForm[timer.id as TimeField]}
                            activeTab={
                                activeTab === timer.id ? 'true' : 'false'
                            }
                            font={timerForm.selectedFont}
                            bgColor={timerForm.selectedColor}
                        />
                    ))}
                </div>

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
