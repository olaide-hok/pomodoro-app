import {useState} from 'react';

type FontOption = {
    id: string;
    className: string;
};
const FontTypeButton = () => {
    const [selectedFont, setSelectedFont] = useState('kumbh-sans');

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
                    aria-selected={selectedFont === font.id ? 'true' : 'false'}
                    onClick={() => setSelectedFont(font.id)}>
                    Aa
                </button>
            ))}
        </div>
    );
};

export default FontTypeButton;
