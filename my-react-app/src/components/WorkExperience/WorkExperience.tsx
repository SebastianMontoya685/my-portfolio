import React from 'react';
import { useNavigate } from 'react-router-dom';
import TiltedCard from '../TiltedCard/TiltedCard';
import { useTheme } from '../../context/ThemeContext';
import './WorkExperience.css';

const workplaces = [
    {
        name: 'JPI', 
        description: 'Tech Ops Engineer', 
        lightImage: '/JPIeducationlogo.webp',
        darkImage: '/JPI-non.webp',
        route: '/jpi'
    },
];

export default function WorkExperience() {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <div className='work-experience' id='work-experience'>
            <div className='work-experience-title'>Work Experience.</div>
            <div className='work-experience-container'>
                <div className='work-experience-cards'>
                    {workplaces.map((workplace, idx) => (
                        <div key={idx} className='workplace-card-wrapper'>
                            <TiltedCard
                                imageSrc={theme === 'dark' ? workplace.darkImage : workplace.lightImage}
                                altText={`${workplace.name} logo`}
                                captionText={workplace.description}
                                containerHeight="clamp(500px, 70vh, 800px)"
                                containerWidth="clamp(300px, 75vw, 900px)"
                                imageHeight="clamp(480px, 65vh, 750px)"
                                imageWidth="clamp(280px, 70vw, 850px)"
                                rotateAmplitude={10}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="tilted-card-overlay-text">
                                        <span className="workplace-name">{workplace.name}</span>
                                        <span className="workplace-role">{workplace.description}</span>
                                    </div>
                                }
                                onClick={() => navigate(workplace.route)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
