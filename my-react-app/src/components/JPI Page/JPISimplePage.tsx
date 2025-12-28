import React from 'react';
import './JPISimplePage.css';

export default function JPISimplePage() {
    return (
        <div className="jpi-simple-page">
            <div className="jpi-simple-container">
                {/* Header Section */}
                <div className="jpi-simple-header">
                    <h1 className="jpi-simple-title">JPI Education</h1>
                    <p className="jpi-simple-role">Tech Ops Engineer</p>
                </div>

                {/* Image Section */}
                <div className="jpi-simple-media">
                    <img 
                        src="/JPIeducationlogo.webp" 
                        alt="JPI Education Logo"
                        className="jpi-simple-image"
                    />
                </div>

                {/* Description Section */}
                <div className="jpi-simple-description">
                    <h2>About the Role</h2>
                    <p>
                        As a Tech Ops Engineer at JPI Education, I was responsible for building and 
                        maintaining the technical infrastructure that powers the company's operations. 
                        My work focused on automation, system reliability, and developing internal tools 
                        to streamline workflows.
                    </p>
                    
                    <h3>Key Responsibilities</h3>
                    <ul>
                        <li>Developed and maintained webhook integrations for form processing using Paperform</li>
                        <li>Built queue-based systems to handle high-volume event submissions</li>
                        <li>Created integrations with Slack and EmailOctopus for lead management</li>
                        <li>Implemented monitoring and observability for webhook events</li>
                        <li>Designed modular architecture for processing different form types</li>
                    </ul>

                    <h3>Technologies Used</h3>
                    <div className="jpi-simple-tech-badges">
                        <span className="tech-badge">TypeScript</span>
                        <span className="tech-badge">Node.js</span>
                        <span className="tech-badge">AWS Lambda</span>
                        <span className="tech-badge">Slack API</span>
                        <span className="tech-badge">Paperform</span>
                        <span className="tech-badge">EmailOctopus</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

