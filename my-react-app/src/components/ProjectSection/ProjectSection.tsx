import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectSection.css';

const projects = [
    {
        name: 'JPI Education',
        type: 'single',
        video: '/real-recording.mp4',
        navigateTo: '/jpi',
        clickable: true
    },
    {
        name: 'E-Invoicing Project',
        type: 'single',
        video: '/e-invoicing.mp4',
        navigateTo: '/projects/e-invoicing',
        clickable: true
    },
    {
        name: 'Airtable Clone',
        type: 'single',
        video: '/real-recording.mp4',
        navigateTo: '/projects',
        clickable: false
    },
    {
        name: 'LinkedIn Comment Automation Startup',
        type: 'single',
        video: '/real-recording.mp4',
        navigateTo: '/projects',
        clickable: false
    }
]

export default function ProjectSection() {
    const navigate = useNavigate();

    const handleProjectClick = (project: typeof projects[0]) => {
        if (project.clickable && project.navigateTo) {
            navigate(project.navigateTo);
        }
    };

    return (
        <div className='project-section' id='projects'>
            {/* BACKEND Section - JPI Project */}
            <div className="project-grid-section">
                <h1 className="project-grid-title">Projects.</h1>
                <div className="projects">
                    {projects.map((project, idx) => (
                        <div 
                            className={`project-grid-item ${project.clickable ? 'clickable' : ''}`} 
                            key={idx}
                            onClick={() => handleProjectClick(project)}
                            style={{ cursor: project.clickable ? 'pointer' : 'default' }}
                        >
                            <h2 className="project-grid-item-title">{project.name}</h2>
                            <div className="project-video-wrapper">
                                <video src={project.video} controls onClick={(e) => e.stopPropagation()}>
                                    Sorry, your browser does not support embedded videos.
                                </video>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}