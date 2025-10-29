import React from 'react';
import ProjectTemplate from './ProjectTemplate.tsx';
import img from '../../logo.svg';
import './ProjectsPage.css';

export default function ProjectsPage() {
    return (
        <div className='projects-page'>
            <ProjectTemplate
                title="Sample Project"
                images={[img, img, img]}
                description={
                    'This is a placeholder project used to scaffold the layout. Replace with your own screenshots, a concise summary, and the technologies used.'
                }
                techs={["React", "TypeScript", "Spring Boot", "AWS Lambda"]}
            />
        </div>
    );
}


