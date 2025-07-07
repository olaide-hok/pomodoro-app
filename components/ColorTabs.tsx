'use client';

import {useState} from 'react';

type ColorOption = {
    id: string;
    className: string;
};

const ColorTabs = () => {
    const [selectedColor, setSelectedColor] = useState<string>('red'); // Default selected color

    const colors: ColorOption[] = [
        {id: 'red', className: 'bg-red-400'},
        {id: 'cyan', className: 'bg-cyan-300'},
        {id: 'purple', className: 'bg-purple-400'},
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
                            selectedColor === color.id ? 'true' : 'false'
                        }
                        type="button"
                        role="tab"
                        onClick={() => setSelectedColor(color.id)}
                        aria-label={`Select ${color.id} color`} // Better accessibility
                    >
                        <span className="sr-only">{color.id}</span>
                        {selectedColor === color.id && <Checkmark />}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ColorTabs;
