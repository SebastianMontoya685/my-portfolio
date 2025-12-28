import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div className='about-me-container' id='about-me'>
            <div className='about-me'>
                <h1 className='about-me-title'>More About Me.</h1>
                <div className='about-me-content'>
                    <p className='about-me-text'>
                        I am a final year Computer Science student who is currently working as a Tech Ops Engineer at JPI Education.
                        The highlight of my professional experience in the software industry so far has been working on a backend system
                        for an educational company, where I got to own the entire software development process from design to deployment.
                        I have also dabbled in many other technologies in my spare time and during my studies, such as AWS, Terraform, Docker,
                        Full-Stack development, and AI. However, moving into the industry, I have a partiuclar interest in searching for roles with a mix of frontend, cloud, and 
                        Web Security skills, since I strongly believe these are the skills of the future, but am open to other opportunities as well.
                    </p>
                </div>
            </div>
        </div>
    );
}

