import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
// import './JPIPage.css';
import Folder from '../ProjectSection/Folder';
// import ProjectSlideshow from '../ProjectSection/ProjectSlideshow';

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
    cover: '/e-invoicingdashboard2.jpg', // use the cloud section image
    image: '/e-invoicingdashboard2.jpg',
    description: 'JPI Global: Placeholder description of the global/cloud project.',
    type: 'image' as const
  },
  {
    name: 'JPI Project',
    cover: '/jpiprojectoffice.webp', // office/backend section image
    image: '/jpiprojectoffice.webp',
    description: 'JPI Project: Placeholder description of the backend project.',
    type: 'image' as const
  },
  {
    name: 'Form Integrations',
    cover: '/form-integrations.pdf',
    image: '/form-integrations.pdf',
    description: 'Form Integrations: A diagram showing the Paperform webhook integrations architecture.',
    type: 'pdf' as const
  }
];

function useDebouncedValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

export default function JPIPage() {
  const [modal, setModal] = useState<{ projectIdx: number } | null>(null); // modal: {projectIdx: number}
  const [highlightedIdx, setHighlightedIdx] = useState(0);
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);
  // for a smoother/faded animation, track the "raw" candidate index and debounce the committed highlight
  const [candidateIdx, setCandidateIdx] = useState(0);
  const debouncedHighlightedIdx = useDebouncedValue(candidateIdx, 60); // 60ms debounce for improved responsiveness
  const timelineWrapperRef = useRef(null);
  const [barCoords, setBarCoords] = useState({ top: null, height: null });

  useEffect(() => {
    setHighlightedIdx(debouncedHighlightedIdx);
  }, [debouncedHighlightedIdx]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    monthRefs.current.forEach((el, idx) => {
      if (!el) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.60) {
            setCandidateIdx(idx);
          }
        },
        {
          threshold: [0.6],
          rootMargin: '-90px 0px -60% 0px',
        }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  // Measure the bar position after render
  useLayoutEffect(() => {
    if (!timelineWrapperRef.current || !monthRefs.current[0] || !monthRefs.current[MONTHS.length-1]) {
      setBarCoords({ top: null, height: null });
      return;
    }
    const wrapperRect = timelineWrapperRef.current.getBoundingClientRect();
    const firstDotEl = monthRefs.current[0].querySelector('div > div') as HTMLElement;
    const lastDotEl = monthRefs.current[MONTHS.length-1].querySelector('div > div') as HTMLElement;
    if (!firstDotEl || !lastDotEl) {
      setBarCoords({ top: null, height: null });
      return;
    }
    const firstDotCenter = firstDotEl.getBoundingClientRect().top + firstDotEl.offsetHeight/2 - wrapperRect.top;
    const lastDotCenter = lastDotEl.getBoundingClientRect().top + lastDotEl.offsetHeight/2 - wrapperRect.top;
    // Only set if values actually change (to prevent render loop)
    if (barCoords.top !== firstDotCenter || barCoords.height !== lastDotCenter - firstDotCenter) {
      setBarCoords({ top: firstDotCenter, height: lastDotCenter - firstDotCenter });
    }
    // Note: safe dependency array forces this to run only when monthRefs or wrapperRef may change
    // eslint-disable-next-line
  }, [monthRefs.current[0], monthRefs.current[MONTHS.length-1], timelineWrapperRef.current]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1rem 5rem 1rem' }}>
      {/* Role Title & Description */}
      <h1 style={{ fontWeight: 900, fontSize: '2.5rem', marginBottom: 8, color: 'var(--text-primary)' }}>JPI — Tech Ops</h1>
      <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: 38 }}>
        Foundational role: operations, automation, incident response, reliability.
      </p>
      {/* Timeline: wrapper with measured bar */}
      <section ref={timelineWrapperRef} style={{ position: 'relative', margin: '0 auto 100px', minHeight: 1800, maxWidth: 540, padding: '15px 0 80px 0' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: 24, textAlign: 'center', color: 'var(--text-primary)' }}>Role Timeline Highlights</h2>
        {barCoords.top !== null && barCoords.height !== null && (
          <div style={{ position: 'absolute', left: '30px', width: 4, background: 'var(--text-primary)', zIndex: 0, borderRadius: 2, top: barCoords.top, height: barCoords.height }} />
        )}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', zIndex: 2, height: '100%', gap: 64, marginLeft: 0 }}>
          {TIMELINE.map((point, i) => {
            const isActive = i === highlightedIdx;
            // calculate fading opacity depending on distance from active
            const distance = Math.abs(i - highlightedIdx);
            let fadeOpacity = 1;
            if (distance === 1) fadeOpacity = 0.55;
            else if (distance === 2) fadeOpacity = 0.25;
            else if (distance > 2) fadeOpacity = 0.1;
            // further fade for lower items (optionally apply to above as well)
            // fade-out only for below? then: if (i > highlightedIdx) fadeOpacity = ...
            return (
              <div
                ref={el => { monthRefs.current[i] = el; }}
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: 80,
                  width: '100%',
                  maxWidth: 500,
                  zIndex: isActive ? 10 : 1,
                  opacity: fadeOpacity,
                  transition: 'opacity 450ms cubic-bezier(.8,1.5,.12,1), z-index 0.2s, box-shadow 0.2s'
                }}
              >
                <div style={{ position: 'relative', minWidth: 60, display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    width: isActive ? 30 : 22,
                    height: isActive ? 30 : 22,
                    background: isActive ? 'var(--bg-primary)' : 'var(--text-primary)',
                    borderRadius: '50%',
                    border: isActive ? '5px solid var(--text-primary)' : 'none',
                    boxShadow: isActive ? '0 6px 20px var(--shadow-color)' : 'none',
                    marginLeft: 12, zIndex: 3,
                    transition: 'all 0.35s cubic-bezier(.82,1.46,.12,1.12)',
                  }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    marginLeft: 18,
                    background: 'var(--bg-primary)',
                    padding: isActive ? '20px 26px' : '12px 18px',
                    borderRadius: 14,
                    boxShadow: isActive ? '0 14px 40px var(--shadow-color), 0 3px 28px var(--shadow-color)' : '0 1.5px 10px var(--shadow-color)',
                    color: 'var(--text-primary)',
                    fontSize: isActive ? 20 : 16,
                    fontWeight: isActive ? 700 : 500,
                    transform: isActive ? 'scale(1.055)' : 'scale(1)',
                    transition: 'all 0.35s cubic-bezier(.82,1.15,.19,1.1)',
                    zIndex: isActive ? 11 : 2,
                    border: isActive ? '2.5px solid var(--border-color)' : '1px solid var(--border-light)',
                    outline: isActive ? '1.5px solid var(--shadow-color)' : 'none',
                  }}
                >
                  <div style={{ fontSize: isActive ? 16 : 13, color: 'var(--text-primary)', fontWeight: 'bold', marginBottom: 3 }}>{point.month}</div>
                  <div style={{ color: 'var(--text-secondary)' }}>{point.highlight}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* For a high-end visual, you might overlay a vertical gradient white-to-transparent mask here at the bottom/end */}
      </section>
      {/* Folder: Only 1 image per project; modal z-index very high! */}
      <section style={{ marginTop: '120px', marginBottom: '70px', minHeight: 350 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 22, color: 'var(--text-primary)' }}>JPI Projects</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Folder
            size={2.5}
            color="var(--text-primary)"
            className="project-folder"
            items={PROJECTS.map((proj, idx) => {
              // Handle PDF files differently - show a PDF icon/preview
              if (proj.type === 'pdf') {
                return (
                  <div
                    key={proj.name}
                    onClick={e => { 
                      e.stopPropagation(); 
                      // Open PDF in new browser tab
                      window.open(proj.cover, '_blank');
                    }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px', 
                      cursor: 'pointer', 
                      backgroundColor: 'white', 
                      border: '3px solid var(--border-color)',
                      padding: '1rem',
                      boxSizing: 'border-box'
                    }}
                  >
                    {/* PDF Icon */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="64" 
                      height="64" 
                      viewBox="0 0 256 256"
                      style={{ marginBottom: '0.5rem' }}
                    >
                      <path fill="#E53935" d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-92-80a8,8,0,0,1-8,8H92v16h8a8,8,0,0,1,0,16H84a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H92v8h8A8,8,0,0,1,108,136Zm48,8a28,28,0,0,1-28,28h-4a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8h4A28,28,0,0,1,156,144Zm-16,0a12,12,0,0,0-12-12v24A12,12,0,0,0,140,144Zm52-8v24a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Z"/>
                    </svg>
                    <span style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: 600, 
                      color: '#333',
                      textAlign: 'center'
                    }}>
                      {proj.name}
                    </span>
                    <span style={{ 
                      fontSize: '0.7rem', 
                      color: '#666',
                      marginTop: '0.25rem'
                    }}>
                      Click to open PDF
                    </span>
                  </div>
                );
              }
              
              // Handle image files (default behavior)
              return (
                <img
                  key={proj.name}
                  src={proj.cover}
                  alt={proj.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'white', border: '3px solid var(--border-color)' }}
                  onClick={e => { e.stopPropagation(); setModal({ projectIdx: idx }); }}
                />
              );
            })}
          />
        </div>
      </section>
      {modal && PROJECTS[modal.projectIdx].type === 'image' && (
        <div style={{ position: 'fixed', zIndex: 200, top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto' }}>
          <div style={{ background: 'var(--bg-primary)', borderRadius: 14, padding: '2rem', maxWidth: 620, width: '90vw', margin: '50px 0', boxShadow: '0 8px 40px var(--shadow-strong)', position: 'relative', zIndex:210, border: '2px solid var(--border-color)' }}>
            <div style={{ marginBottom: 18, fontSize: '1.1rem', color: 'var(--text-primary)', minHeight: 50, textAlign: 'center' }}>
              {PROJECTS[modal.projectIdx].description}
            </div>
            <img
              src={PROJECTS[modal.projectIdx].image}
              alt={PROJECTS[modal.projectIdx].name}
              style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'contain', background: 'var(--bg-secondary)', border: '2.5px solid var(--border-color)', boxShadow: '0 3px 20px var(--shadow-color)', maxHeight: '55vh' }}
            />
            <button
              onClick={() => setModal(null)}
              style={{ marginTop: 30, padding: '0.5rem 2.5rem', background: 'var(--text-primary)', border: 'none', color: 'var(--bg-primary)', fontWeight: 'bold', fontSize: '1rem', borderRadius: 8, cursor: 'pointer', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
}