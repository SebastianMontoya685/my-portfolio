import React from 'react';
import './Header.css';
import Dock from './Dock';    

export default function Header() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='header-container' id='header'>
            <div className='header'>
                <div className='header-left'>
                    <h1 className='header-title'>Sebastian Montoya.</h1>
                    <button className='header-button' onClick={scrollToProjects}>See More</button>
                </div>
                {/* Home-only floating dock */}
                <Dock
                    items={[
                        {
                            icon: <img src="/house.svg" alt="Home" width={24} height={24} />,
                            label: 'Home',
                            onClick: () => document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' })
                        },
                        {
                            icon: <img src="/file.svg" alt="Projects" width={24} height={24} />,
                            label: 'Projects',
                            onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                        },
                        {
                            icon: <img src="/briefcase.svg" alt="Work Experience" width={24} height={24} />,
                            label: 'Work Experience',
                            onClick: () => document.getElementById('work-experience')?.scrollIntoView({ behavior: 'smooth' })
                        },
                        {
                            icon: <img src="/star.svg" alt="Other Experience" width={24} height={24} />,
                            label: 'Other Experience',
                            onClick: () => document.getElementById('other-experience')?.scrollIntoView({ behavior: 'smooth' })
                        },
                        {
                            icon: <img src="/user.svg" alt="About Me" width={24} height={24} />,
                            label: 'About Me',
                            onClick: () => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })
                        },
                        {
                            icon: <img src="/link.svg" alt="Socials" width={24} height={24} />,
                            label: 'Socials',
                            onClick: () => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
                        }
                    ]}
                />
            </div>
        </div>
    );
}