import React from 'react';

const FontTypeButton = () => {
    return (
        <div className="select-font-wrapper flex" role="tablist">
            <button
                className="font-btn ff-kumbh-sans fw-700 fs-16 lh-125"
                type="button"
                role="tab"
                aria-selected="true">
                Aa
            </button>
            <button
                className="font-btn ff-roboto-slab fs-16 lh-125"
                type="button"
                role="tab"
                aria-selected="false">
                Aa
            </button>
            <button
                className="font-btn ff-space-mono fw-700 fs-16 lh-125"
                type="button"
                role="tab"
                aria-selected="false">
                Aa
            </button>
        </div>
    );
};

export default FontTypeButton;
