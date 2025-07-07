'use client';

import SettingsBtn from '@/components/SettingsBtn';
import SettingsModal from '@/components/SettingsModal';
import Timer from '@/components/Timer';
import TimerTabs from '@/components/TimerTabs';
import {useState} from 'react';

const TimerDetails = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <>
            <div className="timer-details-wrapper">
                <div className="timer-tabs-title flex">
                    <h1 className="title ff-kumbh-sans text-blue-100 fw-700">
                        pomodoro
                    </h1>
                    <TimerTabs />
                </div>
                <Timer />

                <SettingsBtn openSettings={() => setIsSettingsOpen(true)} />
            </div>
            {isSettingsOpen && (
                <SettingsModal closeModal={() => setIsSettingsOpen(false)} />
            )}
        </>
    );
};

export default TimerDetails;
