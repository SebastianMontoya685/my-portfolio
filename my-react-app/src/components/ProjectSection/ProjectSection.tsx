import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectNavigation from './ProjectNavigation.tsx';
import ProjectDisplay from './ProjectDisplay.tsx';
import ProjectSlideshow from './ProjectSlideshow.tsx';
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

const projectImages = [
    projectImage,
    projectImage,
    projectImage,
];

export default function ProjectSection() {
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();
    
    const handleProjectClick = () => {
        navigate('/projects');
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
            ) : (
                <ProjectDisplay image={projectImages[selected]} />
            )}
        </div>
    );
}