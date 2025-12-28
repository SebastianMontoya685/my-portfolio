import React from 'react';
import CircularGallery from '../CircularGallery/CircularGallery';
import './OtherExperience.css';

const experiences = [
  {
    image: 'https://picsum.photos/seed/exp1/800/600',
    text: 'Experience 1'
  },
  {
    image: 'https://picsum.photos/seed/exp2/800/600',
    text: 'Experience 2'
  },
  {
    image: 'https://picsum.photos/seed/exp3/800/600',
    text: 'Experience 3'
  },
  {
    image: 'https://picsum.photos/seed/exp4/800/600',
    text: 'Experience 4'
  },
  {
    image: 'https://picsum.photos/seed/exp5/800/600',
    text: 'Experience 5'
  },
  {
    image: 'https://picsum.photos/seed/exp6/800/600',
    text: 'Experience 6'
  }
];

export default function OtherExperience() {
    return (
        <div className='other-experience' id='other-experience'>
            <div className='other-experience-title'>Other Experience.</div>
            <div style={{ height: '600px', position: 'relative', width: '100%', padding: '2rem 0' }}>
                <CircularGallery 
                    items={experiences}
                    bend={3} 
                    textColor="#000000" 
                    borderRadius={0.05} 
                    scrollEase={0.02}
                />
            </div>
        </div>
    );
}

