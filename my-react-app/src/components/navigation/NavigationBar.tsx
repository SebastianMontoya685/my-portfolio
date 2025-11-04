import React from 'react';
import './NavigationBar.css';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar() {
    const navigate = useNavigate();
    return (
        <div className='navigation-bar'>
            <div className='navigation-bar-left'>
                <h1 className='nav-title' onClick={() => navigate('/')}>Sebastian Montoya.</h1>
            </div>
            <div className='navigation-bar-right'>
                <div className='navigation-bar-right-buttons'>
                    <button onClick={() => navigate('/')}>Home</button>
                    <button onClick={() => navigate('/contact')}>Contact</button>
                    <button onClick={() => navigate('/jpi-project')}>JPI</button>
                    <button onClick={() => navigate('/tpra')}>TPRA</button>
                    <button onClick={() => navigate('/unsw')}>UNSW</button>
                    <button onClick={() => navigate('/projects')}>All Projects</button>
                </div>
            </div>
        </div>
    );
}