import {TimerFormState} from '@/hooks/useTimer';

type FontOption = {
    id: string;
    className: string;
};

interface FontTypeProps {
    timerForm: TimerFormState;
    handleTimerFormChange: (
        name: keyof TimerFormState,
        value: string | number
    ) => void;
}

const FontTypeButton = ({timerForm, handleTimerFormChange}: FontTypeProps) => {
    const fonts: FontOption[] = [
        {id: 'kumbh-sans', className: 'ff-kumbh-sans'},
        {id: 'roboto-slab', className: 'ff-roboto-slab'},
        {id: 'space-mono', className: 'ff-space-mono'},
    ];
    return (
        <div className="select-font-wrapper flex" role="tablist">
            {fonts.map((font) => (
                <button
                    key={font.id}
                    className={`font-btn ${font.className} fw-700 fs-16 lh-125`}
                    type="button"
                    role="tab"
                    aria-selected={
                        timerForm.selectedFont === font.id ? 'true' : 'false'
                    }
                    onClick={() => {
                        handleTimerFormChange('selectedFont', font.id);
                    }}>
                    Aa
                </button>
            ))}
        </div>
    );
};

export default FontTypeButton;
