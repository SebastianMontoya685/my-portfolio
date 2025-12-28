import React from 'react';
import './LinkedProjectPage.css';

export default function LinkedProjectPage() {
    return (
        <div className="linked-page">
            <div className="linked-container">
                {/* Header Section */}
                <div className="linked-header">
                    <h1 className="linked-title">Linked...</h1>
                    <p className="linked-subtitle">Build It Group Project</p>
                </div>

                {/* Image Section */}
                <div className="linked-media">
                    <img 
                        src="/BI..png" 
                        alt="Build It Group Logo"
                        className="linked-image"
                    />
                </div>

                {/* Description Section */}
                <div className="linked-description">
                    <h2>About the Project</h2>
                    <p>
                        A project developed for Build It Group, focusing on creating connected 
                        solutions and building innovative tools for modern workflows.
                    </p>
                </div>
            </div>
        </div>
    );
}

