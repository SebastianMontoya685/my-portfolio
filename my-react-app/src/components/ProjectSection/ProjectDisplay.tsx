import React from 'react';
import './ProjectDisplay.css';

export default function ProjectDisplay({ image }) {
    return (
        <div className='project-display'>
            <div className='project-image-container'>
                <img src={image} alt='project' className='project-image' />
            </div>
        </div>
    );
}