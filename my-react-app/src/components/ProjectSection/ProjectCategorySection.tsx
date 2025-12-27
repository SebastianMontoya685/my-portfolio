import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RotatingText from '../Home/RotatingText';
import ProjectSlideshow from './ProjectSlideshow';
import ProjectDisplay from './ProjectDisplay';
import './ProjectCategorySection.css';

type ProjectCategorySectionProps = {
    categoryText: string;
    projects: {
        name: string;
        type: 'slideshow' | 'single';
        images?: string[];
        image?: string;
        video?: string;
        navigateTo?: string;
        objectFit?: 'cover' | 'contain' | ('cover' | 'contain')[];
        skillIcons?: React.ReactNode[];
    }[];
    showNavigation?: boolean;
};

export default function ProjectCategorySection({ categoryText, projects, showNavigation = false }: ProjectCategorySectionProps) {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const handleProjectClick = (navigateTo?: string) => {
        if (navigateTo) {
            navigate(navigateTo);
        }
    };

    const selectedProject = projects[selectedIndex];

    return (
        <div className='project-category-section'>
            <RotatingText text={categoryText} />
            <div className='category-navigation-container'>
                {showNavigation && projects.length > 1 && (
                    <div className='category-navigation'>
                        {projects.map((project, index) => (
                            <button 
                                key={index} 
                                onClick={() => setSelectedIndex(index)} 
                                className={selectedIndex === index ? 'active' : ''}
                            >
                                {project.name}
                            </button>
                        ))}
                    </div>
                )}
                {selectedProject.skillIcons && selectedProject.skillIcons.length > 0 && (
                    <div className='project-logos'>
                        {selectedProject.skillIcons.map((icon, i) => (
                            <span className='project-logo' key={i}>{icon}</span>
                        ))}
                    </div>
                )}
            </div>
            <div className='projects-grid'>
                <div 
                    className='project-item'
                    onClick={() => handleProjectClick(selectedProject.navigateTo)}
                    style={{ cursor: selectedProject.navigateTo ? 'pointer' : 'default' }}
                >
                    {selectedProject.type === 'slideshow' && selectedProject.images ? (
                        <ProjectSlideshow 
                            images={selectedProject.images}
                            autoAdvanceInterval={3000}
                            onImageClick={() => handleProjectClick(selectedProject.navigateTo)}
                            objectFit={selectedProject.objectFit}
                        />
                    ) : (
                        <ProjectDisplay 
                            image={selectedProject.image || '/placeholder-project.jpg'}
                            video={selectedProject.video}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

