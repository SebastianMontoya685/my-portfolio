import React from 'react';
import './ProjectNavigation.css';
import { SiReact, SiTypescript } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techIcons = [
    <FaAws color='#FF9900' size={60} />,
    <SiReact color='#61DAFB' size={60} />,
    <SiTypescript color='#3178C6' size={60} />,
];

const projectData = [
    {name: 'E-Invoicing Project', logos: techIcons},
    {name: 'Project 2', logos: techIcons},
    {name: 'Project 3', logos: techIcons},
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