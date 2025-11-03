import React, { useState, useRef, useEffect } from 'react';
// import './JPIPage.css';
import Folder from '../ProjectSection/Folder';
import ProjectSlideshow from '../ProjectSection/ProjectSlideshow';

// --- Monthly Timeline Data ---
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];
const TIMELINE = MONTHS.map((month, i) => ({
  month,
  highlight: `Highlight for ${month} (placeholder)`
}));

// --- Placeholder Project Data ---
const PROJECTS = [
  {
    name: 'JPI Global',
    cover: '/JPIeducationlogo.webp',
    images: ['/JPIeducationlogo.webp', '/placeholder-project.jpg'],
    descriptions: [
      'JPI Global logo and branding. (placeholder)',
      'Dashboard for global user analytics. (placeholder)'
    ]
  },
  {
    name: 'JPI Project',
    cover: '/jpiprojectoffice.webp',
    images: ['/jpiprojectoffice.webp', '/placeholder-project.jpg'],
    descriptions: [
      'Office environment and workflows. (placeholder)',
      'Project tool interface example. (placeholder)'
    ]
  }
];

export default function JPIPage() {
  const [modal, setModal] = useState<{projectIdx: number, slideIdx: number} | null>(null);
  const [highlightedIdx, setHighlightedIdx] = useState(0);
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    monthRefs.current.forEach((el, idx) => {
      if (!el) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.60) {
            setHighlightedIdx(idx);
          }
        },
        {
          threshold: [0.6],
          rootMargin: '-90px 0px -60% 0px', // tune for earlier/later firing
        }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <div style={{maxWidth: 900, margin: '0 auto', padding: '3rem 1rem 5rem 1rem'}}>
      {/* Role Title & Description */}
      <h1 style={{fontWeight: 900, fontSize: '2.5rem', marginBottom: 8}}>JPI — Tech Ops</h1>
      <p style={{fontSize: '1.15rem', color: '#222', marginBottom: 38}}>
        Foundational role: operations, automation, incident response, reliability.
      </p>
      {/* Vertical Timeline: Scroll highlights */}
      <section style={{position: 'relative', margin: '0 auto 56px', minHeight: 1800, maxWidth: 540, padding: '15px 0 80px 0'}}>
        <h2 style={{fontSize: '1.35rem', fontWeight: 800, marginBottom: 24, textAlign:'center', color:'#000'}}>Role Timeline Highlights</h2>
        <div style={{position:'absolute', top: 70, left: '30px', width: 4, height:'91%', background:'#000', zIndex: 0, borderRadius:2}} />
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', position:'relative', zIndex:2, height:'100%', gap:64, marginLeft:0}}>
          {TIMELINE.map((point, i) => {
            const isActive = i === highlightedIdx;
            return (
            <div
              ref={el => {
                monthRefs.current[i] = el;
              }}
              key={i}
              style={{display:'flex', alignItems:'center', minHeight:80, width:'100%', maxWidth:500, zIndex: isActive ? 10 : 1}}
            >
              <div style={{position:'relative', minWidth:60, display:'flex', justifyContent:'center'}}>
                <div style={{
                  width: isActive ? 30 : 22,
                  height: isActive ? 30 : 22,
                  background: isActive ? '#fff' : '#000',
                  borderRadius:'50%',
                  border: isActive ? '5px solid #000' : 'none',
                  boxShadow: isActive ? '0 4px 18px #0002' : 'none',
                  marginLeft:12, zIndex:3,
                  transition: 'all 0.19s cubic-bezier(.85,1.4,.12,1.12)' 
                }}/>
              </div>
              <div
                style={{
                  flex:1,
                  marginLeft:18,
                  background:'#fff',
                  padding: isActive ? '20px 26px' : '12px 18px',
                  borderRadius: 14,
                  boxShadow: isActive ? '0 10px 30px #0004, 0 2px 22px #0001' : '0 2px 14px #0001',
                  color:'#111',
                  fontSize:isActive ? 20 : 16,
                  fontWeight:isActive ? 700 : 500,
                  transform: isActive ? 'scale(1.055)' : 'scale(1)',
                  transition: 'all 0.19s cubic-bezier(.8,1.55,.19,1.12)',
                  zIndex: isActive? 11 : 2,
                  border: isActive? '2.5px solid #222':'none',
                  outline: isActive? '1.5px solid #0001':'none'
                }}>
                <div style={{fontSize:isActive?16:13,color:'#000', fontWeight:'bold',marginBottom:3}}>{point.month}</div>
                <div>{point.highlight}</div>
              </div>
            </div>
          )})}
        </div>
      </section>
      {/* Folder with Projects (all-black styling) */}
      <section style={{margin: '70px 0', minHeight:350}}>
        <h2 style={{fontSize: '1.25rem', fontWeight: 700, marginBottom: 22, color:'#000'}}>JPI Projects</h2>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
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
                onClick={(e) => { e.stopPropagation(); setModal({projectIdx: idx, slideIdx: 0}); }}
              />
            ))}
          />
        </div>
      </section>
      {/* Slideshow Modal */}
      {modal && (
        <div style={{position: 'fixed', zIndex: 95, top:0, left:0, width:'100vw', height:'100vh', background:'#0009', display:'flex', alignItems:'center', justifyContent:'center', overflowY:'auto'}}>
          <div style={{background:'#fff', borderRadius:14, padding: '2rem', maxWidth:620, width:'90vw', margin:'50px 0', boxShadow:'0 8px 40px #0004', position:'relative'}}>
            <div style={{marginBottom:18, fontSize:'1.1rem', color:'#111', minHeight:50, textAlign:'center'}}>
              {PROJECTS[modal.projectIdx].descriptions[modal.slideIdx]}
            </div>
            <ProjectSlideshow
              images={PROJECTS[modal.projectIdx].images}
              autoAdvanceInterval={null}
              onImageClick={() => {}}
              objectFit='contain'
            />
            <div style={{marginTop:12, display:'flex', justifyContent:'center', gap:14}}>
              {PROJECTS[modal.projectIdx].images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setModal({projectIdx: modal.projectIdx, slideIdx: idx})}
                  style={{width: 14, height:14, borderRadius:'50%', border:'none', background:modal.slideIdx === idx ? '#000' : '#eee', cursor:'pointer'}}
                />
              ))}
            </div>
            <button
              onClick={() => setModal(null)}
              style={{marginTop: 30, padding: '0.5rem 2.5rem', background:'#000', border:'none', color:'white', fontWeight:'bold', fontSize:'1rem', borderRadius:8, cursor:'pointer', display:'block', marginLeft:'auto', marginRight:'auto'}}
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
}