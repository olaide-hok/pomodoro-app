import {useState} from 'react';

type TabTypeOption = {
    id: string;
    name: string;
};
const TimerTabs = () => {
    const [activeTab, setActiveTab] = useState('pomodoro');

    const typeTabs: TabTypeOption[] = [
        {id: 'pomodoro', name: 'pomodoro'},
        {id: 'short-break', name: 'short break'},
        {id: 'long-break', name: 'long break'},
    ];

    return (
        <div className="select-type-tab-wrapper flex" role="tablist">
            {typeTabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`type-tab-btn ff-kumbh-sans fw-700 lh-120 ${
                        activeTab === tab.id ? 'active' : ''
                    }`}
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
