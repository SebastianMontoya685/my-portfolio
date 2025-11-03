import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsGrid.css';

// Reuse the same hero/dashboard images already used in ProjectSection
const eInvoicingThumb = '/e-invoicing-homedark.jpg';
const jpiThumb = '/JPIeducationlogo.webp';

type ProjectCard = {
    title: string;
    subtitle?: string;
    image: string;
    to: string;
};

const cards: ProjectCard[] = [
    {
        title: 'E-Invoicing',
        subtitle: 'End-to-end invoice processing platform',
        image: eInvoicingThumb,
        to: '/projects/e-invoicing'
    },
    {
        title: 'JPI Education',
        subtitle: 'Tech Ops foundations and automation',
        image: jpiThumb,
        to: '/jpi-project'
    }
];

export default function ProjectsGrid() {
    const navigate = useNavigate();
    return (
        <div className='projects-grid-page'>
            <h1 className='projects-grid-title'>Projects</h1>
            <div className='projects-grid'>
                {cards.map(card => (
                    <button
                        key={card.title}
                        className='project-card'
                        onClick={() => navigate(card.to)}
                    >
                        <div className='project-card-image-wrap'>
                            <img src={card.image} alt={card.title} className='project-card-image' />
                        </div>
                        <div className='project-card-text'>
                            <h2>{card.title}</h2>
                            {card.subtitle && <p>{card.subtitle}</p>}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}



