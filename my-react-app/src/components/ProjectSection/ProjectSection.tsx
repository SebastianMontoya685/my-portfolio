import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './ProjectSection.css';

const projects = [
    {
        name: 'JPI Education',
        type: 'single',
        mediaType: 'image',
        image: '/JPIeducationlogo.webp',
        imageBg: '#ffffff',
        darkImage: '/JPI-non.webp',
        darkImageBg: '#023875',
        imageContain: true,
        navigateTo: '/jpi',
        clickable: true
    },
    {
        name: 'E-Invoicing Project',
        type: 'single',
        mediaType: 'video',
        video: '/e-invoicing.mp4',
        navigateTo: '/projects/e-invoicing',
        clickable: true
    },
    {
        name: 'Airtable Clone',
        type: 'single',
        mediaType: 'video',
        video: '/real-recording.mp4',
        navigateTo: '/projects',
        clickable: false
    },
    {
        name: 'LinkedIn Comment Automation Startup',
        type: 'single',
        mediaType: 'image',
        image: '/BI..png',
        imageBg: '#000000',
        imageContain: false,
        navigateTo: '/projects/linked',
        clickable: true
    }
]

export default function ProjectSection() {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const handleProjectClick = (project: typeof projects[0]) => {
        if (project.clickable && project.navigateTo) {
            navigate(project.navigateTo);
        }
    };

    const getImageSrc = (project: typeof projects[0]) => {
        if (isDark && project.darkImage) {
            return project.darkImage;
        }
        return project.image;
    };

    const getImageBg = (project: typeof projects[0]) => {
        if (isDark && project.darkImageBg) {
            return project.darkImageBg;
        }
        return project.imageBg;
    };

    return (
        <div className='project-section' id='projects'>
            {/* BACKEND Section - JPI Project */}
            <div className="project-grid-section">
                <h1 className="project-grid-title">Projects.</h1>
                <div className="projects">
                    {projects.map((project, idx) => {
                        const imageSrc = getImageSrc(project);
                        const imageBg = getImageBg(project);
                        
                        return (
                            <div 
                                className={`project-grid-item ${project.clickable ? 'clickable' : ''}`} 
                                key={idx}
                                onClick={() => handleProjectClick(project)}
                                style={{ cursor: project.clickable ? 'pointer' : 'default' }}
                            >
                                <h2 className="project-grid-item-title">{project.name}</h2>
                                <div 
                                    className="project-media-wrapper"
                                    style={imageBg ? { background: imageBg } : undefined}
                                >
                                    {project.mediaType === 'video' ? (
                                        <video src={project.video} controls onClick={(e) => e.stopPropagation()}>
                                            Sorry, your browser does not support embedded videos.
                                        </video>
                                    ) : (
                                        <img 
                                            src={imageSrc} 
                                            alt={project.name}
                                            className="project-image"
                                            style={project.imageContain ? { objectFit: 'contain' } : undefined}
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}