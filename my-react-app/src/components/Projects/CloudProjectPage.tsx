import React from 'react';
import './ProjectsPage.css';

export default function CloudProjectPage() {
    return (
        <div className='projects-page'>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                minHeight: '100vh', 
                padding: '2rem',
                gap: '2rem'
            }}>
                <h1 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '900', 
                    margin: '0', 
                    textAlign: 'center',
                    marginBottom: '1rem'
                }}>
                    Cloud Project
                </h1>

                {/* Placeholder Content */}
                <div style={{
                    maxWidth: '700px',
                    width: '100%',
                    padding: '3rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    border: '2px solid #5227FF20',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontSize: '1.3rem',
                        lineHeight: '1.7',
                        color: '#666',
                        margin: '0',
                        fontWeight: '400'
                    }}>
                        This project is currently under development.
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: '#888',
                        margin: '1.5rem 0 0 0',
                        fontWeight: '400'
                    }}>
                        More details coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
}
