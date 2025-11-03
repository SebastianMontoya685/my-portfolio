import React, { useState } from 'react';
import Folder from '../ProjectSection/Folder';

const PROJECTS = [
  {
    name: 'E-Invoicing Project',
    cover: '/e-invoicingdashboard2.jpg',
    image: '/e-invoicingdashboard2.jpg',
    description: 'E-Invoicing: UNSW Project Placeholder Description.'
  }
];

export default function UNSWPage() {
  const [modal, setModal] = useState(null);
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1rem 5rem 1rem' }}>
      <h1 style={{ fontWeight: 900, fontSize: '2.5rem', marginBottom: 8 }}>UNSW — E-Invoicing Project</h1>
      <p style={{ fontSize: '1.15rem', color: '#222', marginBottom: 38 }}>
        Role summary goes here. (UNSW E-Invoicing placeholder)
      </p>
      <section style={{ margin: '70px 0', minHeight: 350 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 22, color: '#000' }}>UNSW Projects</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Folder
            size={2.5}
            color="#000"
            className="project-folder"
            items={PROJECTS.map((proj, idx) => (
              <img
                key={proj.name}
                src={proj.cover}
                alt={proj.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'white', border: '3px solid #000' }}
                onClick={e => { e.stopPropagation(); setModal({ projectIdx: idx }); }}
              />
            ))}
          />
        </div>
      </section>
      {modal && (
        <div style={{ position: 'fixed', zIndex: 200, top: 0, left: 0, width: '100vw', height: '100vh', background: '#0009', display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto' }}>
          <div style={{ background: '#fff', borderRadius: 14, padding: '2rem', maxWidth: 620, width: '90vw', margin: '50px 0', boxShadow: '0 8px 40px #0004', position: 'relative', zIndex: 210 }}>
            <div style={{ marginBottom: 18, fontSize: '1.1rem', color: '#111', minHeight: 50, textAlign: 'center' }}>
              {PROJECTS[modal.projectIdx].description}
            </div>
            <img
              src={PROJECTS[modal.projectIdx].image}
              alt={PROJECTS[modal.projectIdx].name}
              style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'contain', background: '#fff', border: '2.5px solid #111', boxShadow: '0 3px 20px #0002', maxHeight: '55vh' }}
            />
            <button
              onClick={() => setModal(null)}
              style={{ marginTop: 30, padding: '0.5rem 2.5rem', background: '#000', border: 'none', color: 'white', fontWeight: 'bold', fontSize: '1rem', borderRadius: 8, cursor: 'pointer', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
