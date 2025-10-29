import React from 'react';
import './ProjectTemplate.css';

type ProjectTemplateProps = {
    title: string;
    images: string[];
    description: string;
    techs: string[];
};

export default function ProjectTemplate({ title, images, description, techs }: ProjectTemplateProps) {
    return (
        <div className='project-template'>
            <h2 className='project-title'>{title}</h2>

            <div className='project-images'>
                {images.map((src, idx) => (
                    <img key={idx} className='project-template-image' src={src} alt={`${title} screenshot ${idx + 1}`} />
                ))}
            </div>

            <p className='project-description'>{description}</p>

            <div className='project-techs'>
                {techs.map((tech, idx) => (
                    <span key={idx} className='tech-badge'>{tech}</span>
                ))}
            </div>
        </div>
    );
}


