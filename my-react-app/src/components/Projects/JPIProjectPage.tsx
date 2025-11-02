import React from 'react';
import './JPIProjectPage.css';
import './ProjectsPage.css';
import Folder from '../ProjectSection/Folder.tsx';
import cover from '../../ryan-klaus-GdUw1owQqWE-unsplash.jpg';

export default function JPIProjectPage() {
    const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

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
        <div className='jpi-page'>
            <header className='jpi-hero'>
                <div className='jpi-hero-text'>
                    <h1 className='jpi-title'>JPI — Tech Ops</h1>
                    <p className='jpi-subtitle'>Foundational experience: operations, automation, incident response, and shipping reliably.</p>
                </div>
                <img className='jpi-hero-image' src={cover} alt='JPI cover' />
            </header>

            <section className='jpi-section'>
                <h2>Overview</h2>
                <p>
                    This page is a placeholder to capture the story of my first role in the software industry. We will iterate on the content, examples, and visuals over time. For now it outlines responsibilities, achievements, and the stack I worked with.
                </p>
            </section>

            <section className='jpi-section jpi-grid'>
                <div>
                    <h3>Key Responsibilities</h3>
                    <ul>
                        <li>Monitored production systems and triaged incidents.</li>
                        <li>Built small automations to reduce manual workload.</li>
                        <li>Created documentation and runbooks for repeatable tasks.</li>
                        <li>Coordinated with engineering to improve reliability.</li>
                    </ul>
                </div>
                <div>
                    <h3>Selected Achievements</h3>
                    <ul>
                        <li>Reduced mean time to resolution through better alert routing.</li>
                        <li>Automated frequent checks with simple scripts and dashboards.</li>
                        <li>Improved on-call handoff with concise runbooks.</li>
                    </ul>
                </div>
            </section>

            <section className='jpi-section'>
                <h3>Tech & Skills</h3>
                <div className='jpi-tech-badges'>
                    <span className='jpi-badge'>React</span>
                    <span className='jpi-badge'>TypeScript</span>
                    <span className='jpi-badge'>Spring Boot</span>
                    <span className='jpi-badge'>AWS</span>
                    <span className='jpi-badge'>Automation</span>
                    <span className='jpi-badge'>Monitoring</span>
                </div>
            </section>

            <section className='jpi-section'>
                <h3>Notes for Future Iterations</h3>
                <ul>
                    <li>Add real screenshots (dashboards, tools, or diagrams).</li>
                    <li>Include two or three detailed stories with measurable outcomes.</li>
                    <li>Embed links to code samples or demos where possible.</li>
                </ul>
            </section>

            <section className='jpi-section'>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <p style={{ maxWidth: '700px', textAlign: 'center', margin: '0 auto 2rem', lineHeight: '1.6', color: '#666' }}>
                        Click on the folder below to explore different aspects of the JPI Education project. Each paper contains brand assets and workspace imagery showcasing the educational technology platform.
                    </p>
                    <div style={{ height: '600px', width: '600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Folder size={2.5} color="#00D4AA" className="project-folder" items={folderItems} />
                    </div>

                    {selectedImage !== null && (
                        <div style={{
                            margin: '2rem auto 0',
                            maxWidth: '900px',
                            width: '100%',
                            padding: '2rem',
                            backgroundColor: '#f9f9f9',
                            borderRadius: '12px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                <div style={{ flex: '1', minWidth: '300px' }}>
                                    <img
                                        src={projectData[selectedImage].image}
                                        alt={projectData[selectedImage].title}
                                        style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', objectFit: 'contain', backgroundColor: 'white' }}
                                    />
                                </div>
                                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: '700', margin: '0', color: '#333' }}>{projectData[selectedImage].title}</h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', margin: '0' }}>{projectData[selectedImage].description}</p>
                                    <button onClick={() => setSelectedImage(null)} style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', backgroundColor: '#00D4AA', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600', marginTop: '1rem' }}>Close Details</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
