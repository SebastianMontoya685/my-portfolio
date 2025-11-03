import React from 'react';
import Folder from '../ProjectSection/Folder';
import './ProjectsPage.css';

export default function ProjectsPage() {
    const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

    // Project data with images and descriptions
    const projectData = [
        {
            image: "/e-invoicing-homedark.jpg",
            title: "Dark Theme Home Page",
            description: "The main landing page featuring a sleek dark theme design. This page showcases the modern UI/UX approach with intuitive navigation and clean typography. Users can easily access all major features from this central hub."
        },
        {
            image: "/e-invoicingdashboard.jpg",
            title: "Main Dashboard",
            description: "The primary dashboard provides users with a comprehensive overview of their invoicing activities. Features include recent transactions, pending invoices, and quick action buttons for common tasks like creating new invoices."
        },
        {
            image: "/e-invoicingdashboard2.jpg",
            title: "Analytics Dashboard",
            description: "Advanced analytics and reporting dashboard showing detailed insights into invoicing patterns, revenue trends, and business metrics. Interactive charts and graphs help users make data-driven decisions."
        },
        {
            image: "/e-invoicingdashboard3.jpg",
            title: "Invoice Management",
            description: "Dedicated invoice management interface allowing users to create, edit, and track invoices. Features include template selection, client management, and automated invoice generation with customizable fields."
        },
        {
            image: "/e-invoicingfiles.jpg",
            title: "File Management System",
            description: "Robust file management system for organizing and storing invoice-related documents. Users can upload, categorize, and search through files with advanced filtering options and secure cloud storage."
        },
        {
            image: "/e-invoicinghistory.jpg",
            title: "Transaction History",
            description: "Comprehensive transaction history view displaying all past invoicing activities. Features include search functionality, date filtering, and detailed transaction records with payment status tracking."
        },
        {
            image: "/e-invoicinghome.jpg",
            title: "Light Theme Home",
            description: "Alternative light theme version of the home page, providing users with theme customization options. Maintains the same functionality while offering a different visual experience for user preference."
        },
        {
            image: "/e-invoicinglogin.jpg",
            title: "Secure Login Portal",
            description: "Secure authentication system with modern login interface. Features include multi-factor authentication, password recovery, and session management to ensure user data protection and system security."
        }
    ];

    // E-invoicing project images as folder contents
    const folderItems = projectData.map((item, index) => (
        <img 
            key={index}
            src={item.image} 
            alt={item.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer' }} 
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
                    E-Invoicing Project
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
                    border: '2px solid #5227FF20'
                }}>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.7',
                        color: '#333',
                        margin: '0 0 2rem 0',
                        textAlign: 'center',
                        fontWeight: '400'
                    }}>
                        An end-to-end e‑invoicing platform that turns raw invoice files into structured, validated e‑invoices and delivers them to recipients. It removes manual data entry, standardizes invoices into UBL, and provides a simple flow to verify and send invoices.
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
                                    backgroundColor: '#5227FF',
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
                                    Automated UBL standardization and validation
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: '#5227FF',
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
                                    Real-time invoice processing and delivery
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: '#5227FF',
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
                                    Secure file management and storage system
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: '#5227FF',
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
                                    Interactive analytics and reporting dashboard
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
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
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
                                        backgroundColor: '#5227FF',
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
                    Click on the folder below to explore different aspects of the E-Invoicing project. Each paper contains screenshots and details about specific features and functionality.
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
                        color="#5227FF" 
                        className="project-folder"
                        items={folderItems}
                    />
                </div>
            </div>
        </div>
    );
}


