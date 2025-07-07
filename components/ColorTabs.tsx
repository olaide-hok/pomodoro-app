'use client';

type ColorOption = {
    id: string;
    className: string;
};

import {TimerFormState} from '@/hooks/useTimer';

interface ColorTabsProps {
    timerForm: TimerFormState;
    handleTimerFormChange: (
        name: keyof TimerFormState,
        value: string | number
    ) => void;
}

const ColorTabs = ({timerForm, handleTimerFormChange}: ColorTabsProps) => {
    const colors: ColorOption[] = [
        {id: 'red-400', className: 'bg-red-400'},
        {id: 'cyan-300', className: 'bg-cyan-300'},
        {id: 'purple-400', className: 'bg-purple-400'},
    ];

    const Checkmark = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            className="checkmark"
            aria-hidden="true" // For accessibility
        >
            <path
                d="M0.797852 5.27368L4.75048 9.22631L13.2031 0.773682"
                stroke="#161932"
                strokeWidth="2"
            />
        </svg>
    );

    return (
        <div className="color-fields flex">
            <h2 className="color text-blue-900 fw-700 uppercase">color</h2>

            <div className="color-btn-wrapper flex" role="tablist">
                {colors.map((color) => (
                    <button
                        key={color.id}
                        className={`color-btn ${color.className} relative`}
                        aria-selected={
                            timerForm.selectedColor === color.id
                                ? 'true'
                                : 'false'
                        }
                        type="button"
                        role="tab"
                        onClick={() => {
                            handleTimerFormChange('selectedColor', color.id);
                        }}
                        aria-label={`Select ${color.id} color`} // Better accessibility
                    >
                        <span className="sr-only">{color.id}</span>
                        {timerForm.selectedColor === color.id && <Checkmark />}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ColorTabs;
