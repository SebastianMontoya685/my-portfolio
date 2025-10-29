import React from 'react';
import './ProjectNavigation.css';
import { SiReact, SiTypescript, SiSupabase, SiJavascript } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

// Project 1: E-Invoicing System - Supabase, React, JavaScript
const project1Icons = [
    <SiSupabase color='#3ECF8E' size={60} />,
    <SiReact color='#61DAFB' size={60} />,
    <SiJavascript color='#F7DF1E' size={60} />,
];

// Project 2: Cloud Management Platform - AWS, React, TypeScript
const project2Icons = [
    <FaAws color='#FF9900' size={60} />,
    <SiReact color='#61DAFB' size={60} />,
    <SiTypescript color='#3178C6' size={60} />,
];

// Project 3: Data Analytics Suite - React, Supabase, TypeScript
const project3Icons = [
    <SiReact color='#61DAFB' size={60} />,
    <SiSupabase color='#3ECF8E' size={60} />,
    <SiTypescript color='#3178C6' size={60} />,
];

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