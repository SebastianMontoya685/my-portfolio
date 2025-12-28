import React from 'react';
import ProjectCategorySection from './ProjectCategorySection';
import './ProjectSection.css';

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

const projects = [
    {
        name: 'JPI Education',
        type: 'single',
        video: '/real-recording.mp4',
        navigateTo: '/jpi-project'
    },
    {
        name: 'E-Invoicing Project',
        type: 'single',
        video: '/e-invoicing.mp4',
        navigateTo: '/projects'
    },
    {
        name: 'Airtable Clone',
        type: 'single',
        video: '/real-recording.mp4',
        navigateTo: '/projects'
    },
    {
        name: 'LinkedIn Comment Automation Startup',
        type: 'single',
        video: '/real-recording.mp4',
        navigateTo: '/projects'
    }
]

export default function ProjectSection() {
    return (
        <div className='project-section' id='projects'>
            {/* BACKEND Section - JPI Project */}
            <div className="project-grid-section">
                <h1 className="project-grid-title">Projects.</h1>
                <div className="projects">
                    {projects.map((project, idx) => (
                        <div className="project-grid-item" key={idx}>
                            <h2 className="project-grid-item-title">{project.name}</h2>
                            <div className="project-video-wrapper">
                                <video src={project.video} controls>
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