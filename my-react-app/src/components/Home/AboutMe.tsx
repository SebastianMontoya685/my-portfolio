import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div className='about-me-container' id='about-me'>
            <div className='about-me'>
                <h1 className='about-me-title'>About Me</h1>
                <div className='about-me-content'>
                    <p className='about-me-text'>
                        I am a final year Computer Science student at the University of New South Wales, Sydney.
                        I have had a year of experience across two enterprises companies, while balancing my studies.
                        My experience at JPI Education gave me the opportunity to work on building the entire backend system for 
                        the company and integrating many third party services to the system.
                        My experience at The Princeton Review gave me the opportunirty to work on another backend system
                        where I also had the chance to learn cloud basics such as AWS, Terraform, and Docker.
                        With these experiences, I have gained a solid foundation, and I am now in the pursuit of landing
                        a more corporate role in the industry, where I can scale my career in a longer-term role.
                    </p>
                </div>
            </div>
        </div>
    );
}

