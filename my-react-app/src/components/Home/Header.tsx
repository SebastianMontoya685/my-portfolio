import React from 'react';
import './Header.css';
import Dock from './Dock';
import { FiHome, FiGrid, FiBriefcase, FiShare2 } from 'react-icons/fi';    
export default function Header() {
    return (
        <div className='header-container' id='header'>
            <div className='header'>
                {/* <div className='header-left-container'> */}
                <div className='header-left'>
                    <h1 className='header-title'>Bringing <span className="underlined-text">Cloud & Backend</span> Skills<span className="underlined-text"></span> To Your Enterprise</h1>
                    <button className='header-button'>See More</button>
                </div>
                {/* </div> */}
                {/* Home-only floating dock */}
                <Dock
                    items={[
                        {
                            icon: <FiHome size={24} />,
                            label: 'Home',
                            onClick: () => document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' })
                        },
                        {
                            icon: <FiGrid size={24} />,
                            label: 'Projects',
                            onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                        },
                        {
                            icon: <FiBriefcase size={24} />,
                            label: 'Work Experience',
                            onClick: () => document.getElementById('work-experience')?.scrollIntoView({ behavior: 'smooth' })
                        },
                        {
                            icon: <FiShare2 size={24} />,
                            label: 'Socials',
                            onClick: () => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
                        }
                    ]}
                    distance={100}
                    magnification={90}
                    spring={{ mass: 0.1, stiffness: 150, damping: 20 }}
                />
            </div>
        </div>
    );
}