import React from 'react';
import TimeInput from './TimeInput';
import FontTypeButton from './FontTypeButton';
import Button from './Button';
import ColorTabs from './ColorTabs';

interface SettingsModalProps {
    closeModal: () => void;
}

const SettingsModal = ({closeModal}: SettingsModalProps) => {
    return (
        <div className="settings-overlay">
            <div className="settings-modal">
                <div className="header flex">
                    <h1 className="text-blue-900 fs-28 fw-700 lh-125">
                        Settings
                    </h1>
                    <button
                        className="close-modal-btn"
                        onClick={closeModal}
                        type="button">
                        <span className="sr-only">Close</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14">
                            <path
                                fill="#1E213F"
                                fillRule="evenodd"
                                d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
                                opacity=".5"
                            />
                        </svg>
                    </button>
                </div>

                <div className="time-fields flex">
                    <h2 className="time text-blue-900 fw-700 uppercase">
                        Time (minutes)
                    </h2>

                    <div className="time-input-wrapper flex">
                        <TimeInput label="pomodoro" />
                        <TimeInput label="short break" />
                        <TimeInput label="long break" />
                    </div>
                </div>

                {/* Fonts */}
                <div className="font-fields flex">
                    <h2 className="font text-blue-900 fw-700 uppercase">
                        Fonts
                    </h2>

                    <FontTypeButton />
                </div>

                {/* Colors */}
                <ColorTabs />

                {/* Apply Button */}
                <div className="apply-btn-wrapper">
                    <Button title="Apply" />
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
