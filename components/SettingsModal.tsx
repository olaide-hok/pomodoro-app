import TimeInput from './TimeInput';
import FontTypeButton from './FontTypeButton';
import Button from './Button';
import ColorTabs from './ColorTabs';
import {TimerFormState} from '@/hooks/useTimer';

interface SettingsModalProps {
    closeModal: () => void;
    timerForm: TimerFormState;
    handleTimerFormChange: (
        name: keyof TimerFormState,
        value: string | number
    ) => void;
}

const SettingsModal = ({
    closeModal,
    timerForm,
    handleTimerFormChange,
}: SettingsModalProps) => {
    return (
        <div className="settings-overlay">
            <div className="settings-modal ff-kumbh-sans">
                <div className="header flex">
                    <h1 className="text-blue-900 fs-28 fw-700 lh-125">
                        Settings
                    </h1>
                    <button
                        aria-label="close modal"
                        className="close-modal-btn"
                        onClick={closeModal}
                        type="button">
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
                        <TimeInput
                            timerForm={timerForm}
                            handleTimerFormChange={handleTimerFormChange}
                        />
                    </div>
                </div>

                {/* Fonts */}
                <div className="font-fields flex">
                    <h2 className="font text-blue-900 fw-700 uppercase">
                        Font
                    </h2>

                    <FontTypeButton
                        timerForm={timerForm}
                        handleTimerFormChange={handleTimerFormChange}
                    />
                </div>

                {/* Colors */}
                <ColorTabs
                    timerForm={timerForm}
                    handleTimerFormChange={handleTimerFormChange}
                />

                {/* Apply Button */}
                <div className="apply-btn-wrapper">
                    <Button title="Apply" fn={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
