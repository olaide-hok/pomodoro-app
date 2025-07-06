const TimerTabs = () => {
    return (
        <div className="select-type-tab-wrapper flex" role="tablist">
            <button
                className="type-tab-btn ff-kumbh-sans fw-700 fs-14 lh-120"
                type="button"
                role="tab"
                aria-selected="true">
                pomodoro
            </button>
            <button
                className="type-tab-btn ff-kumbh-sans fs-14 fw-700 lh-120"
                type="button"
                role="tab"
                aria-selected="false">
                short break
            </button>
            <button
                className="type-tab-btn ff-kumbh-sans fw-700 fs-14 lh-120"
                type="button"
                role="tab"
                aria-selected="false">
                long break
            </button>
        </div>
    );
};

export default TimerTabs;
