import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectNavigation from './ProjectNavigation';
import ProjectDisplay from './ProjectDisplay';
import ProjectSlideshow from './ProjectSlideshow';
import './ProjectSection.css';
const projectImage = '/placeholder-project.jpg';

// E-invoicing project images
const eInvoicingImages = [
    '/e-invoicing-homedark.jpg',
    '/e-invoicingdashboard.jpg',
    '/e-invoicingdashboard2.jpg',
    '/e-invoicingdashboard3.jpg',
    '/e-invoicingfiles.jpg',
    '/e-invoicinghistory.jpg',
    '/e-invoicinghome.jpg',
    '/e-invoicinglogin.jpg'
];

// JPI Education project images
const jpiEducationImages = [
    '/JPIeducationlogo.webp',
    '/jpiprojectoffice.webp'
];

const projectImages = [
    projectImage,
    projectImage,
    projectImage,
];

export default function ProjectSection() {
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();
    
    const handleProjectClick = () => {
        if (selected === 2) {
            // Navigate to JPI project page for JPI Education
            navigate('/jpi-project');
        } else {
            // Navigate to general projects page for other projects
            navigate('/projects');
        }
    };
    
    return (
        <div className='project-section' id='projects'>
            {/* <h1 className='project-section-title'>Projects.</h1> */}
            <ProjectNavigation projects={projectImages} selected={selected} setSelected={setSelected}/>
            {selected === 0 ? (
                <div className='project-display'>
                    <ProjectSlideshow 
                        images={eInvoicingImages} 
                        autoAdvanceInterval={3000} 
                        onImageClick={handleProjectClick}
                    />
                </div>
            ) : selected === 2 ? (
                <div className='project-display'>
                    <ProjectSlideshow 
                        images={jpiEducationImages} 
                        autoAdvanceInterval={4000} 
                        onImageClick={handleProjectClick}
                        objectFit={['contain', 'cover']}
                    />
                </div>
            ) : (
                <ProjectDisplay image={projectImages[selected]} />
            )}
        </div>
    );
}