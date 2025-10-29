import React from 'react';
import './ProjectNavigation.css';
import projectImage from '../../ryan-klaus-GdUw1owQqWE-unsplash.jpg';

const placeholderLogos = [projectImage, projectImage, projectImage];

const projectData = [
    {name: 'Project 1', logos: placeholderLogos},
    {name: 'Project 2', logos: placeholderLogos},
    {name: 'Project 3', logos: placeholderLogos},
    {name: 'Project 4', logos: placeholderLogos},
    {name: 'Project 5', logos: placeholderLogos}
]

export default function ProjectNavigation({ projects, selected, setSelected }) {
    return (
        <div className='project-navigation-container'>
            <div className='project-navigation'>
                {projects.map((project, index) => (
                    <button key={index} onClick={() => setSelected(index)} className={selected === index ? 'active' : ''}>
                        Project {index + 1}
                    </button>
                ))}
            </div>

            {selected !== null && (
                <div className='project-logos'>
                    {projectData[selected].logos.map((logo, i) => (
                        <img src={logo} alt={`logo`} key={i} style={{ width: 60, margin: 10, borderRadius: 13 }} />
                    ))}
                </div>
            )}
        </div>
    );
}