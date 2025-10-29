import React from 'react';
import ProjectNavigation from './ProjectNavigation.tsx';
import ProjectDisplay from './ProjectDisplay.tsx';
import './ProjectSection.css';
import projectImage from '../../ryan-klaus-GdUw1owQqWE-unsplash.jpg';
import { useState } from 'react';

const projectImages = [
    projectImage,
    projectImage,
    projectImage,
    projectImage,
    projectImage,
];

export default function ProjectSection() {
    const [selected, setSelected] = useState(0);
    return (
        <div className='project-section' id='projects'>
            {/* <h1 className='project-section-title'>Projects.</h1> */}
            <ProjectNavigation projects={projectImages} selected={selected} setSelected={setSelected}/>
            <ProjectDisplay image={projectImages[selected]} />
        </div>
    );
}