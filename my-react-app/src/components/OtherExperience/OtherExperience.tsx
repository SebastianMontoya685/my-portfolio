import React from 'react';
import CircularGallery from '../CircularGallery/CircularGallery';
import { useTheme } from '../../context/ThemeContext';
import './OtherExperience.css';

const experiences = [
  {
    image: '/UNSW-logo.png',
    text: 'UNSW'
  },
  {
    image: '/terrible-ideas-hackathon.jpeg',
    text: 'Hackathons'
  },
  {
    image: '/Create-soc.jpg',
    text: 'Create Society'
  },
  {
    image: '/CSE-soc.jpg',
    text: 'CSE Society'
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
    const { theme } = useTheme();
    const textColor = theme === 'dark' ? '#ffffff' : '#000000';
    
    return (
        <div className='other-experience' id='other-experience'>
            <div className='other-experience-title'>Other Experience.</div>
            <div style={{ height: '600px', position: 'relative', width: '100%', padding: '2rem 0' }}>
                <CircularGallery 
                    items={experiences}
                    bend={3} 
                    textColor={textColor} 
                    borderRadius={0.05} 
                    scrollEase={0.02}
                />
            </div>
        </div>
    );
}

