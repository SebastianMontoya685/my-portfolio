import React from 'react';
import ProjectNavigation from './ProjectNavigation.tsx';
import ProjectDisplay from './ProjectDisplay.tsx';
import './ProjectSection.css';

export default function ProjectSection() {
    return (
        <div className='project-section' id='projects'>
            <ProjectNavigation />
            <ProjectDisplay />
        </div>
    );
}