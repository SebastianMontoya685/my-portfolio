import React from 'react';
import { useNavigate } from 'react-router-dom';
import TiltedCard from '../TiltedCard/TiltedCard';
import './WorkExperience.css';

const workplaces = [
    {
        name: 'JPI', 
        description: 'Tech Ops Engineer', 
        image: '/JPIeducationlogo.webp',
        route: '/jpi'
    },
];

export default function WorkExperience() {
    const navigate = useNavigate();

    return (
        <div className='work-experience' id='work-experience'>
            <div className='work-experience-title'>Work Experience.</div>
            <div className='work-experience-container'>
                <div className='work-experience-cards'>
                    {workplaces.map((workplace, idx) => (
                        <div key={idx} className='workplace-card-wrapper'>
                            <TiltedCard
                                imageSrc={workplace.image}
                                altText={`${workplace.name} logo`}
                                captionText={workplace.description}
                                containerHeight="320px"
                                containerWidth="320px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.1}
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
