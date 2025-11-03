import React, { useState } from 'react';
import './WorkExperience.css';

const workplaces = [
    "JPI",
    "TPRA Australia",
    "Katana AI"
];

export default function WorkExperience() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className='work-experience' id='work-experience'>
            <div className='work-experience-title'>Work Experience.</div>
            <div className='work-experience-container'>
                <div className='work-experience-right' tabIndex={0} style={{ outline: 'none' }}>
                    {workplaces.map((workplace, idx) => (
                        <div 
                            key={`${idx}-${workplace}`}
                            className={`workplace-item ${activeIndex === idx ? 'active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                            role='button'
                            aria-pressed={activeIndex === idx}
                        >
                            {workplace}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}