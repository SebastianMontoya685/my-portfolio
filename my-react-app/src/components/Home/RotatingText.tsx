import React from 'react';
import './RotatingText.css';

type RotatingTextProps = {
    text: string;
};

export default function RotatingText({ text }: RotatingTextProps) {
    return (
        <div className='rotating-text-container'>
            <div className='scrolling-text-wrapper'>
                <div className='scrolling-text'>
                    <span>{text}</span>
                    <span className='dot-separator'>•</span>
                    <span>{text}</span>
                    <span className='dot-separator'>•</span>
                    <span>{text}</span>
                    <span className='dot-separator'>•</span>
                    <span>{text}</span>
                    <span className='dot-separator'>•</span>
                    <span>{text}</span>
                    <span className='dot-separator'>•</span>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
}

