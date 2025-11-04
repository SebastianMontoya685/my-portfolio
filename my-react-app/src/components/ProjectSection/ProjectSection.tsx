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

const projectImage = '/placeholder-project.jpg';

export default function ProjectSection() {
    return (
        <div className='project-section' id='projects'>
            {/* BACKEND Section - JPI Project */}
            <ProjectCategorySection
                categoryText="BACKEND"
                projects={[
                    {
                        name: 'JPI Education',
                        type: 'slideshow',
                        images: jpiEducationImages,
                        navigateTo: '/jpi-project',
                        objectFit: ['contain', 'cover'],
                        skillIcons: [
                            '⚛️', '🟩', '🔵'
                        ]
                    }
                ]}
            />
            
            {/* CLOUD Section - E-Invoicing, Placeholder, and TPRA */}
            <ProjectCategorySection
                categoryText="CLOUD"
                showNavigation={true}
                projects={[
                    {
                        name: 'E-Invoicing Project',
                        type: 'slideshow',
                        images: eInvoicingImages,
                        navigateTo: '/projects',
                        skillIcons: [
                            '🟩', '⚛️', '💛'
                        ]
                    },
                    {
                        name: 'JPI Global',
                        type: 'single',
                        image: projectImage,
                        navigateTo: '/projects',
                        skillIcons: [
                            '☁️', '⚛️', '🔵'
                        ]
                    },
                    {
                        name: 'TPRA',
                        type: 'single',
                        image: projectImage,
                        navigateTo: '/projects',
                        skillIcons: [
                            '☁️', '⚛️', '🔵'
                        ]
                    }
                ]}
            />
        </div>
    );
}