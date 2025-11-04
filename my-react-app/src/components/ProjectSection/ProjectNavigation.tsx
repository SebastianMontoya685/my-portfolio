import React from 'react';
import './ProjectNavigation.css';

// Project 1: E-Invoicing System - Supabase, React, JavaScript
const project1Icons = [ '🟩', '⚛️', '💛' ];

// Project 2: Cloud Management Platform - AWS, React, TypeScript
const project2Icons = [ '☁️', '⚛️', '🔵' ];

// Project 3: Data Analytics Suite - React, Supabase, TypeScript
const project3Icons = [ '⚛️', '🟩', '🔵' ];

const projectData = [
    {name: 'E-Invoicing Project', logos: project1Icons},
    {name: 'Project 2', logos: project2Icons},
    {name: 'JPI Education', logos: project3Icons},
]

export default function ProjectNavigation({ projects, selected, setSelected }) {
    return (
        <div className='project-navigation-container'>
            <div className='project-navigation'>
                {projects.map((project, index) => (
                    <button key={index} onClick={() => setSelected(index)} className={selected === index ? 'active' : ''}>
                        {projectData[index].name}
                    </button>
                ))}
            </div>

            {selected !== null && (
                <div className='project-logos'>
                    {projectData[selected].logos.map((icon, i) => (
                        <span className='project-logo' key={i}>{icon}</span>
                    ))}
                </div>
            )}
        </div>
    );
}