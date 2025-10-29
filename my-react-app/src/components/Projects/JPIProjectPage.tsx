import React from 'react';
import Folder from '../ProjectSection/Folder.tsx';
import './ProjectsPage.css';

export default function JPIProjectPage() {
    const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

    // JPI Education project data with images and descriptions
    const projectData = [
        {
            image: "/JPIeducationlogo.webp",
            title: "JPI Education Brand Identity",
            description: "The official JPI Education logo showcasing the brand's commitment to educational excellence. The design represents innovation in learning and professional development with clean, modern typography and symbolic elements."
        },
        {
            image: "/jpiprojectoffice.webp",
            title: "Modern Learning Environment",
            description: "State-of-the-art office and learning spaces designed to foster collaboration and innovation. The contemporary workspace reflects JPI Education's forward-thinking approach to educational technology and student engagement."
        }
    ];

    // JPI project images as folder contents
    const folderItems = projectData.map((item, index) => (
        <img 
            key={index}
            src={item.image} 
            alt={item.title} 
            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'white' }} 
            onClick={() => setSelectedImage(index)}
        />
    ));

    return (
        <div className='projects-page'>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                minHeight: '100vh', 
                padding: '2rem',
                gap: '3rem'
            }}>
                <h1 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '900', 
                    margin: '0', 
                    textAlign: 'center',
                    marginBottom: '1rem'
                }}>
                    JPI Education Project
                </h1>

                {/* Project Overview Description */}
                <div style={{
                    maxWidth: '900px',
                    width: '100%',
                    padding: '2.5rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    marginBottom: '2rem',
                    border: '2px solid #00D4AA20'
                }}>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.7',
                        color: '#333',
                        margin: '0 0 2rem 0',
                        textAlign: 'center',
                        fontWeight: '400'
                    }}>
                        A backend system for JPI Education used to manage the company's digital operations, including customer management, lead capture, internal data management, and more integrations.
                    </p>
                    
                    {/* Technical Features */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2rem',
                        marginTop: '1.5rem'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: '#00D4AA',
                                    borderRadius: '50%',
                                    marginTop: '0.5rem',
                                    flexShrink: 0
                                }}></div>
                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: '1.5',
                                    color: '#555',
                                    margin: '0',
                                    fontWeight: '500'
                                }}>
                                    Academic Results Tracking Integration
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: '#00D4AA',
                                    borderRadius: '50%',
                                    marginTop: '0.5rem',
                                    flexShrink: 0
                                }}></div>
                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: '1.5',
                                    color: '#555',
                                    margin: '0',
                                    fontWeight: '500'
                                }}>
                                    Airwallex Financial Integration With Slack
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: '#00D4AA',
                                    borderRadius: '50%',
                                    marginTop: '0.5rem',
                                    flexShrink: 0
                                }}></div>
                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: '1.5',
                                    color: '#555',
                                    margin: '0',
                                    fontWeight: '500'
                                }}>
                                    Complex Event-Driven Lead Capture Systems
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: '#00D4AA',
                                    borderRadius: '50%',
                                    marginTop: '0.5rem',
                                    flexShrink: 0
                                }}></div>
                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: '1.5',
                                    color: '#555',
                                    margin: '0',
                                    fontWeight: '500'
                                }}>
                                    Google Drive Financial File Management Integration
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {selectedImage !== null && (
                    <div style={{
                        marginBottom: '3rem',
                        maxWidth: '900px',
                        width: '100%',
                        padding: '2rem',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        animation: 'fadeIn 0.3s ease-in-out'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{
                                flex: '1',
                                minWidth: '300px'
                            }}>
                                <img 
                                    src={projectData[selectedImage].image}
                                    alt={projectData[selectedImage].title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                        objectFit: 'contain',
                                        backgroundColor: 'white'
                                    }}
                                />
                            </div>
                            <div style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    fontWeight: '700',
                                    margin: '0',
                                    color: '#333'
                                }}>
                                    {projectData[selectedImage].title}
                                </h3>
                                <p style={{
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6',
                                    color: '#555',
                                    margin: '0'
                                }}>
                                    {projectData[selectedImage].description}
                                </p>
                                <button 
                                    onClick={() => setSelectedImage(null)}
                                    style={{
                                        alignSelf: 'flex-start',
                                        padding: '0.5rem 1rem',
                                        backgroundColor: '#00D4AA',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        marginTop: '1rem'
                                    }}
                                >
                                    Close Details
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                
                <p style={{ 
                    maxWidth: '700px', 
                    textAlign: 'center', 
                    fontSize: '1.1rem', 
                    lineHeight: '1.6', 
                    color: '#666',
                    marginBottom: '2rem'
                }}>
                    Click on the folder below to explore different aspects of the JPI Education project. Each paper contains brand assets and workspace imagery showcasing the educational technology platform.
                </p>
                
                <div style={{ 
                    height: '600px', 
                    width: '600px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Folder 
                        size={2.5} 
                        color="#00D4AA" 
                        className="project-folder"
                        items={folderItems}
                    />
                </div>
            </div>
        </div>
    );
}
