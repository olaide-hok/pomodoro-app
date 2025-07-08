interface TimeTabsProps {
    font: string;
    bgColor: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

type TabTypeOption = {
    id: string;
    name: string;
};
const TimerTabs = ({activeTab, setActiveTab, font, bgColor}: TimeTabsProps) => {
    const typeTabs: TabTypeOption[] = [
        {id: 'pomodoro', name: 'pomodoro'},
        {id: 'shortBreak', name: 'short break'},
        {id: 'longBreak', name: 'long break'},
    ];

    return (
        <div className="select-type-tab-wrapper flex" role="tablist">
            {typeTabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`type-tab-btn ff-${font} ${
                        activeTab === tab.id ? `bg-${bgColor}` : ''
                    } fw-700 lh-120`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id ? 'true' : 'false'}
                    onClick={() => setActiveTab(tab.id)}>
                    {tab.name}
                </button>
            ))}
        </div>
    );
};

export default TimerTabs;
